import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { formSchema, FormValues } from '../formSchema';
import FormProgress from '../FormProgress';
import FormStep1 from '../FormStep1';
import FormStep2 from '../FormStep2';
import FormStep3 from '../FormStep3';
import Confirmation from '../Confirmation';
import styles from './index.module.css';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const nextStep = async () => {
    // Validate current step fields before proceeding
    let isValid = false;
    
    if (step === 1) {
      isValid = await trigger(['name', 'email']);
    } else if (step === 2) {
      isValid = await trigger(['question1']);
    } else if (step === 3) {
      isValid = await trigger(['question2']);
    }

    if (isValid) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    setStep(4); // Show confirmation
    // Here you would typically send data to your API
  };

  return (
    <div className={styles.formContainer}>
      <FormProgress currentStep={step} />
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {step === 1 && (
          <FormStep1
            register={register}
            errors={errors}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <FormStep2
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}

        {step === 3 && (
          <FormStep3
            register={register}
            errors={errors}
            prevStep={prevStep}
          />
        )}

        {step === 4 && <Confirmation />}
      </form>
    </div>
  );
}