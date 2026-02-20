"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md flex-1 group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search agents, transactions, categories..."
            className="w-full pl-11 pr-4 py-2.5 bg-secondary/60 rounded-xl text-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="relative p-2.5 rounded-xl hover:bg-secondary/60 transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-sm font-bold text-primary-foreground">DB</span>
          </div>
          <div className="text-sm">
            <p className="font-semibold">dropmoltbot</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
