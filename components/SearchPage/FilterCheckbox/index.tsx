import { Accordion } from 'react-bootstrap';

export function FilterCheckbox() {
  return (
    <Accordion defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          blabla
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
