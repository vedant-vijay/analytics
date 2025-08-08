import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, DollarSign, Users, Target, TrendingUpIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  className?: string;
}

const iconMap = {
  'dollar-sign': DollarSign,
  'users': Users,
  'target': Target,
  'trending-up': TrendingUpIcon,
};

export function MetricCard({ label, value, change, trend, icon, className }: MetricCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || DollarSign;
  const isPositive = trend === 'up';
  
  return (
    <Card className={cn("relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        <div className="rounded-full p-2 bg-primary/10">
          <IconComponent className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
          ) : (
            <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
          )}
          <span className={cn(
            "font-medium",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
        <div className={cn(
          "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r",
          isPositive 
            ? "from-green-400 to-green-600" 
            : "from-red-400 to-red-600"
        )} />
      </CardContent>
    </Card>
  );
}
