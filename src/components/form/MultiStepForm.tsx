import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Save } from 'lucide-react';
import FormInput from './FormInput';
import type { FormData } from './types';
import { FORM_STEPS } from './constants';
import { submitToCRM } from '../../utils/crm';

const INITIAL_DATA: FormData = {
  businessName: '',
  businessType: '',
  website: '',
  revenue: '',
  name: '',
  email: '',
  phone: '',
  currentLeadsPerMonth: '',
  targetLeadsPerMonth: '',
  goals: [],
  challenges: [],
  readyToInvest: false,
  marketingConsent: false
};

interface MultiStepFormProps {
  onClose: () => void;
}

export default function MultiStepForm({ onClose }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saving' | 'saved' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('formProgress');
      if (saved) {
        const { data, step } = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...data }));
        setCurrentStep(step);
      }
    } catch (error) {
      console.error('Error loading saved progress:', error);
    }
  }, []);

  useEffect(() => {
    const saveProgress = () => {
      try {
        setAutoSaveStatus('saving');
        localStorage.setItem('formProgress', JSON.stringify({
          data: formData,
          step: currentStep
        }));
        setTimeout(() => setAutoSaveStatus('saved'), 500);
        setTimeout(() => setAutoSaveStatus(null), 2000);
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    };

    const timeoutId = setTimeout(saveProgress, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData, currentStep]);

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const currentFields = FORM_STEPS[currentStep - 1].fields;
    const newErrors: Record<string, string> = {};

    currentFields.forEach(field => {
      if (field.required) {
        const value = formData[field.name];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[field.name] = `${field.label} is required`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep()) return;

    if (currentStep < FORM_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      try {
        setIsSubmitting(true);
        
        // Validate all required fields before submission
        const allFields = FORM_STEPS.flatMap(step => step.fields);
        const newErrors: Record<string, string> = {};
        
        allFields.forEach(field => {
          if (field.required) {
            const value = formData[field.name];
            if (!value || (Array.isArray(value) && value.length === 0)) {
              newErrors[field.name] = `${field.label} is required`;
            }
          }
        });

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          const firstErrorField = Object.keys(newErrors)[0];
          const stepWithError = FORM_STEPS.findIndex(step => 
            step.fields.some(field => field.name === firstErrorField)
          );
          if (stepWithError !== -1) {
            setCurrentStep(stepWithError + 1);
          }
          throw new Error('Please fill in all required fields');
        }

        // Log submission attempt
        console.log('Attempting to submit form data:', formData);
        
        // Submit to CRM
        await submitToCRM(formData);
        console.log('Form submitted successfully to CRM');
        
        // Clear form data and show success
        localStorage.removeItem('formProgress');
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Show a more specific error message
        const errorMessage = error.message === 'Please fill in all required fields'
          ? error.message
          : error.message.includes('Network error')
            ? 'Network error. Please check your internet connection and try again.'
            : 'There was an error submitting your form. Please try again or contact support.';
            
        alert(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-[#000437] bg-opacity-95 flex items-center justify-center z-50 p-4"
      >
        <div className="max-w-2xl w-full bg-[#0A0B1E] rounded-2xl p-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Application Submitted Successfully! 🎉
            </h2>
            
            <p className="text-xl text-blue-200 mb-8">
              Thank you for your interest! Our team will review your application and reach out within 24 hours to discuss your custom automation strategy.
            </p>

            <button
              onClick={onClose}
              className="mt-8 w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const currentStepData = FORM_STEPS[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-[#000437] bg-opacity-95 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#0A0B1E] rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ×
        </button>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {FORM_STEPS.map((_, index) => (
              <div
                key={index}
                className={`w-full h-2 rounded-full mx-1 transition-colors duration-200 ${
                  index + 1 <= currentStep ? 'bg-blue-500' : 'bg-blue-900/30'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Step {currentStep} of {FORM_STEPS.length}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              {currentStepData.emoji} {currentStepData.title}
            </h2>
            <p className="text-gray-400">
              {currentStepData.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {currentStepData.fields.map((field) => (
              <FormInput
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={handleInputChange}
                error={errors[field.name]}
              />
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="flex items-center text-blue-300 hover:text-blue-200 transition"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {autoSaveStatus && (
                <div className="flex items-center text-blue-300 text-sm">
                  <Save className="w-4 h-4 mr-1" />
                  {autoSaveStatus === 'saving' ? 'Saving...' : 'Saved'}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  flex items-center px-6 py-3 rounded-lg font-semibold
                  ${isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'}
                  text-white transition
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    {currentStep === FORM_STEPS.length ? 'Submit Application' : 'Next'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}