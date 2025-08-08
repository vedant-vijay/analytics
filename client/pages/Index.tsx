import { useState, useEffect } from "react";
import { Header } from "@/components/ui/header";
import { MetricCard } from "@/components/ui/metric-card";
import { RevenueLineChart, ChannelBarChart, TrafficDonutChart } from "@/components/ui/charts";
import { CampaignTable } from "@/components/ui/campaign-table";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, RefreshCw, Download, TrendingUp, Eye, Clock } from "lucide-react";
import {
  keyMetrics,
  revenueData,
  channelData,
  trafficSources,
  campaignData,
  generateRealTimeMetric
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function Index() {
  const [realTimeMetrics, setRealTimeMetrics] = useState(keyMetrics);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newMetrics = generateRealTimeMetric();
      setRealTimeMetrics(prev => prev.map(metric => {
        switch (metric.label) {
          case 'Revenue':
            return { ...metric, value: `$${newMetrics.revenue.toLocaleString()}` };
          case 'Users':
            return { ...metric, value: newMetrics.users.toLocaleString() };
          case 'Conversions':
            return { ...metric, value: newMetrics.conversions.toLocaleString() };
          case 'Growth':
            return { ...metric, value: `${newMetrics.growth}%` };
          default:
            return metric;
        }
      }));
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newMetrics = generateRealTimeMetric();
    setRealTimeMetrics(prev => prev.map(metric => {
      switch (metric.label) {
        case 'Revenue':
          return { ...metric, value: `$${newMetrics.revenue.toLocaleString()}` };
        case 'Users':
          return { ...metric, value: newMetrics.users.toLocaleString() };
        case 'Conversions':
          return { ...metric, value: newMetrics.conversions.toLocaleString() };
        case 'Growth':
          return { ...metric, value: `${newMetrics.growth}%` };
        default:
          return metric;
      }
    }));
    setLastUpdate(new Date());
    setIsRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitor your digital marketing performance in real-time
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="gap-2"
            >
              <RefreshCw className={cn("h-4 w-4", isRefreshing && "animate-spin")} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              Last 30 days
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realTimeMetrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              className={cn(
                "transition-all duration-500 hover:shadow-xl",
                "animate-in fade-in slide-in-from-bottom-4",
                `animation-delay-${index * 100}`
              )}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RevenueLineChart
            data={revenueData}
            title="Revenue Trends"
            className="lg:col-span-2 transition-all duration-300 hover:shadow-lg"
          />
          <TrafficDonutChart
            data={trafficSources}
            title="Traffic Sources"
            className="transition-all duration-300 hover:shadow-lg"
          />
        </div>

        {/* Channel Performance */}
        <div className="grid grid-cols-1 gap-6">
          <ChannelBarChart
            data={channelData}
            title="User Acquisition by Channel"
            className="transition-all duration-300 hover:shadow-lg"
          />
        </div>

        {/* Performance Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Top Performing</h3>
              <TrendingUp className="h-6 w-6" />
            </div>
            <p className="text-2xl font-bold mb-2">Holiday Sale 2024</p>
            <p className="text-green-100">890 conversions • 4.2x ROAS</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Total Reach</h3>
              <Eye className="h-6 w-6" />
            </div>
            <p className="text-2xl font-bold mb-2">1.2M+</p>
            <p className="text-blue-100">Impressions this month</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Avg. CTR</h3>
              <Filter className="h-6 w-6" />
            </div>
            <p className="text-2xl font-bold mb-2">7.8%</p>
            <p className="text-purple-100">+12% from last month</p>
          </div>
        </div>

        {/* Campaign Performance Table */}
        <CampaignTable
          data={campaignData}
          className="transition-all duration-300 hover:shadow-lg"
        />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            © 2024 ADmyBRAND Insights. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Real-time data</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Connected</span>
          </div>
        </div>
      </main>
    </div>
  );
}
