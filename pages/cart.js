import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
            <tbody>
            <tr className={styles.tr}> 
                <th>Produkt</th>
                <th>Nazwa</th>
                <th>Dodatki</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Suma</th>
            </tr>
            {cart.products.map(product => (
                <tr className={styles.tr} key={product._id}>
                <td>
                    <div className={styles.imgContainer}>
                        <Image src={product.image} fill cover alt=''/>
                    </div>
                </td>
                <td>
                    <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                    <span className={styles.extras}>
                        {product.extras.map(extra => (
                            <span key={extra._id}>{extra.text}, </span>
                        ))}
                    </span>
                </td>
                <td>
                    <span className={styles.price}>{product.price}</span>
                </td>
                <td>
                    <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                    <span className={styles.total}>{product.price * product.quantity}zł</span>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>PODSUMOWNIE</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Suma częściowa:</b>{cart.total}zł
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Rabat:</b>0.00zł
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Suma:</b>{cart.total}zł
            </div>
            <button className={styles.button}>Zamów!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
