'use client'

import './globals.css'; 
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaSignInAlt, FaInfoCircle } from 'react-icons/fa';
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
              <FaHome /> Home
            </Link>
            <Link href="/search" className={styles.link}>
              <FaSearch /> Search
            </Link>
            <Link href="/login" className={styles.link}>
              <FaSignInAlt /> Login
            </Link>
            <Link href="/about" className={styles.link}>
              <FaInfoCircle /> Sobre
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
