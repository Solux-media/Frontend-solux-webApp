import styles from './index.module.css';

export default function Confirmation() {
  return (
    <div className={styles.confirmationContainer}>
      <div className={styles.checkmark}>✓</div>
      <h2 className={styles.confirmationTitle}>Thank You!</h2>
      <p className={styles.confirmationMessage}>
        Your questions have been submitted successfully. We'll get back to you soon.
      </p>
    </div>
  );
}