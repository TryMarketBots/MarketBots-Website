export interface FormData {
  [key: string]: any;
  referralSource?: string;
  additionalInfo?: string;
  currentBookingsPerMonth?: number;
  targetBookingsPerMonth?: number;
  email?: string;
  name?: string;
  phone?: string;
  companyName?: string;
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