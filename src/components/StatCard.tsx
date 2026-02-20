import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: string;
  trend?: "up" | "down" | "neutral";
}

interface DashboardStatsProps {
  customStats?: StatCardProps[];
}

export function StatCard({ title, value, change, icon, trend = "up" }: StatCardProps) {
  const icons = {
    users: Users,
    dollar: DollarSign,
    activity: Activity,
    trending: TrendingUp,
  };
  
  const Icon = icons[icon as keyof typeof icons] || Users;

  const trendColors = {
    up: "text-emerald-400",
    down: "text-red-400",
    neutral: "text-muted-foreground"
  };

  return (
    <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
      
      <div className="flex items-start justify-between relative">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold mt-3 tracking-tight">{value}</p>
          {change && (
            <div className={`flex items-center gap-1.5 mt-3 text-sm ${trendColors[trend]}`}>
              <TrendingUp className={`w-4 h-4 ${trend === "down" ? "rotate-180" : ""}`} />
              <span className="font-semibold">{change}</span>
              <span className="text-muted-foreground/70">vs last period</span>
            </div>
          )}
        </div>
        <div className="p-3.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

export function DashboardStats({ customStats }: DashboardStatsProps) {
  const defaultStats = [
    { title: "Total Agents", value: "14,567", change: "+12.5%", trend: "up" as const, icon: "users" },
    { title: "Total Volume", value: "$32.5M", change: "+8.2%", trend: "up" as const, icon: "dollar" },
    { title: "Transactions Today", value: "1,247", change: "+5.1%", trend: "up" as const, icon: "activity" },
    { title: "Avg Transaction", value: "$850", change: "+2.3%", trend: "up" as const, icon: "trending" },
  ];

  const stats = customStats || defaultStats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
