import Spinner from 'react-bootstrap/Spinner'
import styles from './styles.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spinner animation="border" />
    </div>
  )
}

export default Loading
