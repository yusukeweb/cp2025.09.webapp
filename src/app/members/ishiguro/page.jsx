import styles from "./page.module.css";
import Image from "next/image";

const Ishiguro = () => {
  return (
    <section className={styles.container}>
      <section className={styles.inner}>
        <section className={styles.text}>
          <h1 className={styles.name}>石黒 新</h1>
          <h2 className={styles.h2}>好きなこと</h2>
          <ul className={styles.ul}>
            <li>古着屋で新しい服を安く見つけること</li>
            <li>音楽フェスやライブに参戦すること</li>
            <li>お酒を飲むこと</li>
          </ul>
          <h2 className={styles.h2}>好きなお酒ランキング</h2>
          <ol className={styles.ul}>
            <li>ウイスキー</li>
            <li>ビール</li>
            <li>日本酒</li>
          </ol>
        </section>
        <Image src="/iruka.jpg" width={200} height={150} alt="イルカ" />
      </section>
      <p className={styles.message}>
        子供が生まれてお酒飲むことが減りました。。。
      </p>
    </section>
  );
};

export default Ishiguro;
