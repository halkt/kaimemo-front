export default function Item({ item, type, onCheck }) {
  const handleChange = () => {
    onCheck(item, type);
  };

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={handleChange}
      />
      <span
        className={item.purchased ? 'done-item' : ''}
      >
        {item.name}
      </span>
    </label>
  );
}
