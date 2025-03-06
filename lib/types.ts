export interface Package {
  id: string;
  name: string;
  color: string;
  icon: string;
  features: Feature[];
}

export interface Feature {
  icon: string;
  name: string;
}

export interface PricingOption {
  duration: number;
  monthlyPrice: number;
  yearlyPrice: number;
  discount?: number;
  savings?: number;
}

export interface SelectedPackages {
  [key: string]: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  status: 'pending' | 'completed' | 'in-progress';
  icon?: string;
}