import React from 'react'
import styles from '../Header/Header.module.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
        <nav className={styles.links}>
            <li>
              <Link to={"/"} className={styles.link}>Home</Link>
            </li>
            <li>
              <Link to={"/eventos"} className={styles.link}>Eventos</Link>
            </li>
            <li>
              <Link to={"/login"} className={styles.link}>Login</Link>
            </li>


        </nav>
      
    </header>
  )
}
