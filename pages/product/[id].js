import axios from 'axios';
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Product = ({pizza}) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const changePrice = (number) => {
      setPrice(price + number);
    }

    const handleSize = (sizeIndex) => {
      const difference = pizza.prices[sizeIndex] - pizza.prices[size];
      setSize(sizeIndex);
      changePrice(difference);
    }

    const handleChange = (e,option) => {
      const checked = e.target.checked;
      if(checked) {
        changePrice(option.price);
        setExtras((prev) => [...prev, option])
      } else {
        changePrice(-option.price);
        setExtras(extras.filter((extra) => extra._id !== option._id));
      }
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={pizza.image} contain="true" fill alt=''/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{price}zł</span>
        <p className={styles.desc}>{pizza.description}</p>
        <h3 className={styles.choose}>Wybierz rozmiar pizzy</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>handleSize(0)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Mała</span>
            </div>
            <div className={styles.size} onClick={()=>handleSize(1)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Średnia</span>
            </div>
            <div className={styles.size} onClick={()=>handleSize(2)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Duża</span>
            </div>
        </div>
        <h3 className={styles.choose}>Wybierz dodatkowe składniki</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
                <input type='checkbox' id={option.text} name={option.text} className={styles.checkbox} onChange={(e)=>handleChange(e,option)}/>
                <label htmlFor='dough'>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input onChange={(e) => setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      pizza: res.data,
    }
  }
}
export default Product
