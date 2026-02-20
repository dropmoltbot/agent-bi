"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { volumeOverTime, mockCategories } from "@/lib/mockData";

const COLORS = ["#38bdf8", "#f97316", "#22c55e", "#a855f7", "#ec4899", "#6b7280"];

export function VolumeChart() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Volume Over Time</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue in USD</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          +24.5%
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={volumeOverTime}>
            <defs>
              <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.5} />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" fontSize={11} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000000}M`} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "12px", padding: "12px" }}
              labelStyle={{ color: "#fff", fontWeight: 600, marginBottom: 4 }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Volume"]}
            />
            <Area type="monotone" dataKey="volume" stroke="#38bdf8" strokeWidth={2.5} fillOpacity={1} fill="url(#volumeGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CategoryChart() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold">Category Distribution</h3>
        <p className="text-sm text-muted-foreground">Revenue by agent category</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockCategories}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {mockCategories.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "12px", padding: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {mockCategories.map((cat, i) => (
          <div key={cat.name} className="flex items-center gap-2 text-xs">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
            <span className="text-muted-foreground">{cat.name}</span>
            <span className="font-semibold">{cat.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
