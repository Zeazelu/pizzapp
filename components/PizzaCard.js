import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/images/pizza.png" alt="" width="350" height="350"/>
            <h1 className={styles.title}>TŁUSTA KURWA Z HALO</h1>
            <span className={styles.price}>19.90zł</span>
            <p className={styles.desc}>
                Ale zobocz jaka dobra pizzerka
            </p>
        </div>
    )
}

export default PizzaCard