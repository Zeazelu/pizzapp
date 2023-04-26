import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Zapłacisz 12zł przy dostawie.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Imię i nazwisko</label>
          <input
            placeholder="Imię i nazwisko..."
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Numer telefonu</label>
          <input
            type="text"
            placeholder="+48 234 567 89"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adres</label>
          <textarea
            rows={5}
            placeholder="aleja Tysiąclecia Państwa Polskiego 7, 25-314 Kielce"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Zamów
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;