export interface FormData {
  businessName: string;
  businessType: string;
  website: string;
  revenue: string;
  name: string;
  email: string;
  phone: string;
  currentLeadsPerMonth: string;
  targetLeadsPerMonth: string;
  goals: string[];
  challenges: string[];
  readyToInvest: boolean;
  marketingConsent: boolean;
}

export interface FormStep {
  title: string;
  subtitle: string;
  emoji: string;
  fields: FormField[];
}

export interface FormField {
  name: keyof FormData;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'multiselect' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helpText?: string;
}