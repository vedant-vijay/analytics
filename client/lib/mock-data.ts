// Mock data for ADmyBRAND Insights dashboard

export interface MetricData {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface CampaignData {
  id: string;
  campaign: string;
  channel: string;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpa: number;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spend: number;
  roas: number;
}

// Key metrics for dashboard cards
export const keyMetrics: MetricData[] = [
  {
    label: 'Revenue',
    value: '$847,392',
    change: 12.5,
    trend: 'up',
    icon: 'dollar-sign'
  },
  {
    label: 'Users',
    value: '124,576',
    change: 8.2,
    trend: 'up',
    icon: 'users'
  },
  {
    label: 'Conversions',
    value: '8,947',
    change: -2.1,
    trend: 'down',
    icon: 'target'
  },
  {
    label: 'Growth',
    value: '18.7%',
    change: 5.4,
    trend: 'up',
    icon: 'trending-up'
  }
];

// Revenue trend data for line chart
export const revenueData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 65000, users: 4200 },
  { name: 'Feb', revenue: 72000, users: 4800 },
  { name: 'Mar', revenue: 68000, users: 4500 },
  { name: 'Apr', revenue: 78000, users: 5200 },
  { name: 'May', revenue: 85000, users: 5800 },
  { name: 'Jun', revenue: 92000, users: 6200 },
  { name: 'Jul', revenue: 89000, users: 6000 },
  { name: 'Aug', revenue: 95000, users: 6500 },
  { name: 'Sep', revenue: 102000, users: 7100 },
  { name: 'Oct', revenue: 108000, users: 7500 },
  { name: 'Nov', revenue: 115000, users: 8000 },
  { name: 'Dec', revenue: 125000, users: 8500 }
];

// User acquisition by channel for bar chart
export const channelData: ChartDataPoint[] = [
  { name: 'Organic Search', users: 32500, color: '#0ea5e9' },
  { name: 'Paid Search', users: 28900, color: '#8b5cf6' },
  { name: 'Social Media', users: 21400, color: '#06d6a0' },
  { name: 'Email', users: 18200, color: '#f59e0b' },
  { name: 'Direct', users: 15600, color: '#ef4444' },
  { name: 'Referral', users: 7900, color: '#84cc16' }
];

// Traffic sources for donut chart
export const trafficSources: ChartDataPoint[] = [
  { name: 'Organic Search', value: 42.3, color: '#0ea5e9' },
  { name: 'Paid Advertising', value: 28.7, color: '#8b5cf6' },
  { name: 'Social Media', value: 15.2, color: '#06d6a0' },
  { name: 'Direct Traffic', value: 8.9, color: '#f59e0b' },
  { name: 'Email Marketing', value: 4.9, color: '#ef4444' }
];

// Campaign performance data for table
export const campaignData: CampaignData[] = [
  {
    id: '1',
    campaign: 'Holiday Sale 2024',
    channel: 'Google Ads',
    impressions: 145000,
    clicks: 12400,
    conversions: 890,
    ctr: 8.55,
    cpa: 34.50,
    status: 'active',
    budget: 50000,
    spend: 42300,
    roas: 4.2
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q4',
    channel: 'Facebook Ads',
    impressions: 298000,
    clicks: 18900,
    conversions: 1240,
    ctr: 6.34,
    cpa: 28.90,
    status: 'active',
    budget: 75000,
    spend: 68200,
    roas: 3.8
  },
  {
    id: '3',
    campaign: 'Product Launch',
    channel: 'Instagram Ads',
    impressions: 87500,
    clicks: 9200,
    conversions: 620,
    ctr: 10.51,
    cpa: 41.20,
    status: 'paused',
    budget: 30000,
    spend: 25600,
    roas: 5.1
  },
  {
    id: '4',
    campaign: 'Retargeting Campaign',
    channel: 'Google Ads',
    impressions: 56000,
    clicks: 4800,
    conversions: 380,
    ctr: 8.57,
    cpa: 22.10,
    status: 'active',
    budget: 15000,
    spend: 8400,
    roas: 6.2
  },
  {
    id: '5',
    campaign: 'Local SEO Push',
    channel: 'Google My Business',
    impressions: 23000,
    clicks: 2100,
    conversions: 145,
    ctr: 9.13,
    cpa: 18.50,
    status: 'completed',
    budget: 8000,
    spend: 2700,
    roas: 2.9
  },
  {
    id: '6',
    campaign: 'Email Newsletter',
    channel: 'Mailchimp',
    impressions: 78000,
    clicks: 5400,
    conversions: 290,
    ctr: 6.92,
    cpa: 15.80,
    status: 'active',
    budget: 12000,
    spend: 4600,
    roas: 3.5
  },
  {
    id: '7',
    campaign: 'LinkedIn B2B',
    channel: 'LinkedIn Ads',
    impressions: 34000,
    clicks: 2800,
    conversions: 180,
    ctr: 8.24,
    cpa: 55.60,
    status: 'active',
    budget: 20000,
    spend: 10000,
    roas: 2.8
  },
  {
    id: '8',
    campaign: 'YouTube Pre-roll',
    channel: 'YouTube Ads',
    impressions: 156000,
    clicks: 8900,
    conversions: 425,
    ctr: 5.71,
    cpa: 48.20,
    status: 'paused',
    budget: 40000,
    spend: 20500,
    roas: 3.2
  }
];

// Real-time metrics simulation
export const generateRealTimeMetric = () => {
  const baseRevenue = 847392;
  const variation = (Math.random() - 0.5) * 10000;
  return {
    revenue: Math.round(baseRevenue + variation),
    users: Math.round(124576 + (Math.random() - 0.5) * 1000),
    conversions: Math.round(8947 + (Math.random() - 0.5) * 100),
    growth: parseFloat((18.7 + (Math.random() - 0.5) * 2).toFixed(1))
  };
};

// Date range filters
export const dateRanges = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 3 months', value: '3m' },
  { label: 'Last 6 months', value: '6m' },
  { label: 'Last year', value: '1y' },
  { label: 'Custom range', value: 'custom' }
];
