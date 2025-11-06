import { Outlet } from 'react-router-dom'
import { Navigation } from '../../../modules/navigation'
import styles from './root-layout.module.css'

export function RootLayout() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

