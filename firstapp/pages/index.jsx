import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Image src="/shop.jpg" width="500" height="500"></Image>        {/* {Internal Storage Source} */}
    <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" width="500" height="300"></Image>
    </>
  )
}
