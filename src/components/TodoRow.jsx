function TodoRow(props) {
  const { todo, id } = props.content

  return (
    <tr className="todo-item">
      <td>
        <button type="button"
          title="刪除"
          className="btn todo-delete"
          onClick={() => props.removeTodo(id)}
        >X</button>
      </td>
      <td className="todo-content">
        {todo}
      </td>
    </tr>
  )
}

export default TodoRow
