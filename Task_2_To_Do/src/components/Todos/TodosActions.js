import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = ({
  resetTodo,
  deleteCompletedtodos,
  compleTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodo} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedtodos}
        title="Clear Completed Todos"
        disabled={!compleTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
