import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>About blogi<span style = {{color: "green"}}>fy</span></h1>
      <h2>Overview</h2>
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis id similique consequuntur minima recusandae animi commodi a fugiat iure cumque, non voluptate labore enim optio aut ullam, magni sint consectetur nesciunt numquam? Maiores ab enim ipsa doloribus libero est nihil exercitationem providexercitationem tempora! Inventore voluptates mollitia dolorum ducimus deleniti, eum voluptatum sint amet sed possimus omnis molestias id nobis consequatur dolorem recta fuga enim soluta error ad nemo iusto sint dolorem placeat est eum corrupti fugit unde amet quod, repudiandae, odio quia praesentium aut voluptates in! Consectetur corrupti commodi magnam. Repellat nesciunt asperiores veritatis doloremque atque consectetur nesciunt magni exercitationem sequi doloremque impedit repellendus ea quaerat quos consequatur ratione optio facere animi? Adipisci harum ores tempore quam? Eaque officia qui laudantium porro suscipit earum esse eum dicta minima nesciunt!</p> */}
       <p>This is a simple blog app made in <a href="https://nextjs.org/" style={{color : "green"}}>Next js</a> currently the blogs are hardcoded and the code resides on my <a href="https://github.com/subham827" style={{ color : "green"}}>Github </a>account. So if you want to contribute to this app you know where to go. The app is currently in beta mode 🔬🧪, so it is a work in progress 👷‍♂️</p>  
      <h2>About the creator</h2>
      <p>I am a solo web developer🤓 aspiring to learn more and more. To know more about me you can always visit my <a href="https://clever-biscochitos-596a75.netlify.app/" style={{color: "red"}}>Portfolio</a> </p>
    </div>
    </>
  )
}

export default About