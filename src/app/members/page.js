import Link from 'next/link'
import styles from './members.module.css'

export default function MembersPage() {
  return (
    <section>
      <h1>メンバー一覧</h1>
      <ul className={styles.grid}>
        <li className={styles.card}>
          <Link href="/members/sample">サンプル太郎</Link>
        </li>
        {/* 生徒はここにカードを追加 */}
      </ul>
    </section>
  )
}
