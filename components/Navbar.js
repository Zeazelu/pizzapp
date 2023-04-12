import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/phone.svg" alt="" width="52" height="52" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ZAMÓW TERAZ!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Strona Główna</li>
          <li className={styles.listItem}>Produkty</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.svg" alt="" width="160" height="69" />
          <li className={styles.listItem}>Wydarzenia</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Kontakt</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.svg" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
