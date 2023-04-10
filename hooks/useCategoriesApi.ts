import axios from 'axios'
import { useReducer, useEffect } from 'react'

type Category = string

interface CategoriesState {
  categories: Category[]
  loading: boolean
  error?: Error
}

type CategoriesAction =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: Category[] }
  | { type: 'FETCH_FAILURE'; payload: Error }

const categoriesReducer = (
  state: CategoriesState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: undefined,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const useCategoriesApi = (): CategoriesState => {
  const [state, dispatch] = useReducer(categoriesReducer, {
    categories: [],
    loading: false,
    error: undefined,
  })

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const response = await axios.get('/api/categories')
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error as any })
      }
    }

    fetchCategories()
  }, [])

  return state
}
