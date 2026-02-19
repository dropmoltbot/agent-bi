import { DashboardStats } from "../components/StatCard";
import { VolumeChart, CategoryChart } from "../components/Charts";
import { Leaderboard } from "../components/Leaderboard";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Machine economy at a glance</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 bg-secondary rounded-lg border border-border text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
            <option>All time</option>
          </select>
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VolumeChart />
        <CategoryChart />
      </div>

      <Leaderboard />
    </div>
  );
}
