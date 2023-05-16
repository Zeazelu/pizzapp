import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'
import Add from '@/components/Add'
import AddButton from '@/components/AddButton'
import Recomendation from '@/components/Recomendation'

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true);
  
  return (
    <div className={styles.container}>
    <Head>
      <title>PizzApp</title>
      <meta name="description" content="PizzApp is an intuitive and easy-to-use application that allows you to order pizza from your favorite local restaurant in just a few simple steps. The app offers a wide selection of pizzas, including traditional flavors as well as modern variations" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Featured/>
    {admin && <AddButton setClose={setClose}/>}
    <PizzaList pizzaList={pizzaList}/>
    {!close && <Add setClose={setClose}/>}
    <Recomendation/>
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: res.data,
      admin,
    }
  }
}