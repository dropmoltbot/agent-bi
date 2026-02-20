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
    <aside className="w-64 bg-card/80 backdrop-blur-xl border-r border-border flex flex-col relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
      
      <div className="p-6 border-b border-border relative">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-primary to-primary/60 rounded-xl shadow-lg shadow-primary/25">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight">AgentBI</span>
            <p className="text-xs text-muted-foreground -mt-0.5">Machine Economy</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1.5 relative">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200 group"
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border relative">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pro Plan</span>
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">$10/mo</span>
          </div>
          <p className="text-xs text-muted-foreground mb-4">Unlock advanced analytics & API access</p>
          <Link href="/pricing">
            <button className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5">
              Upgrade Now
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
