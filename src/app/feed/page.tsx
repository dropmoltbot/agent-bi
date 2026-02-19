import { ArrowUpRight, ArrowDownLeft, Clock, Wallet, Activity } from "lucide-react";
import { mockTransactions } from "@/lib/mockData";

export default function LiveFeed() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Live Feed</h1>
        <p className="text-muted-foreground">Real-time transactions across the machine economy</p>
      </div>

      <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-green-500 font-medium">Live</span>
        <span className="text-muted-foreground">•</span>
        <span className="text-muted-foreground">1,247 transactions in the last hour</span>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold">Recent Transactions</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="w-4 h-4" />
            <span>Updates in real-time</span>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="p-4 hover:bg-secondary/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${tx.from.startsWith("0x1") ? "bg-red-500/10" : "bg-green-500/10"}`}>
                    {tx.from.startsWith("0x1") ? (
                      <ArrowUpRight className="w-4 h-4 text-red-500" />
                    ) : (
                      <ArrowDownLeft className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{tx.service}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Wallet className="w-3 h-3" />
                      <span className="font-mono">{tx.from.slice(0, 6)}...{tx.from.slice(-4)}</span>
                      <span>→</span>
                      <span className="font-mono">{tx.to.slice(0, 6)}...{tx.to.slice(-4)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-green-500">
                    {tx.amount} {tx.token}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(tx.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-secondary rounded text-xs">{tx.chain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Volume (1h)</p>
          <p className="text-2xl font-bold mt-1">$124,500</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Avg Transaction</p>
          <p className="text-2xl font-bold mt-1">$850</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Active Agents</p>
          <p className="text-2xl font-bold mt-1">1,247</p>
        </div>
      </div>
    </div>
  );
}
