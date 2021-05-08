export default function Item({ item, onCheck }) {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span
        className={item.done ? 'done-item' : ''}
      >
        {item.text} {item.type}
      </span>
    </label>
  );
}
