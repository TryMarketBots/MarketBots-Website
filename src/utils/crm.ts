import { FormData } from '../components/types';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/q2wpqhaMykaslwBqknee/webhook-trigger/888c7c87-2d4c-4d85-8fdd-cbd5b00a4108';

function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Ensure it starts with +1 for US numbers if not already
  return cleaned.startsWith('1') ? `+${cleaned}` : `+1${cleaned}`;
}

export const submitToCRM = async (formData: FormData) => {
  try {
    // Format the data
    const nameParts = formData.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    const formattedPhone = formatPhoneNumber(formData.phone);

    const payload = {
      // Standard contact fields
      firstName,
      lastName,
      email: formData.email,
      phone: formattedPhone,
      companyName: formData.businessName,
      website: formData.website || '',
      source: 'Website Form',
      tags: ['Website Lead', 'Automation Consultation'],
      
      // Custom fields using standard naming convention
      customField: {
        business_type: formData.businessType,
        annual_revenue: formData.revenue,
        monthly_leads_current: formData.currentLeadsPerMonth,
        monthly_leads_target: formData.targetLeadsPerMonth,
        business_goals: Array.isArray(formData.goals) ? formData.goals.join(', ') : '',
        business_challenges: Array.isArray(formData.challenges) ? formData.challenges.join(', ') : '',
        marketing_consent: formData.marketingConsent ? 'Yes' : 'No',
        investment_ready: formData.readyToInvest ? 'Yes' : 'No'
      },
      
      // Additional metadata
      locationId: '', // Add your location ID if needed
      contactType: 'Lead',
      source: {
        name: 'Website Form',
        medium: 'Organic',
        campaign: 'Automation Consultation'
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to submit to CRM');
    }

    return await response.json();
  } catch (error: unknown) {
    const errorLog = {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    };

    console.error('CRM Submission Error:', errorLog);
    throw error;
  }
};
