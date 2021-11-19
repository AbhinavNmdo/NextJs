import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

export const getStaticProps = async ()=>{
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await responce.json();

    return {
        props: { data }
      }
    }

const Features = ({data}) => {
    return (
        <>
        <Navbar/>
        <Head>
            <title>Features</title>
        </Head>
        <div>
            {data.map((cur)=>{
                return(
                    <div>
                        <h2>{cur.id}</h2>
                        <h1>{cur.title}</h1>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Features
