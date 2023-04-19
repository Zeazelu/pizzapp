import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.tytle}>NAJLEPSZA PIZZA W MIEŚCIE</h1>
      <p className={styles.desc}>
        Siema wbijajcie na najlepszą pizze w mieście. Dużo sera, salami od maćka z woli.
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
