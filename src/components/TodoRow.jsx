function TodoRow(props) {
  const { todo, id, isDone } = props.content

  return (
    <tr className="todo-item">
      <td>
        <button type="button"
          title="刪除"
          className="btn todo-delete"
          onClick={() => props.removeTodo(id)}
        >X</button>
      </td>
      <td>
        <input type="checkbox" name="isDone"
          className="todo-is-done"
          checked={isDone}
          onChange={() => props.checkTodo(id, props.index)}
        />
      </td>
      <td className="todo-content">
        {todo}
      </td>
    </tr>
  )
}

export default TodoRow
