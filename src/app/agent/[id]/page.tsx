import { notFound } from "next/navigation";
import { ArrowLeft, TrendingUp, Activity, DollarSign, Star, Clock, Zap, MessageSquare, Github } from "lucide-react";
import Link from "next/link";
import { getKnownAgents } from "@/lib/realData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AgentDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Try to find the agent in mock data
  const agent = getKnownAgents().find(a => a.id === id || a.name.toLowerCase().includes(id.toLowerCase()));

  if (!agent) {
    // For now, create a placeholder for unknown agents
    return (
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        
        <div className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Agent Not Found</h2>
          <p className="text-muted-foreground">Configure your API keys in Settings to track your agents.</p>
        </div>
      </div>
    );
  }

  const platformIcons = {
    fortytwo: Zap,
    conclave: MessageSquare,
    github: Github,
  };

  const PlatformIcon = platformIcons[agent.platform];

  return (
    <div className="space-y-6">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-2xl ${
            agent.platform === 'fortytwo' ? 'bg-gradient-to-br from-primary/30 to-primary/10' :
            agent.platform === 'conclave' ? 'bg-gradient-to-br from-secondary/30 to-secondary/10' :
            'bg-gradient-to-br from-gray-500/30 to-gray-500/10'
          }`}>
            <PlatformIcon className={`w-8 h-8 ${
              agent.platform === 'fortytwo' ? 'text-primary' :
              agent.platform === 'conclave' ? 'text-secondary' :
              'text-gray-400'
            }`} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{agent.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="px-3 py-1 bg-secondary/60 rounded-full text-sm">{agent.category}</span>
              <span className="text-muted-foreground text-sm">{agent.chain}</span>
            </div>
          </div>
        </div>
        
        {agent.rating && (
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">{agent.rating}</span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-sm text-muted-foreground">Balance</span>
          </div>
          <p className="text-2xl font-bold">{agent.balance?.toLocaleString() || 0}</p>
          <p className="text-xs text-muted-foreground mt-1">{agent.platform === 'fortytwo' ? 'FOR Tokens' : 'Tokens'}</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-sm text-muted-foreground">Transactions</span>
          </div>
          <p className="text-2xl font-bold">{agent.transactions?.toLocaleString() || 0}</p>
          <p className="text-xs text-muted-foreground mt-1">Total {agent.platform === 'conclave' ? 'Debates' : 'Inferences'}</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <p className="text-2xl font-bold">${agent.revenue?.toLocaleString() || 0}</p>
          <p className="text-xs text-muted-foreground mt-1">Total Earnings</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-sm text-muted-foreground">Last Active</span>
          </div>
          <p className="text-2xl font-bold">{agent.lastActive || 'Recently'}</p>
          <p className="text-xs text-muted-foreground mt-1">Updated 5m ago</p>
        </div>
      </div>

      {/* Agent Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <h3 className="font-semibold mb-4">Agent Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Agent ID</span>
              <span className="font-mono text-sm">{agent.id}</span>
            </div>
            {agent.address && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wallet Address</span>
                <span className="font-mono text-sm">{agent.address.slice(0, 10)}...{agent.address.slice(-8)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Platform</span>
              <span className="capitalize">{agent.platform}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Chain</span>
              <span>{agent.chain || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Category</span>
              <span>{agent.category}</span>
            </div>
          </div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-secondary/40 rounded-xl">
                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-emerald-400' : 'bg-muted-foreground/30'}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{i === 1 ? 'Inference completed' : 'Inference request received'}</p>
                  <p className="text-xs text-muted-foreground">{i === 1 ? '2 minutes ago' : `${i * 5} minutes ago`}</p>
                </div>
                <span className="text-sm font-semibold text-emerald-400">+{i * 10} FOR</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
