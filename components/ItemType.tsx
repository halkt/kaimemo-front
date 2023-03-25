import Item from './Item';
import Input from './Input';
import styles from '../styles/List.module.css';

export default function ItemType({ type, filter, onCheck, onInput, onAdd }) {
  const displayItems = type.items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.purchased;
    if (filter === 'DONE') return item.purchased;
  })
  return (
    <div>
      <h3>
        {type.type}
      </h3>
      <div className={styles.itemContainer}>
        {displayItems.map(item => (
          <Item
            key={item.key}
            item={item}
            type={type}
            onCheck={onCheck}
            onInput={onInput}
          />
        ))}
      </div>
      <Input
        type={type}
        onAdd={onAdd}
      />
    </div>
  );
}
