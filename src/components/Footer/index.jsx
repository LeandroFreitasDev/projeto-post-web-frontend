import React from 'react'
import styles from '../Footer/footer.module.css'

export default function Footer() {
  return (
<footer className={styles.footer}>
<p>© {new Date().getFullYear()} SDV Web - Todos os direitos reservados</p>
</footer>
  )
}
