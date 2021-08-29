export default function Item({ item, onCheck }) {
  const handleChange = () => {
    onCheck(item);
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
        {item.name} {item.type}
      </span>
    </label>
  );
}
