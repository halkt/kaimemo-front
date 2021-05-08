import Link from 'next/link'
import styles from '../../styles/List.module.css'
import ItemList from '../../components/ItemList'

export default function List() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ItemList />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </div>
  )
}
