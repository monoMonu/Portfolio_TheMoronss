import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2 style={styles.heading}>Portfolio</h2>
      <nav style={styles.nav}>
        <Link to={'/'} style={styles.navItem}>
          <span style={{marginRight: '2px'}}>Primary Section</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" strokeWidth="2"></path> <path d="M9 11L11.6002 13.6002V13.6002C11.821 13.821 12.179 13.821 12.3998 13.6002V13.6002L15 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </Link>
        <span style={styles.bar}></span>
        <Link to={'/'} style={styles.navItem}>
          <span style={{marginRight: '2px'}}>Secondary Section</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" strokeWidth="2"></path> <path d="M9 11L11.6002 13.6002V13.6002C11.821 13.821 12.179 13.821 12.3998 13.6002V13.6002L15 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </Link>
      </nav>
      <div style={styles.logoContainer}>
        <img style={styles.logo} src="/logo.png" alt="logo" />
      </div>
    </div>
  )
}

const styles = {
  navbar : {
    background: 'linear-gradient(to right, #565655, #191918)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    margin: '20px 10px',
    height: '40px',
    borderRadius: '60px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyleType: 'none',
    fontSize: '15px',
  },
  navItem: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  bar: {
    width: '1px',
    height: '20px',
    background: '#fff',
    margin: '0 10px',
  },
  logoContainer: {
    width: '80px',
    height: '25px',
    background: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  logo: {
    width: '106px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -51%)',
    objectFit: 'contain',
  }
}

export default Navbar