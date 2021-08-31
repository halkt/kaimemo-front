import Link from 'next/link'
import styles from '../../styles/List.module.css'
import ItemList from '../../components/ItemList'

export default function List({ items }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ItemList items={items} />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  // GASのデータ取得
  const res = await fetch(process.env.gasApiEndPoint, { redirect: 'follow' })
  const items = await res.json()

  return {
    props: { 
      items,
    }
  }
}
