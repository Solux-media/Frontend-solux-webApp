import styles from './index.module.css';

export default function FormProgress({ currentStep }) {
  return (
    <div className={styles.progressContainer}>
      <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
        <div className={styles.stepNumber}>1</div>
        {currentStep > 1 && <div className={styles.stepLine}></div>}
      </div>
      
      <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
        {currentStep > 1 && <div className={styles.stepLine}></div>}
        <div className={styles.stepNumber}>2</div>
        {currentStep > 2 && <div className={styles.stepLine}></div>}
      </div>
      
      <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>
        {currentStep > 2 && <div className={styles.stepLine}></div>}
        <div className={styles.stepNumber}>3</div>
      </div>
    </div>
  );
}