import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.image} alt="" width="350" height="350" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.prices[0]}zł</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;