import { BlockList } from 'net';
import styles from '../styles/List.module.css';

export default function Item({ item, type, onCheck, onInput }) {
  const handleCheck = () => {
    onCheck(item, type);
  };
  const handleInput = (event: any) => {
    item.name = event.target.value
    onInput(item, type);
  };

  return (
    <label className={styles.card}>
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={handleCheck}
      />
      <input
        className={item.purchased ? 'done-item' : ''}
        type="text"
        defaultValue={item.name}
        onInput={handleInput}
      /> 
    </label>
  );
}
