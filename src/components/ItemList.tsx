import { useState } from 'react'
import ItemType from './ItemType'
import Filter from './Filter'
import styles from '../styles/List.module.css'
import { postKaimemoGas, postGasItem } from '../api/postKaimemoGas'
import Item from './Item'
import { cdate } from 'cdate'

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
  const [types, setTypes] = useState(props.types)
  const handleCheck = (checkedItem: Item, checkType: ItemType) => {
    checkType.items = checkType.items.map((item) => {
      if (item.key === checkedItem.key) {
        item.purchased = !item.purchased
      }
      return item
    })
    const postItem: postGasItem = {
      name: checkedItem.name,
      type: checkType.type,
      key: checkedItem.key,
      icon: checkedItem.icon,
      purchased: checkedItem.purchased,
      created_at: checkedItem.created_at,
      updated_at: checkedItem.updated_at,
    }
    setTypes([...types])
    postKaimemoGas(postItem, 'update')
  }
  const handleInput = (checkedItem: postGasItem, checkType: ItemType) => {
    checkType.items = checkType.items.map((item) => {
      return item
    })
    setTypes([...types])
    postKaimemoGas(checkedItem, 'update')
  }
  const handleAdd = (name: string, type) => {
    const timeStamp = cdate().format('YYYY-MM-DD')
    const targetObject: postGasItem = {
      name,
      type: type.type,
      purchased: false,
      created_at: timeStamp,
      updated_at: timeStamp,
    }
    type.items.push(targetObject)
    setTypes([...types])
    postKaimemoGas(targetObject, 'add')
  }
  const [filter, setFilter] = useState('ALL')
  const handleFileterChange = (value: string) => setFilter(value)

  return (
    <div className={styles.panel}>
      <div className={styles.title}>Kaimono Memo</div>
      <Filter value={filter} onChange={handleFileterChange} />
      {types.map((type) => (
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
  )
}
