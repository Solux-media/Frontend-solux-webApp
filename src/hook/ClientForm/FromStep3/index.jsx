import styles from './index.module.css';

export default function FormStep3({ register, errors, prevStep }) {
  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.stepTitle}>Question 2</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="question2">Additional comments</label>
        <textarea
          id="question2"
          {...register('question2')}
          className={`${styles.textareaField} ${errors.question2 ? styles.errorInput : ''}`}
          placeholder="Any other feedback?"
          rows={5}
        />
        {errors.question2 && (
          <p className={styles.errorMessage}>{errors.question2.message}</p>
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
          type="submit"
          className={styles.primaryButton}
        >
          Submit
        </button>
      </div>
    </div>
  );
}