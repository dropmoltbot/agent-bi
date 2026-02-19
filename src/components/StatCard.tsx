import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
}

export function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {change && (
            <p className="text-sm text-green-500 mt-2 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

export function DashboardStats() {
  const stats = [
    { title: "Total Agents", value: "14,567", change: "+12.5%", icon: Users },
    { title: "Total Volume", value: "$32.5M", change: "+8.2%", icon: DollarSign },
    { title: "Transactions Today", value: "1,247", change: "+5.1%", icon: Activity },
    { title: "Avg Transaction", value: "$850", change: "+2.3%", icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
