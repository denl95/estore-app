import { FilterOptions, Product, SortOptions } from '@/types/product'
import { omit } from '@/utils/omit'
import axios from 'axios'
import { useReducer, useEffect } from 'react'

interface ProductsState {
  loading: boolean
  error?: Error
  data?: Product[]
  sortOptions: SortOptions
  filterOptions: FilterOptions
}

type ProductsAction =
  | { type: 'FETCH_PRODUCTS_START' }
  | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_PRODUCTS_ERROR'; payload: Error }
  | { type: 'SET_SORTING_OPTIONS'; payload: SortOptions }
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_MIN_PRICE'; payload?: number }
  | { type: 'SET_MAX_PRICE'; payload?: number }

function productsReducer(
  state: ProductsState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return { ...state, loading: true, error: undefined, data: undefined }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: undefined,
      }
    case 'SET_SORTING_OPTIONS':
      return {
        ...state,
        sortOptions: action.payload,
      }
    case 'SET_CATEGORY': {
      let categories
      if (state.filterOptions?.categories) {
        const hasCategory = state.filterOptions?.categories.includes(
          action.payload
        )
        if (hasCategory) {
          categories = state.filterOptions?.categories.filter(
            (category) => category !== action.payload
          )
        } else {
          categories = state.filterOptions?.categories.concat(action.payload)
        }
      } else {
        categories = [action.payload]
      }
      const filterOptions: FilterOptions = {
        ...state.filterOptions,
        categories,
      }
      if (!categories.length) {
        delete filterOptions.categories
      }
      return {
        ...state,
        filterOptions,
      }
    }
    case 'SET_NAME':
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          name: action.payload,
        },
      }
    case 'SET_MIN_PRICE':
      return {
        ...state,
        filterOptions: {
          ...omit(state.filterOptions, 'minPrice'),
          ...(action.payload ? { minPrice: action.payload } : {}),
        },
      }
    case 'SET_MAX_PRICE':
      return {
        ...state,
        filterOptions: {
          ...omit(state.filterOptions, 'maxPrice'),
          ...(action.payload ? { maxPrice: action.payload } : {}),
        },
      }
    default:
      throw new Error(`Unhandled action type`)
  }
}

export function useProductApi(): [
  ProductsState,
  Record<string, (arg: any) => void>
] {
  const [state, dispatch] = useReducer(productsReducer, {
    loading: false,
    error: undefined,
    data: undefined,
    sortOptions: {},
    filterOptions: {},
  })

  function onSearchQueryChange(name: string) {
    dispatch({ type: 'SET_NAME', payload: name })
  }
  function onSortOptionsChange(sortOptions: SortOptions) {
    dispatch({ type: 'SET_SORTING_OPTIONS', payload: sortOptions })
  }
  function onMaxPriceChange(maxPrice?: number) {
    dispatch({ type: 'SET_MAX_PRICE', payload: maxPrice })
  }
  function onMinPriceChange(minPrice?: number) {
    dispatch({ type: 'SET_MIN_PRICE', payload: minPrice })
  }
  function onCategoryChange(category: string) {
    dispatch({ type: 'SET_CATEGORY', payload: category })
  }

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'FETCH_PRODUCTS_START' })
      try {
        const data = await axios.get(
          `/api/products?${new URLSearchParams({
            ...state.filterOptions,
            ...state.sortOptions,
          })}`
        )
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data.data })
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error })
      }
    }

    fetchData()
  }, [state.filterOptions, state.sortOptions])

  return [
    state,
    {
      onSearchQueryChange,
      onSortOptionsChange,
      onMaxPriceChange,
      onMinPriceChange,
      onCategoryChange,
    },
  ]
}
