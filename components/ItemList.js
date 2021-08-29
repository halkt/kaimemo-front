import { useState } from 'react'
import Item from './Item';
import Input from './Input';
import Filter from './Filter';

export default function ItemList(props) {
  const getKey = () => Math.random().toString(32).substring(2);
  const [items, setItems] = useState(props.items);
  const handleCheck = checkedItem => {
    const newItems = items.map(item => {
      if (item.key === checkedItem.key) {
        item.purchased = !item.purchased;
      }
      return item;
    });
    setItems(newItems);
  };
  const handleAdd = name => {
    setItems([...items, { key: getKey(), name, purchased: false}])
  };
  const [filter, setFilter] = useState('ALL');
  const handleFileterChange = value => setFilter(value);
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.purchased;
    if (filter === 'DONE') return item.purchased;
  });

  return (
    <div className="panel">
      <div className="panel-heading">
        Kaimono Memo
      </div>
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <Input onAdd={handleAdd}/>
      <Filter
        value={filter}
        onChange={handleFileterChange}
      />
      {displayItems.map(item => (
        <Item
          item={item}
          onCheck={handleCheck}
        />
      ))}
    </div>
  );
}
