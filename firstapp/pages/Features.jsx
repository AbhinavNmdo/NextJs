import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/dist/client/link'

export const getStaticProps = async ({req})=>{
    const res = await fetch(`/api/data`)
    const data = await res.json();
    return{
        props: {
            data
        }
    }
}



const Features = ({data}) => {
    return (
        <>
        <Navbar/>
        <h1>This is Feature</h1>
        {data.map((cur)=>{
            return(
                <h1>{cur.data}</h1>
            )
        })}
        </>
    )
}

export default Features
