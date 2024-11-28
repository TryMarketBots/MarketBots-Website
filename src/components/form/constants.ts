export const BUSINESS_TYPES = [
  'Home Services',
  'Real Estate',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Landscaping',
  'Cleaning Services',
  'Home Improvement',
  'Junk Removal',
  'Other'
];

export const REVENUE_RANGES = [
  '< $100k',
  '$100k-$500k',
  '$500k-$1M',
  '$1M+'
];

export const MONTHLY_RANGES = [
  '0-5',
  '6-15',
  '16-30',
  '31-50',
  '51-100',
  '100+'
];

export const GOALS = [
  'Generate More Leads',
  'Improve Online Presence',
  'Automate Follow-ups',
  'Increase Reviews',
  'Better Lead Management',
  'Higher Search Rankings',
  'Social Media Growth'
];

export const CHALLENGES = [
  'Missing Leads',
  'Poor Follow-up System',
  'Low Online Visibility',
  'Manual Processes',
  'Inconsistent Results',
  'Limited Marketing Knowledge'
];

export const FORM_STEPS = [
  {
    title: "Let's get to know your business",
    subtitle: "Tell us about your company",
    emoji: "👋",
    fields: [
      {
        name: "businessName",
        label: "Business Name",
        type: "text",
        required: true,
        placeholder: "Your Business Name"
      },
      {
        name: "businessType",
        label: "Business Type",
        type: "select",
        required: true,
        options: BUSINESS_TYPES,
        placeholder: "Select your business type"
      },
      {
        name: "website",
        label: "Website URL",
        type: "text",
        required: false,
        placeholder: "https://",
        helpText: "Optional, helps us understand your online presence"
      },
      {
        name: "revenue",
        label: "Annual Revenue Range",
        type: "select",
        required: true,
        options: REVENUE_RANGES,
        placeholder: "Select revenue range"
      }
    ]
  },
  {
    title: "Great! Now, who are we talking to?",
    subtitle: "Your contact information",
    emoji: "🤝",
    fields: [
      {
        name: "name",
        label: "Your Name",
        type: "text",
        required: true,
        placeholder: "Full Name"
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "you@company.com"
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "(123) 456-7890"
      }
    ]
  },
  {
    title: "Let's talk about your numbers",
    subtitle: "Current and target performance",
    emoji: "📊",
    fields: [
      {
        name: "currentLeadsPerMonth",
        label: "Current Monthly Leads",
        type: "select",
        required: true,
        options: MONTHLY_RANGES,
        placeholder: "Select current leads"
      },
      {
        name: "targetLeadsPerMonth",
        label: "Target Monthly Leads",
        type: "select",
        required: true,
        options: MONTHLY_RANGES,
        placeholder: "Select target leads"
      }
    ]
  },
  {
    title: "What are your goals?",
    subtitle: "Select your objectives and challenges",
    emoji: "🎯",
    fields: [
      {
        name: "goals",
        label: "Business Goals",
        type: "multiselect",
        required: true,
        options: GOALS,
        helpText: "Select all that apply"
      },
      {
        name: "challenges",
        label: "Current Challenges",
        type: "multiselect",
        required: true,
        options: CHALLENGES,
        helpText: "Select all that apply"
      }
    ]
  },
  {
    title: "Almost there!",
    subtitle: "Final confirmation",
    emoji: "🚀",
    fields: [
      {
        name: "readyToInvest",
        label: "I'm ready to invest time and resources in transforming my business over the next 90 days",
        type: "checkbox",
        required: true
      },
      {
        name: "marketingConsent",
        label: "I agree to receive emails about the program, webinars, and marketing tips",
        type: "checkbox",
        required: true
      }
    ]
  }
];