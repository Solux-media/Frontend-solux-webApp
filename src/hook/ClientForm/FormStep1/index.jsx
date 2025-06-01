import styles from './index.module.css';

export default function FormStep1({ register, errors, nextStep }) {
  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.stepTitle}>Personal Information</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          {...register('name')}
          className={`${styles.inputField} ${errors.name ? styles.errorInput : ''}`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`${styles.inputField} ${errors.email ? styles.errorInput : ''}`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.buttonContainer}>
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