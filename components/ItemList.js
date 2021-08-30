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
  const postItem = (targerItem) => {
    fetch('https://script.google.com/macros/s/AKfycbwhodlUv89ymI_fQ7Umkw5Z4JFa2ySYMNqwW0QyhDHybwU8r6RiZxgZ6YyIK_-FFGpE2w/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: targerItem.name,
        icon: targerItem.icon,
        type: targerItem.type,
        purchased: targerItem.purchased
      })
    }).then(function(response) {
      // レスポンス結果
    }, function(error) {
      // エラー内容
    });
  };
  const handleAdd = name => {
    const timeStamp = '2021-08-30';
    const targetObject = {
      key: getKey(),
      name,
      type: '',
      purchased: false,
      created_at: timeStamp,
      updated_at: timeStamp
    };
    postItem(targetObject)
    setItems([...items, targetObject])
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
