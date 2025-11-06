import type { ReactNode } from 'react'
import styles from './page-section.module.css'

type PageSectionProps = {
  title: string
  description?: string
  children?: ReactNode
}

export function PageSection({ title, description, children }: PageSectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </header>
      {children}
    </section>
  )
}

