import Link from "next/link";
import { Home, Users, TrendingUp, Activity, Settings, Zap, CreditCard } from "lucide-react";

export function Sidebar() {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Users, label: "Leaderboard", href: "/leaderboard" },
    { icon: CreditCard, label: "Pricing", href: "/pricing" },
    { icon: TrendingUp, label: "Analytics", href: "/analytics" },
    { icon: Activity, label: "Live Feed", href: "/feed" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">AgentBI</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Machine Economy Analytics</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
          <p className="text-sm font-medium">Pro Plan</p>
          <p className="text-xs text-muted-foreground mt-1">Unlock advanced analytics</p>
          <Link href="/pricing">
            <button className="mt-3 w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Upgrade for $10/mo
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
