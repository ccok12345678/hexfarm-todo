function InputBar(props) {
  return (
    <form>
      <label htmlFor="todo"
        className="form-label"
      >輸入代辦事項：</label>
      <input type="text" id="todo"
        placeholder="輸入事項..."
        className="form-input"/>
      <button type="submit"
        className="form-submit">加入代辦</button>
    </form>
  )
}

export default InputBar
