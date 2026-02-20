"use client";

import { VolumeChart, CategoryChart } from "@/components/Charts";
import { mockChains, mockCategories } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Deep insights into the machine economy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VolumeChart />
        <CategoryChart />
      </div>

      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold mb-4">Chain Distribution</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockChains}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
                formatter={(value: number, name: string) => [
                  name === "volume" ? `$${value.toLocaleString()}` : value,
                  name === "volume" ? "Volume" : "Transactions"
                ]}
              />
              <Bar dataKey="transactions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockCategories.map((cat) => (
            <div key={cat.name} className="p-4 bg-secondary rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">{cat.name}</span>
                <span className="text-green-500 text-sm">+{cat.growth}%</span>
              </div>
              <p className="text-2xl font-bold mt-2">{cat.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
