import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const Home = () => {
    return (
        <>
        <Head>
      <title>Home</title>
    </Head>
        <div>
            <Navbar/>
            <h1>This is home page</h1>
        </div>
        </>
    )
}

export default Home
