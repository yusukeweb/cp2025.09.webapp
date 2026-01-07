import Styles from "./page.module.css"

const Noichi = () => {
  return (
    <section className={Styles.container}>
      <h1 className={Styles.h1}>
        noichi
      </h1>
      <p>好きな食べ物:ライチ</p>
      <p>アップルパイも好き</p>
      <p className={Styles.message}>好きな技術: JavaScript</p>
    </section>
  );
}

export default Noichi;
