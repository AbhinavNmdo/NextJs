import React from 'react'
import Head from 'next/head';

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((cur)=>{
        return {
            params: {
                itemNo: cur.id.toString()
            }
        }
    })

    return {
        paths, 
        fallback: false
    };
}

export const getStaticProps = async (context)=>{
    const id = context.params.itemNo;
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

const itemNo = ({data}) => {
    return (
        <>
        <Head>
            <title>Items</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </Head>
        <div className="container my-5">
            <div className="card p-4">
                <h1 className="form-text fs-1">
                    {data.title}
                </h1>
                <h1 className="form-text fs-1">
                    {data.body}
                </h1>
            </div>
        </div>
        </>
    )
}

export default itemNo;
