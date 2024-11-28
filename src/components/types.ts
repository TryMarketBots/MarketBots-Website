export interface FormData {
  businessName: string;
  businessType: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  revenue: string;
  referralSource: string;
  additionalInfo: string;
  goals: string[];
  challenges: string[];
  readyToInvest: boolean;
  marketingConsent: boolean;
  currentLeadsPerMonth: string;
  targetLeadsPerMonth: string;
  currentBookingsPerMonth: string;
  targetBookingsPerMonth: string;
  currentReviews: string;
  targetReviews: string;
  googleReviewLink: string;
  currentMarketingChannels: string[];
  averageJobValue: string;
  serviceArea: string;
  yearsInBusiness: string;
  teamSize: string;
}

export interface ConfettiInstance {
  fire: (options?: {
    spread?: number;
    startVelocity?: number;
    elementCount?: number;
    decay?: number;
  }) => void;
  reset: () => void;
}