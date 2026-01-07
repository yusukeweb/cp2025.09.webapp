import styles from './page.module.css'
import { Dancing_Script } from "next/font/google";

const DancingScript = Dancing_Script({ subsets: ["latin"], weight: ["500"] });

export default function HatanakaPage() {
    return (
        <section className={styles.container}>
            <h1 className={DancingScript.className}>Hatanaka Moe</h1>
            <br></br>
            <p>好きな食べ物：洋定食</p>
            <p>好きな動物：猫</p>
        </section>
    )
}
