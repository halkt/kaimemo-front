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
  const url = 'https://script.google.com/macros/s/AKfycbwhodlUv89ymI_fQ7Umkw5Z4JFa2ySYMNqwW0QyhDHybwU8r6RiZxgZ6YyIK_-FFGpE2w/exec'
  const res = await fetch(url, { redirect: 'follow' })
  const items = await res.json()

  return {
    props: { 
      items,
    }
  }
}
