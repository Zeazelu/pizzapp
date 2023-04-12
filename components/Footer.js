import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/bg.png" fill alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                    NASZA PIZZERIA TO PRZYTULNE MIEJSCE W SERCU KIELC, KTÓRE SERWUJE PYSZNĄ I AUTENTYCZNĄ WŁOSKĄ PIZZĘ.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>ZNAJDŹ NASZE RESTAURACJE</h1>
                    <p className={styles.text}>
                        ul. Sienkiewicza 12
                        <br /> 25-007 Kielce
                        <br /> 313-132-333
                    </p>
                    <p className={styles.text}>
                        ul. Świętokrzyska 8
                        <br /> 25-001 Kielce
                        <br /> 313-132-334
                    </p>
                    <p className={styles.text}>
                        ul. Bodzentyńska 16
                        <br /> 25-006 Kielce
                        <br /> 313-132-335
                    </p>
                    <p className={styles.text}>
                        ul. Warszawska 33
                        <br /> 25-547 Kielce
                        <br /> 313-132-336
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>GODZINY OTWARCIA</h1>
                    <p className={styles.text}>
                        OD PONIEDZIAŁKU DO PIĄTKU
                        <br /> 10:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SOBOTA - NIEDZIELA
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer