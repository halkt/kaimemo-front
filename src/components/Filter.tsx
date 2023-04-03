import styles from '../styles/List.module.css';

export default function Filter({ value, onChange }) {
  const handleClick = (key: string, event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    onChange(key)
  }

  return (
    <div className={styles.tabs}>
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={value === 'ALL' ? 'is-active' : ''}
      >All</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'TODO')}
        className={value === 'TODO' ? 'is-active' : ''}
      >ToDo</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'DONE')}
        className={value === 'DONE' ? 'is-active' : ''}
      >Done</a>
    </div>
  )
}
