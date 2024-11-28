import type { FormData } from '../components/types';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/q2wpqhaMykaslwBqknee/webhook-trigger/888c7c87-2d4c-4d85-8fdd-cbd5b00a4108';

function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Ensure it starts with +1 for US numbers if not already
  return cleaned.startsWith('1') ? `+${cleaned}` : `+1${cleaned}`;
}

export async function submitToCRM(formData: FormData) {
  try {
    // Format the data
    const nameParts = formData.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    const formattedPhone = formatPhoneNumber(formData.phone);

    // Prepare the payload using standard GHL field names
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

    console.log('Preparing to submit to GHL webhook:', {
      url: WEBHOOK_URL,
      payload: JSON.stringify(payload, null, 2)
    });

    // Make the request
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Log the response details
    const responseText = await response.text();
    console.log('GHL Webhook Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Failed to submit to GHL (${response.status}): ${responseText}`);
    }

    // Try to parse the response if it's JSON
    let jsonResponse = null;
    try {
      if (responseText) {
        jsonResponse = JSON.parse(responseText);
        if (jsonResponse.status?.includes('test request')) {
          console.log('Test request successful, but webhook needs to be activated');
        }
      }
    } catch (e) {
      console.error('Response parsing error:', e);
    }

    return true;
  } catch (error) {
    // Log the full error details
    console.error('Error submitting to GHL:', {
      error,
      message: error.message,
      stack: error.stack
    });

    // Re-throw a user-friendly error
    throw new Error(
      error.message.includes('test request') 
        ? 'The webhook needs to be activated in GoHighLevel. Please complete the field mapping.'
        : error.message.includes('Failed to fetch') 
          ? 'Network error. Please check your internet connection and try again.'
          : 'Failed to submit form. Please try again or contact support.'
    );
  }
}
