import Link from 'next/link'
import styles from '../../styles/List.module.css'
import ItemList from '../../components/ItemList'

export default function List({ items, types }) {
  console.log(items);
  console.log(types);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ItemList
          items={items}
          types={types}
        />
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  // GASのデータ取得
  const res = await fetch(process.env.gasApiEndPoint + '?mode=item', { redirect: 'follow' })
  const resType = await fetch(process.env.gasApiEndPoint + '?mode=itemByType', { redirect: 'follow' })
  const items = await res.json()
  const types = await resType.json()

  return {
    props: { 
      items,
      types
    }
  }
}
