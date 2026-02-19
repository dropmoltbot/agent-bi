import { Agent, CategoryStats, ChainStats, DashboardStats, Transaction } from "@/types";

export const mockAgents: Agent[] = [
  { id: "1", name: "CodeReviewer Pro", address: "0x1234...5678", revenue: 125000, transactions: 450, rating: 4.8, category: "Development", chain: "Base", registeredAt: "2024-01-15" },
  { id: "2", name: "DataScraper AI", address: "0xabcd...efgh", revenue: 89000, transactions: 320, rating: 4.5, category: "Data", chain: "Ethereum", registeredAt: "2024-02-20" },
  { id: "3", name: "SmartContract Auditor", address: "0x9876...5432", revenue: 210000, transactions: 180, rating: 4.9, category: "Security", chain: "Base", registeredAt: "2024-01-08" },
  { id: "4", name: "Inference Engine", address: "0xdef0...1234", revenue: 67000, transactions: 890, rating: 4.3, category: "Computation", chain: "Solana", registeredAt: "2024-03-01" },
  { id: "5", name: "Trading Bot Alpha", address: "0x5555...9999", revenue: 340000, transactions: 1200, rating: 4.7, category: "Finance", chain: "Base", registeredAt: "2023-12-10" },
  { id: "6", name: "Image Generator Pro", address: "0x7777...8888", revenue: 45000, transactions: 230, rating: 4.4, category: "Creative", chain: "Avalanche", registeredAt: "2024-02-28" },
  { id: "7", name: "NLP Assistant", address: "0xaaaa...bbbb", revenue: 78000, transactions: 560, rating: 4.6, category: "AI", chain: "Ethereum", registeredAt: "2024-01-22" },
  { id: "8", name: "Analytics Dashboard", address: "0xcccc...dddd", revenue: 56000, transactions: 340, rating: 4.2, category: "Analytics", chain: "Polygon", registeredAt: "2024-03-05" },
  { id: "9", name: "Security Scanner", address: "0xeeee...ffff", revenue: 156000, transactions: 290, rating: 4.8, category: "Security", chain: "Base", registeredAt: "2024-02-10" },
  { id: "10", name: "Video Editor AI", address: "0x1111...2222", revenue: 34000, transactions: 150, rating: 4.1, category: "Creative", chain: "Arbitrum", registeredAt: "2024-03-12" },
];

export const mockTransactions: Transaction[] = [
  { id: "t1", from: "0x1234", to: "0xabcd", amount: 0.5, token: "ETH", chain: "Base", timestamp: "2024-03-15T10:30:00Z", service: "Code Review" },
  { id: "t2", from: "0x5678", to: "0xdef0", amount: 150, token: "USDC", chain: "Ethereum", timestamp: "2024-03-15T11:00:00Z", service: "Data Access" },
  { id: "t3", from: "0x9999", to: "0x8888", amount: 2.5, token: "ETH", chain: "Base", timestamp: "2024-03-15T11:30:00Z", service: "Inference" },
  { id: "t4", from: "0xaaaa", to: "0xbbbb", amount: 75, token: "USDC", chain: "Solana", timestamp: "2024-03-15T12:00:00Z", service: "AI Service" },
  { id: "t5", from: "0xcccc", to: "0xdddd", amount: 1.2, token: "ETH", chain: "Base", timestamp: "2024-03-15T12:30:00Z", service: "Analytics" },
];

export const mockCategories: CategoryStats[] = [
  { name: "Development", value: 35, growth: 12 },
  { name: "Finance", value: 25, growth: 8 },
  { name: "AI", value: 15, growth: 22 },
  { name: "Security", value: 12, growth: 5 },
  { name: "Data", value: 8, growth: 15 },
  { name: "Other", value: 5, growth: 3 },
];

export const mockChains: ChainStats[] = [
  { name: "Base", transactions: 4500, volume: 12500000 },
  { name: "Ethereum", transactions: 2800, volume: 8900000 },
  { name: "Solana", transactions: 1900, volume: 5600000 },
  { name: "Polygon", transactions: 1200, volume: 3400000 },
  { name: "Arbitrum", transactions: 800, volume: 2100000 },
];

export const mockDashboard: DashboardStats = {
  totalAgents: 14567,
  totalVolume: 32500000,
  transactionsToday: 1247,
  avgTransactionSize: 850,
};

export const volumeOverTime = [
  { month: "Jan", volume: 1200000 },
  { month: "Feb", volume: 1800000 },
  { month: "Mar", volume: 2400000 },
  { month: "Apr", volume: 3200000 },
  { month: "May", volume: 4100000 },
  { month: "Jun", volume: 5200000 },
  { month: "Jul", volume: 6800000 },
  { month: "Aug", volume: 8500000 },
  { month: "Sep", volume: 10200000 },
  { month: "Oct", volume: 12500000 },
  { month: "Nov", volume: 14800000 },
  { month: "Dec", volume: 17200000 },
];
