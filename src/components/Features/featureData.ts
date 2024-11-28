import { Bot, Target, Users, Calendar, Search, Instagram, BookOpen, MessageSquare, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Search,
    title: "Custom SEO Website & Booking",
    description: "High-converting, mobile-optimized website with integrated booking forms and AI-powered SEO optimization."
  },
  {
    icon: Bot,
    title: "AI Lead Generation System",
    description: "Industry-specific, automated workflows to capture, nurture, and convert leads 24/7 with smart follow-ups."
  },
  {
    icon: Target,
    title: "Google Screened & Local SEO",
    description: "Get your business Google Screened and dominate local search rankings with advanced SEO techniques."
  },
  {
    icon: Star,
    title: "Automated Review Management",
    description: "AI-driven review collection system with automated responses to build a 5-star reputation."
  },
  {
    icon: Calendar,
    title: "Smart Booking Automation",
    description: "Customized booking system with automated reminders and follow-ups to maximize appointments."
  },
  {
    icon: Instagram,
    title: "AI Social Media Strategy",
    description: "Automated Instagram posting and engagement with industry-specific content frameworks."
  },
  {
    icon: BookOpen,
    title: "Complete Training & Support",
    description: "Step-by-step guidance to manage your AI-powered marketing system independently."
  },
  {
    icon: MessageSquare,
    title: "Expert Community Access",
    description: "Join a network of successful business owners sharing proven marketing strategies."
  },
  {
    icon: Users,
    title: "Dedicated Success Team",
    description: "Personal guidance and support throughout your 90-day transformation journey."
  }
];