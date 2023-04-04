import Link from 'next/link'
import styles from '../../styles/List.module.css'
import ItemList from '../../components/ItemList'
import type { Item, ItemType, ItemListProps } from '../../components/ItemList'
import { GetStaticProps } from 'next'

export default function List({ items, types }: ItemListProps): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ItemList items={items} types={types} />
        <h2>
          <Link href='/'>Back to home</Link>
        </h2>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // GASのデータ取得
  const res = await fetch(process.env.gasApiEndPoint + '?mode=item', { redirect: 'follow' })
  const resType = await fetch(process.env.gasApiEndPoint + '?mode=itemByType', {
    redirect: 'follow',
  })
  const items = await res.json()
  const types = await resType.json()

  return {
    props: {
      items,
      types,
    },
  }
}
