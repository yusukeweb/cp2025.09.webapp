import styles from './page.module.css'
const Ikehata = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.name}>池端 花純</h1>
            <p>前職：看護師</p>
            <p>好きなご飯：海鮮丼</p>
            <p className={styles.message}>これから就活がんばります。</p>
        </section>
    )
}
export default Ikehata;
