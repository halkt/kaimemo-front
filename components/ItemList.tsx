import { useState } from 'react'
import ItemType from './ItemType';
import Filter from './Filter';
import { postKaimemoGas, postGasItem } from '../api/postKaimemoGas';
import Item from './Item';
import { today } from '../utils/date';

export type Item = {
  key: number
  name: string
  icon: string
  purchased: boolean
  created_at: any
  updated_at: any
}

export type ItemType = {
  type: string
  order_num: number
  items: Item[]
}

export type ItemListProps = {
  items: [Item]
  types: [ItemType]
}

export default function ItemList(props: ItemListProps): JSX.Element {
  const [types, setTypes] = useState(props.types);
  const handleCheck = (checkedItem: Item, checkType: ItemType) => {
    let changeItem: Item
    checkType.items = checkType.items.map(item => {
      if (item.key === checkedItem.key) {
        item.purchased = !item.purchased;
        changeItem = item
      }
      return item;
    });
    const postItem: postGasItem = {
      name: changeItem.name,
      type: checkType.type,
      purchased: changeItem.purchased,
      created_at: changeItem.created_at,
      updated_at: changeItem.updated_at,
    } 
    setTypes([...types])
    postKaimemoGas(postItem, 'update')
  };
  const handleInput = (checkedItem: postGasItem, checkType: ItemType) => {
    checkType.items = checkType.items.map(item => {
      return item;
    });
    setTypes([...types])
    postKaimemoGas(checkedItem, 'update')
  };
  const handleAdd = (name: string, type) => {
    const timeStamp = today();
    const targetObject: postGasItem = {
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
  const handleFileterChange = (value: string) => setFilter(value);
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
