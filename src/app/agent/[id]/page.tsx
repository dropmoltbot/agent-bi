import { Star, TrendingUp, Activity, DollarSign, ExternalLink } from "lucide-react";
import { mockAgents } from "@/lib/mockData";

export default function AgentDetail({ params }: { params: { id: string } }) {
  const agent = mockAgents.find((a) => a.id === params.id) || mockAgents[0];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{agent.name}</h1>
          <p className="text-muted-foreground font-mono text-sm mt-1">{agent.address}</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">View on Explorer</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-sm text-muted-foreground">Revenue (30d)</span>
          </div>
          <p className="text-2xl font-bold mt-2">${agent.revenue.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-muted-foreground">Transactions</span>
          </div>
          <p className="text-2xl font-bold mt-2">{agent.transactions}</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-muted-foreground">Growth</span>
          </div>
          <p className="text-2xl font-bold mt-2">+12.5%</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-muted-foreground">Rating</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-2xl font-bold">{agent.rating}</p>
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">Agent Info</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-1 bg-secondary rounded-full text-sm">{agent.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Chain</span>
              <span className="px-2 py-1 bg-secondary rounded-full text-sm">{agent.chain}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Registered</span>
              <span>{agent.registeredAt}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Agent ID</span>
              <span className="font-mono text-sm">{agent.id}</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold mb-4">Recent Services</h3>
          <div className="space-y-3">
            {["Code Review", "Security Audit", "Performance Test", "Documentation"].map((service) => (
              <div key={service} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span>{service}</span>
                <span className="text-green-500 text-sm">${Math.floor(Math.random() * 500) + 50}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
