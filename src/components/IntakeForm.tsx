import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, X, CheckCircle, Save } from 'lucide-react';
import clsx from 'clsx';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { FormData } from './types';
import { 
  BUSINESS_TYPES, 
  GOALS, 
  CHALLENGES,
  REVENUE_RANGES,
  REFERRAL_SOURCES,
  MONTHLY_RANGES,
  REVIEW_RANGES
} from './constants';
import { submitToCRM } from '../utils/crm';

interface IntakeFormProps {
  onClose: () => void;
}

const INITIAL_FORM_DATA: FormData = {
  businessName: '',
  businessType: '',
  website: '',
  name: '',
  email: '',
  phone: '',
  revenue: '',
  referralSource: '',
  additionalInfo: '',
  goals: [],
  challenges: [],
  readyToInvest: false,
  marketingConsent: false,
  currentLeadsPerMonth: '',
  targetLeadsPerMonth: '',
  currentBookingsPerMonth: '',
  targetBookingsPerMonth: '',
  currentReviews: '',
  targetReviews: '',
  googleReviewLink: '',
  currentMarketingChannels: [],
  averageJobValue: '',
  serviceArea: '',
  yearsInBusiness: '',
  teamSize: ''
};

const canvasStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
};

const IntakeForm: React.FC<IntakeFormProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saving' | 'saved' | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confettiInstance, setConfettiInstance] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfettiInit = useCallback((instance: any) => {
    setConfettiInstance(instance);
  }, []);

  const triggerConfetti = useCallback(() => {
    if (confettiInstance) {
      confettiInstance.fire({
        spread: 360,
        startVelocity: 30,
        elementCount: 200,
        decay: 0.95
      });
    }
  }, [confettiInstance]);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('formProgress');
      if (savedData) {
        const { data, step } = JSON.parse(savedData);
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

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (!formData.revenue) newErrors.revenue = 'Revenue range is required';
        break;
      case 2:
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 3:
        if (!formData.currentLeadsPerMonth) newErrors.currentLeadsPerMonth = 'Current leads is required';
        if (!formData.targetLeadsPerMonth) newErrors.targetLeadsPerMonth = 'Target leads is required';
        break;
      case 4:
        if (formData.goals.length === 0) newErrors.goals = 'Please select at least one goal';
        if (formData.challenges.length === 0) newErrors.challenges = 'Please select at least one challenge';
        break;
      case 5:
        if (!formData.readyToInvest) newErrors.readyToInvest = 'Please confirm you are ready to invest';
        if (!formData.marketingConsent) newErrors.marketingConsent = 'Please accept the marketing consent';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;
    
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        setIsSubmitting(true);
        console.log('Form data being submitted:', formData);
        
        // Submit to CRM
        await submitToCRM(formData);
        console.log('Form submitted successfully');
        
        // Clear form data from localStorage
        localStorage.removeItem('formProgress');
        
        // Show success state
        triggerConfetti();
        setSubmitted(true);
      } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error submitting your form. Please try again or contact support.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (name: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as string[]).includes(value)
          ? (prev[field] as string[]).filter(v => v !== value)
          : [...(prev[field] as string[]), value]
        : [value]
    }));
  };

  const inputClassName = clsx(
    "w-full px-4 py-3 bg-[#1E1E2F] border rounded-xl text-white placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "transition duration-200",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const selectClassName = clsx(
    'w-full px-4 py-3 rounded-lg',
    'bg-white border border-gray-300',
    'text-gray-900 placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    'appearance-none', // Remove default arrow
    'transition-colors duration-200',
    'relative',
    'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")]',
    'bg-[length:1.25rem_1.25rem]',
    'bg-no-repeat',
    'bg-[right_0.75rem_center]',
    errors.businessType ? 'border-red-500 focus:ring-red-500' : 'hover:border-gray-400'
  );

  const selectWrapperClassName = clsx(
    'relative rounded-lg',
    'after:pointer-events-none',
    'after:absolute after:right-0 after:top-0',
    'after:h-full after:w-10',
    'after:rounded-r-lg',
    'after:bg-gradient-to-l after:from-white after:to-transparent',
    'after:content-[\'\']'
  );

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder="Enter your business name"
              />
              {errors.businessName && (
                <p className="text-red-500 mt-1">{errors.businessName}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Type of Business
              </label>
              <div className={selectWrapperClassName}>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className={selectClassName}
                  required
                >
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type} value={type} className="py-2">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {errors.businessType && (
                <p className="text-sm text-red-600">{errors.businessType}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Annual Revenue
              </label>
              <div className={selectWrapperClassName}>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  className={selectClassName}
                  required
                >
                  <option value="">Select revenue range</option>
                  {REVENUE_RANGES.map((range) => (
                    <option key={range} value={range} className="py-2">
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              {errors.revenue && (
                <p className="text-sm text-red-600">{errors.revenue}</p>
              )}
            </div>
          </div>
        );
      // ... rest of the cases remain the same
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-[#000437] bg-opacity-95 flex items-center justify-center z-50 p-4">
        <ReactCanvasConfetti
          onInit={handleConfettiInit}
          style={canvasStyles}
          className="pointer-events-none"
        />
        <div className="max-w-2xl w-full bg-[#0A0B1E] rounded-2xl p-8 relative">
          <div className="text-center">
            <img 
              src="https://storage.googleapis.com/msgsndr/q2wpqhaMykaslwBqknee/media/6733d29782e636857956938e.png"
              alt="Market Bots Logo"
              className="h-20 mx-auto mb-6 animate-pulse"
            />
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Market Bots! 🎉
            </h2>
            
            <p className="text-xl text-blue-200 mb-8">
              We're excited to help transform your business! Our team will review your application and reach out within 24 hours to discuss your custom automation strategy.
            </p>

            <button
              onClick={onClose}
              className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#000437] bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="max-w-2xl w-full bg-[#0A0B1E] rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-1/5 h-2 rounded-full ${
                  step <= currentStep ? 'bg-blue-500' : 'bg-blue-900/30'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {renderFormStep()}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-3 text-blue-200 hover:text-white transition"
              >
                Back
              </button>
            )}
            
            <div className="ml-auto flex items-center space-x-4">
              {autoSaveStatus && (
                <div className="flex items-center text-blue-300 text-sm">
                  <Save className="h-4 w-4 mr-1" />
                  {autoSaveStatus === 'saving' ? 'Saving...' : 'Saved'}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "flex items-center px-8 py-3 rounded-lg font-semibold transition",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A0B1E]",
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600",
                  "text-white"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    {currentStep === 5 ? 'Submit Application' : 'Continue'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;