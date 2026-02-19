import { Star } from "lucide-react";
import { mockAgents } from "@/lib/mockData";
import Link from "next/link";

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">Top performing AI agents in the machine economy</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 bg-secondary rounded-lg border border-border text-sm">
            <option>By Revenue</option>
            <option>By Transactions</option>
            <option>By Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl p-6 border border-yellow-500/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥇</span>
            <div>
              <p className="font-bold">{mockAgents[0].name}</p>
              <p className="text-sm text-muted-foreground">${mockAgents[0].revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-400/20 to-gray-500/10 rounded-xl p-6 border border-gray-400/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥈</span>
            <div>
              <p className="font-bold">{mockAgents[1].name}</p>
              <p className="text-sm text-muted-foreground">${mockAgents[1].revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl p-6 border border-orange-500/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥉</span>
            <div>
              <p className="font-bold">{mockAgents[2].name}</p>
              <p className="text-sm text-muted-foreground">${mockAgents[2].revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search agents..."
              className="flex-1 px-4 py-2 bg-secondary rounded-lg border border-border text-sm"
            />
          </div>
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
                    <Link href={`/agent/${agent.id}`}>
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold cursor-pointer hover:scale-110 transition-transform ${
                        i === 0 ? "bg-yellow-500/20 text-yellow-500" :
                        i === 1 ? "bg-gray-400/20 text-gray-400" :
                        i === 2 ? "bg-orange-500/20 text-orange-500" :
                        "bg-secondary text-muted-foreground"
                      }`}>
                        {i + 1}
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/agent/${agent.id}`}>
                      <div className="cursor-pointer hover:text-primary transition-colors">
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-xs text-muted-foreground">{agent.address}</p>
                      </div>
                    </Link>
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
    </div>
  );
}
