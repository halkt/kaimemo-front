import { useState } from 'react'
import Item from './Item';
import Input from './Input';
import Filter from './Filter';

export default function ItemList() {
  const getKey = () => Math.random().toString(32).substring(2);
  const [items, setItems] = useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Hoge', done: false },
  ]);
  const handleCheck = checkedItem => {
    const newItems = items.map(item => {
      if (item.key === checkedItem.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false}])
  };
  const [filter, setFilter] = useState('ALL');
  const handleFileterChange = value => setFilter(value);
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });

  return (
    <div className="panel">
      <div className="panel-heading">
        ⚛️ React ToDo
      </div>
      <Input onAdd={handleAdd}/>
      <Filter
        value={filter}
        onChange={handleFileterChange}
      />
      {displayItems.map(item => (
        <Item
          key={item.key}
          item={item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
    </div>
  );
}
