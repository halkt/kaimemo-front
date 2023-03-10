export default function Item({ item, type, onCheck, onInput }) {
  const handleCheck = () => {
    onCheck(item, type);
  };
  const handleInput = e => {
    item.name = e.target.value
    onInput(item, type);
  };

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={handleCheck}
      />
      <input
        className={item.purchased ? 'done-item' : ''}
        type="text"
        defaultValue={item.name}
        onInput={handleInput}
      /> 
    </label>
  );
}
