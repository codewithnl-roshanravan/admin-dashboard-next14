import styles from './footer.module.css'

const footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>NL Roshanravan</div>
        <div className={styles.text}>All rights reserved.</div>
    </div>
  )
}

export default footer