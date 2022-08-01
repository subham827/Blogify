import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Script from 'next/script'
export default function Home() {
 
 
  return (
    <div className={styles.container}>
      <style jsx>{`
      .spani{
        color : green;
      }
      .tagline{
        margin-top : 15px;
        font-style : italic;
        color : grey;
        margin-left : 100px;
      }
      `}</style>
      <Head>
        <title>Blogify</title>
        <meta name="description" content="A simple blog page" />
        <meta name="keywords" content="subham,subham dudheria"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Blogi<span className='spani'>fy</span>
        <h6 className="tagline">Read blogs on the go</h6>
        
        </h1>
       

       
      
      </main>

      <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"/>
    </div>
   
  )
}
