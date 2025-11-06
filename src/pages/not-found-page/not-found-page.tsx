import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import styles from './not-found-page.module.css'

export function NotFoundPage() {
  const error = useRouteError()

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Страница не найдена</h2>
      {renderErrorMessage(error)}
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  )
}

function renderErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return (
      <p className={styles.message}>
        Код ошибки: {error.status}. {error.statusText || 'Попробуйте другой адрес.'}
      </p>
    )
  }

  return <p className={styles.message}>Кажется, вы попали на несуществующий маршрут.</p>
}

