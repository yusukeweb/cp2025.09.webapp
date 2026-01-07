import styles from './page.module.css'

export default function SampleMemberPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>サンプル太郎</h1>
      <p>職業：Webエンジニア見習い</p>
      <p>好きな技術：React / Next.js</p>
      <p className={styles.message}>GitHub の共同開発を楽しく学びましょう！</p>
    </section>
  )
}
