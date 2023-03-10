import { useState } from 'react'
import ItemType from './ItemType';
import Filter from './Filter';
import { postKaimemoGas } from '../api/postKaimemoGas';

export default function ItemList(props) {
  const [types, setTypes] = useState(props.types);
  const handleCheck = (checkedItem, checkType) => {
    let changeItem = {}
    checkType.items = checkType.items.map(item => {
      if (item.key === checkedItem.key) {
        item.purchased = !item.purchased;
        changeItem = item
      }
      return item;
    });
    setTypes([...types])
    postKaimemoGas(changeItem, 'update')
  };
  const handleInput = (checkedItem, checkType) => {
    checkType.items = checkType.items.map(item => {
      return item;
    });
    setTypes([...types])
    postKaimemoGas(checkedItem, 'update')
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
    postKaimemoGas(targetObject, 'add')
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
          onInput={handleInput}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}
