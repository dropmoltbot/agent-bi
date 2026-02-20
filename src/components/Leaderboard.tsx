import { Star } from "lucide-react";
import { mockAgents } from "@/lib/mockData";
import Link from "next/link";

export function Leaderboard() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Top Agents</h3>
            <p className="text-sm text-muted-foreground">By revenue in the last 30 days</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Star className="w-3.5 h-3.5" />
            Updated live
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rank</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Chain</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Txns</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rating</th>
            </tr>
          </thead>
          <tbody>
            {mockAgents.map((agent, i) => (
              <tr key={agent.id} className="border-b border-border/30 hover:bg-secondary/40 transition-colors group">
                <td className="px-6 py-4">
                  <Link href={`/agent/${agent.id}`}>
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-xl text-sm font-bold transition-transform group-hover:scale-110 ${
                      i === 0 ? "bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 text-yellow-400" :
                      i === 1 ? "bg-gradient-to-br from-gray-400/30 to-gray-500/20 text-gray-300" :
                      i === 2 ? "bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-400" :
                      "bg-secondary text-muted-foreground"
                    }`}>
                      {i + 1}
                    </span>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href={`/agent/${agent.id}`}>
                    <div className="cursor-pointer hover:text-primary transition-colors">
                      <p className="font-semibold">{agent.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{agent.address}</p>
                    </div>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/60">{agent.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium">{agent.chain}</span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-emerald-400">
                  ${agent.revenue.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right text-muted-foreground">
                  {agent.transactions}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{agent.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
