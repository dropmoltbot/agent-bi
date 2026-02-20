export interface Agent {
  id: string;
  name: string;
  address: string;
  revenue: number;
  transactions: number;
  rating: number;
  category: string;
  chain: string;
  registeredAt: string;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  token: string;
  chain: string;
  timestamp: string;
  service: string;
}

export interface CategoryStats {
  name: string;
  value: number;
  growth: number;
}

export interface ChainStats {
  name: string;
  transactions: number;
  volume: number;
}

export interface DashboardStats {
  totalAgents: number;
  totalVolume: number;
  transactionsToday: number;
  avgTransactionSize: number;
}
