import styles from './index.module.css';

export default function FormStep2({ register, errors, prevStep, nextStep }) {
  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.stepTitle}>Question 1</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="question1">Your thoughts on this product</label>
        <textarea
          id="question1"
          {...register('question1')}
          className={`${styles.textareaField} ${errors.question1 ? styles.errorInput : ''}`}
          placeholder="Please share your honest opinion..."
          rows={5}
        />
        {errors.question1 && (
          <p className={styles.errorMessage}>{errors.question1.message}</p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={prevStep}
          className={styles.secondaryButton}
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className={styles.primaryButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}