import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import HomePage from './HomePage';


const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Consulting - Business, Finance</title>
      </Head>

      <HomePage/>

    </>
  )
}

export default Home
