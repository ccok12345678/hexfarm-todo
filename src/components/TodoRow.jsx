function TodoRow(props) {
  const { todo, id, isDone } = props.content

  return (
    <tr className="todo-item">
      <td width={25}>
        <button type="button"
          title="刪除"
          className="btn todo-delete"
          onClick={() => props.removeTodo(id)}
        >X</button>
      </td>
      <td width={25}>
        <input type="checkbox" name="isDone"
          className="todo-is-done"
          checked={isDone}
          onChange={() => props.checkTodo(id, props.index)}
        />
      </td>
      <td>
        <div className={`todo-content ${isDone ? 'text-muted' : ''}`}>
          {todo}
        </div>
      </td>
    </tr>
  )
}

export default TodoRow
