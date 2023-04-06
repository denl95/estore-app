import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

export function SearchInput() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
      </InputGroup.Text>
      <Form.Control size="lg" type="text" placeholder="Search" />
    </InputGroup>
  );
}
