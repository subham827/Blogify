import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import * as fs from 'fs';

const Slug = (props) => {
  const[blogs, setBlogs] = useState(props.myblog)
  // const [comments, setComments] = useState(props.data)
 
  console.log(props.data)
  
  // const router = useRouter();
  
  
  return (
    <>
    <h2>{blogs && blogs.title}</h2>
    <hr />
    <center>
      {/* Add javascript.png image */}
      <img src = {blogs && blogs.image} width = "200" height = "200"></img>
    </center>
    <p style={{ marginRight : "20px", marginLeft : "20px"}}>{blogs && blogs.content}</p>
    {/* <p>{blogs && blogs[3]}</p> */}
    
 
    </>
  )
}
export async function getStaticPaths() {
 return {
    paths: [
      { params: { slug: 'learnflas' } },
      { params: { slug: 'learnjs' } },
      { params: { slug: 'learnnextjs' } },
      { params: { slug: 'learnpy' } },
    ],
    fallback: true
 }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  
 let myblog = await  fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
   

 
  return { props: { myblog : JSON.parse(myblog) } };
}


export default Slug