"use client";

import { VolumeChart, CategoryChart } from "@/components/Charts";
import { Leaderboard } from "@/components/Leaderboard";
import { CalendarDays, Users, DollarSign, Activity, TrendingUp, Zap, MessageSquare, ExternalLink } from "lucide-react";
import { getMyFortytwoAgent, getMyConclaveAgent, getNetworkStats, formatNumber, Agent } from "@/lib/realData";

export default function Dashboard() {
  // REAL DATA from Fortytwo Network
  const fortytwoAgent = getMyFortytwoAgent();
  const conclaveAgent = getMyConclaveAgent();
  const stats = getNetworkStats();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Real-time machine economy data</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
            <CalendarDays className="w-4 h-4 text-muted-foreground" />
            <select className="bg-transparent text-sm font-medium focus:outline-none">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
              <option>All time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Your Agents - REAL DATA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fortytwo Agent */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/30 rounded-xl">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{fortytwoAgent.name}</h3>
                <p className="text-xs text-muted-foreground">Fortytwo • Swarm Inference</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Active</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Balance</p>
              <p className="font-bold text-emerald-400">{fortytwoAgent.balance.toLocaleString()} FOR</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Inferences</p>
              <p className="font-bold">{fortytwoAgent.transactions}</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Revenue</p>
              <p className="font-bold">${fortytwoAgent.revenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Rating</p>
              <p className="font-bold">⭐ {fortytwoAgent.rating}</p>
            </div>
          </div>
          <a href="https://fortytwo.network" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1 text-xs text-primary hover:underline">
            View on Fortytwo <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Conclave Agent */}
        <div className="bg-gradient-to-r from-secondary/20 via-secondary/10 to-purple-500/10 rounded-2xl p-6 border border-secondary/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary/30 rounded-xl">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{conclaveAgent.name}</h3>
                <p className="text-xs text-muted-foreground">Conclave • AI Debate</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Active</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">ELO Rating</p>
              <p className="font-bold text-purple-400">{conclaveAgent.elo}</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Debates</p>
              <p className="font-bold">{conclaveAgent.debates}</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Wins</p>
              <p className="font-bold text-emerald-400">{conclaveAgent.wins}</p>
            </div>
            <div className="p-3 bg-card/50 rounded-xl">
              <p className="text-xs text-muted-foreground">Win Rate</p>
              <p className="font-bold">{Math.round((conclaveAgent.wins! / conclaveAgent.debates!) * 100)}%</p>
            </div>
          </div>
          <a href="https://conclave.sh" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1 text-xs text-secondary hover:underline">
            View on Conclave <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* REAL Network Stats from Fortytwo Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-sm text-muted-foreground">Active Nodes</span>
          </div>
          <p className="text-3xl font-bold">{stats.activeNodes}</p>
          <p className="text-xs text-muted-foreground mt-2">Fortytwo Network</p>
        </div>

        <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-sm text-muted-foreground">Tokens Distributed</span>
          </div>
          <p className="text-3xl font-bold">{formatNumber(stats.totalVolume)}</p>
          <p className="text-xs text-muted-foreground mt-2">Devnet tokens</p>
        </div>

        <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm text-muted-foreground">Inferences (24h)</span>
          </div>
          <p className="text-3xl font-bold">{stats.inferences24h.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-2">Completed</p>
        </div>

        <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-sm text-muted-foreground">Avg per Inference</span>
          </div>
          <p className="text-3xl font-bold">${formatNumber(stats.avgTransaction)}</p>
          <p className="text-xs text-muted-foreground mt-2">Tokens</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VolumeChart />
        <CategoryChart />
      </div>

      <Leaderboard />
    </div>
  );
}
