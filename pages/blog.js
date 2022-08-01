import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'

const Blog = (props) => {
    console.log(props);
    const [blogs, setBlogs] = useState(props.allBlogs)
   

    
    
  return (
    <>
    <div className={styles.main}>
   
     {blogs.map((blog)=>{
            return(
              <div className="card frd" style={{width : "24rem"}} key={blog.id}>
              <img src={blog.image} className="card-img-top" alt="..." width="200px"/>
              <div className="card-body">
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-text">{blog.author}</p>
                <Link href = {`/blogpost/${blog.slug}`} className={styles.mlink}>Read now 📖 </Link>
              </div>
            </div>
            )
     })}
             
     
      

    </div>
    </>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  

  let myfile;
  let allBlogs = [];
 for (let index = 0; index < data.length; index++) {
  const item = data[index];
  myfile =  await fs.promises.readFile(('blogdata/' + item), 'utf-8');
  allBlogs.push(JSON.parse(myfile));  
 }
 console.log(allBlogs);
    return {
        props: {
           allBlogs
        },
    }
}

export default Blog