import styles from "./page.module.css";

const Okazaki = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>岡﨑樹生</h1>
      <p>職業：臨床工学技士 → Webエンジニア見習い</p>
      <p>好きな技術：React / Next.js</p>
      <p className={styles.message}>GitHub の共同開発を楽しく学びましょう！</p>
    </section>
  );
};

export default Okazaki;
