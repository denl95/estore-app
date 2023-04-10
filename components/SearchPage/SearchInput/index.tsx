import { Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

interface Props {
  onChange: (value: string) => void
}

export function SearchInput({ onChange }: Props) {
  function onBlur(e: { target: { value: string } }) {
    if (e.target) {
      onChange(e.target.value)
    }
  }
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faMagnifyingGlass}
        />
      </InputGroup.Text>
      <Form.Control
        data-testid="search-input"
        size="lg"
        type="text"
        placeholder="Search"
        onBlur={onBlur}
      />
    </InputGroup>
  )
}
