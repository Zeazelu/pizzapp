import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>PizzApp</title>
      <meta name="description" content="PizzApp is an intuitive and easy-to-use application that allows you to order pizza from your favorite local restaurant in just a few simple steps. The app offers a wide selection of pizzas, including traditional flavors as well as modern variations" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Featured/>
    <PizzaList/>
    </div>
  )
}
