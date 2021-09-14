import { useState } from 'react'
import ItemType from './ItemType';
import Filter from './Filter';

export default function ItemList(props) {
  const [types, setTypes] = useState(props.types);
  const postItem = (targerItem, mode) => {
    fetch(process.env.gasApiEndPoint, {
      method: 'POST',
      mode: 'no-cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mode: mode,
        key: targerItem.key,
        name: targerItem.name,
        icon: targerItem.icon,
        type: targerItem.type,
        purchased: targerItem.purchased
      })
    }).then(function(response) {
      // レスポンス結果
      console.log({ status: 'ok', mode: mode, item: targerItem, response: response })
    }, function(error) {
      console.log(error)
    });
  };
  const handleCheck = (checkedItem, checkType) => {
    let changeItem = {}
    checkType.items = checkType.items.map(item => {
      if (item.key === checkedItem.key) {
        item.purchased = !item.purchased;
        changeItem = item
      }
      return item;
    });
    setTypes([...types, checkType])
    postItem(changeItem, 'update')
  };
  const handleAdd = (name, type) => {
    const timeStamp = '2021-08-30';
    const targetObject = {
      name,
      type: type.type,
      purchased: false,
      created_at: timeStamp,
      updated_at: timeStamp
    };
    type.items.push(targetObject)
    setTypes([...types])
    postItem(targetObject, 'add')
  };
  const [filter, setFilter] = useState('ALL');
  const handleFileterChange = value => setFilter(value);

  return (
    <div className="panel">
      <div className="panel-heading">
        Kaimono Memo
      </div>
      <Filter
        value={filter}
        onChange={handleFileterChange}
      />
      {types.map(type => (
        <ItemType
          key={type.order_num}
          type={type}
          filter={filter}
          onCheck={handleCheck}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}
