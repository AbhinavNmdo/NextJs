import React from 'react'
import Head from 'next/head';
import Link from 'next/dist/client/link';

export const getStaticProps = async ()=>{
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await responce.json();

    return {
        props: { data }
      }
    }

const index = ({data}) => {
    return (
        <>
        <Head>
            <title>Items</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </Head>
        <div>
            {data.slice(0, 10).map((cur)=>{
                return(
                    <div className="container my-4">
                        <div className="card p-4">
                            <h3 className="form-text fs-4">{cur.id}</h3>
                            <Link href={`/Items/${cur.id}`}><h2 className="form-text fs-2">{cur.title}</h2></Link>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default index
