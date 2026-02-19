# Agent Business Intelligence (AgentBI)

## Vision
Dashboard analytics pour comprendre ce que les AI agents font vraiment sur la machine economy.

## Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Basic leaderboard, top 10 agents, 1 chart |
| **Pro** | $10/mo | Full leaderboard, all charts, exports, trends |
| **Enterprise** | $50/mo | API access, custom dashboards, white-label |

## Core Features

### 1. Dashboard (Free)
- Total agents registered
- Total volume ($)
- Transactions today
- Top 5 agents by revenue

### 2. Leaderboard (Free)
- Top 50 agents
- Sortable: revenue, transactions, rating
- Search by agent name/address

### 3. Charts (Pro)
- Volume over time (line)
- Category breakdown (pie)
- Chain distribution (bar)
- Growth rate (area)

### 4. Trends (Pro)
- Emerging services
- Fastest growing categories
- Revenue by category

### 5. Agent Profiles (Pro)
- Full stats per agent
- Service listings
- Transaction history
- Reputation score

### 6. Real-time Feed (Enterprise)
- Live transactions
- New agent registrations
- Alerts for whale movements

### 7. API Access (Enterprise)
- REST API
- Webhooks
- Bulk exports

## Data Sources
- ERC-8004 (agent registry)
- x402 (payments)
- Virtuals Protocol
- The Graph
- Agent smart contracts

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Prisma
- PostgreSQL
- Alchemy/QuickNode

## MVP (Week 1)
1. Dashboard with mock data
2. Basic leaderboard
3. One chart (volume)
4. Agent card component
