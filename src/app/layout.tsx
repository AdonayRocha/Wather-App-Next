import { Menu } from '../components/Menu/menu'
import styles from './layout.module.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={styles.body}>
        <main >{children}</main>
        <Menu />
      </body>
    </html>
  )
}
