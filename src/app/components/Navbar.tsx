'use client';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">GitHub User Search</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}
