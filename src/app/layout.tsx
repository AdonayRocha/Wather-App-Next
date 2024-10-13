// app/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaSignInAlt, FaInfoCircle } from 'react-icons/fa';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
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
        <main className={styles.content}>{children}</main>
      </body>
    </html>
  );
}
