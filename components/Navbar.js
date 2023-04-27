import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/phone.svg" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ZAMÓW TERAZ!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Strona Główna</li>
          </Link>
          <li className={styles.listItem}>Restauracje</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.svg" alt="" width="160" height="69" />
          <li className={styles.listItem}>Wydarzenia</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Kontakt</li>
        </ul>
        </div>
        <Link href='/cart' passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.svg" alt="" width="30" height="30" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
