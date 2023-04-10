import Loading from '@/components/Loading'
import { Accordion, Form } from 'react-bootstrap'

interface Props {
  items: string[]
  loading: boolean
  onChange: (category: string) => void
}

export function FilterCheckbox({ items, loading, onChange }: Props) {
  function onChangeHandler(e: any) {
    onChange(e.target.value)
  }

  return (
    <Accordion className="mb-3" defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body data-testid="filter-checkbox">
          {loading && <Loading />}
          {items?.map((item) => {
            return (
              <div key={item} className="mb-3">
                <Form.Check
                  onChange={onChangeHandler}
                  type="checkbox"
                  id={item}
                  label={item}
                  value={item}
                />
              </div>
            )
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
