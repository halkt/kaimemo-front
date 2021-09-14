import Item from './Item';
import Input from './Input';

export default function ItemType({ type, filter, onCheck, onAdd }) {
  const displayItems = type.items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.purchased;
    if (filter === 'DONE') return item.purchased;
  })
  return (
    <div className="">
      <h3>
        {type.type}
      </h3>
      {displayItems.map(item => (
        <Item
          key={item.key}
          item={item}
          type={type}
          onCheck={onCheck}
        />
      ))}
      <Input
        type={type}
        onAdd={onAdd}
      />
    </div>
  );
}
