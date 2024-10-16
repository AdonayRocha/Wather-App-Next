'use client'

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from 'react-icons/bi';
import './globals.css';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/home" className={styles.link}>
              <BiHomeAlt /><span> Home</span>
            </Link>
            <Link href="/profile" className={styles.link}>
              <BiUserCircle /><span> Profile</span>
            </Link>
            <Link href="/search" className={styles.link}>
              <BiSearch /><span> Search</span>
            </Link>
            <Link href="/favorites" className={styles.link}>
              <BiHeart /><span> Favorites</span>
            </Link>
          </nav>
        </header>
        <main className={styles.content}>
          {isClient ? children : null}
        </main>
      </body>
    </html>
  );
}
