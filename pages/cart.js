import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
            <tr className={styles.tr}> 
                <th>Produkt</th>
                <th>Nazwa</th>
                <th>Dodatki</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Suma</th>
            </tr>
            <tr>
                <td>
                    <div className={styles.imgContainer}>
                        <Image src='/images/pizza.png' fill cover alt=''/>
                    </div>
                </td>
                <td>
                    <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                    <span className={styles.extras}>
                        Grube ciasto, ostry sos
                    </span>
                </td>
                <td>
                    <span className={styles.price}>19.90zł</span>
                </td>
                <td>
                    <span className={styles.quantity}>2</span>
                </td>
                <td>
                    <span className={styles.total}>39.80zł</span>
                </td>
            </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>PODSUMOWNIE</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Suma częściowa:</b>79.60zł
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Rabat:</b>0.00zł
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Suma:</b>79.60zł
            </div>
            <button className={styles.button}>Zamów!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
