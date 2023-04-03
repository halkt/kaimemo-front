import Item from './Item';
import Input from './Input';
import type { ItemType as itemType } from './ItemList';
import styles from '../styles/List.module.css';

type Props = {
  type: itemType
  filter: String
  onCheck: any
  onInput: any
  onAdd: any
}

export default function ItemType(props: Props) {
  const displayItems = props.type.items.filter(item => {
    if (props.filter === 'ALL') return true;
    if (props.filter === 'TODO') return !item.purchased;
    if (props.filter === 'DONE') return item.purchased;
  })
  return (
    <div>
      <h3>
        {props.type.type}
      </h3>
      <div className={styles.itemContainer}>
        {displayItems.map(item => (
          <Item
            key={item.key}
            item={item}
            type={props.type}
            onCheck={props.onCheck}
            onInput={props.onInput}
          />
        ))}
      </div>
      <Input
        type={props.type}
        onAdd={props.onAdd}
      />
    </div>
  );
}
