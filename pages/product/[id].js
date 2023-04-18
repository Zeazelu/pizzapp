import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: '/images/pizza.png',
        name: 'CAMPAGNOLA',
        price: [19.9, 23.9, 27.9],
        desc: 'Ale zobocz jaka smaczna'
    };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={pizza.img} contain="true" fill alt=''/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]}zł</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Wybierz rozmiar pizzy</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Mała</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Średnia</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src='/images/size.svg' fill alt=''/>
                <span className={styles.number}>Duża</span>
            </div>
        </div>
        <h3 className={styles.choose}>Wybierz dodatkowe składniki</h3>
        <div className={styles.ingredients}>
            <div className={styles.option}>
                <input type='checkbox' id='dough' name='dough' className={styles.checkbox}/>
                <label htmlFor='dough'>Grube ciasto</label>
            </div>
            <div className={styles.option}>
                <input type='checkbox' id='cheese' name='cheese' className={styles.checkbox}/>
                <label htmlFor='cheese'>Podwójny ser</label>
            </div>
            <div className={styles.option}>
                <input type='checkbox' id='spicy' name='spicy' className={styles.checkbox}/>
                <label htmlFor='spicy'>Ostry sos</label>
            </div>
            <div className={styles.option}>
                <input type='checkbox' id='garlic' name='garlic' className={styles.checkbox}/>
                <label htmlFor='garlic'>Sos czosnkowy</label>
            </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  )
}

export default Product
