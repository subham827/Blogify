import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import about from './about'
import Link from 'next/link'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([])
  
  return (
    
    <>
    <nav className={styles.mainnav}>
  <ul>
    <Link href='/'>
    <li >Home🏠</li>
    </Link>
    <Link href='/about'>
      <li>About😶‍🌫️</li>
    </Link>
    <Link href='/contact'>

    <li>Contact📞</li>
    </Link>
    <Link href='/blog'>
    <li>Blogs🗒️</li>
    </Link>
  </ul>
</nav>
<hr></hr>
    <Component {...pageProps} />
    </>
  )
  
  
  
}

export default MyApp
