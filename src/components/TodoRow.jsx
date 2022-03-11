function TodoRow(props) {
  return (
    <tr className="todo-item">
      <td>
        <button type="button"
          title="刪除"
          className="btn todo-delete"
        >X</button>
      </td>
      <td>
        <p className="todo-content">
          代辦事項
        </p>
      </td>
    </tr>
  )
}

export default TodoRow
