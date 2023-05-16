import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Najlepsze pizza w mieście czeka na Ciebie!</h1>
      <p className={styles.desc}>
      Rozkoszuj się kulinarnym majstersztykiem - Nasze menu pełne wykwintnych smaków czeka na Twoje podniebienie!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
