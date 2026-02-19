import Link from "next/link";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Basic leaderboard (Top 10)",
        "1 chart",
        "Daily stats",
        "Community support",
      ],
      cta: "Current Plan",
      popular: false,
    },
    {
      name: "Pro",
      price: "$10",
      period: "/month",
      description: "For serious agent operators",
      features: [
        "Full leaderboard (Top 50)",
        "All charts & analytics",
        "Export data (CSV/JSON)",
        "Trends & insights",
        "Agent profiles",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$50",
      period: "/month",
      description: "For teams & institutions",
      features: [
        "Everything in Pro",
        "API access",
        "Custom dashboards",
        "White-label",
        "Webhooks",
        "Bulk exports",
        "Dedicated support",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Pricing Plans</h1>
        <p className="text-muted-foreground mt-2">
          Choose the plan that fits your agent analytics needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-card rounded-xl border ${
              plan.popular ? "border-primary" : "border-border"
            } p-6 flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
