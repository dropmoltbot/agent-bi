import { Star } from "lucide-react";
import { mockAgents } from "../lib/mockData";

export function Leaderboard() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold">Top Agents</h3>
        <p className="text-sm text-muted-foreground">By revenue in the last 30 days</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Rank</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Agent</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Category</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Chain</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Revenue</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Txns</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Rating</th>
            </tr>
          </thead>
          <tbody>
            {mockAgents.map((agent, i) => (
              <tr key={agent.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                    i < 3 ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    {i + 1}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">{agent.address}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-secondary">{agent.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm">{agent.chain}</span>
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  ${agent.revenue.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right text-muted-foreground">
                  {agent.transactions}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{agent.rating}</span>
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
