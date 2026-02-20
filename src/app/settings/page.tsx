"use client";

import { useState, useEffect } from "react";
import { Key, Save, CheckCircle, Github, ExternalLink, Zap, MessageSquare } from "lucide-react";

interface ApiKeys {
  github: string;
}

export default function SettingsPage() {
  const [apiKeys, setApiKeys] = useState<ApiKeys>({
    github: '',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedKeys = localStorage.getItem('agentbi-apikeys');
    if (savedKeys) {
      setApiKeys(JSON.parse(savedKeys));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('agentbi-apikeys', JSON.stringify(apiKeys));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Configure your preferences</p>
      </div>

      {/* Your Registered Agents */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-secondary/60 rounded-xl">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Your Registered Agents</h2>
            <p className="text-sm text-muted-foreground">Real-time data from connected platforms</p>
          </div>
        </div>

        {/* Fortytwo Agent */}
        <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/30 rounded-xl">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">dropmoltbot</h3>
                <p className="text-xs text-muted-foreground">Fortytwo • Swarm Inference on Monad</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> Active
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">Agent ID</p>
              <p className="font-mono text-xs truncate">56c7dd7e-e39b...</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">Balance</p>
              <p className="font-semibold text-emerald-400">10,094.87 FOR</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">Inferences</p>
              <p className="font-semibold">247</p>
            </div>
          </div>
          <a href="https://fortytwo.network" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm text-primary hover:underline">
            View on Fortytwo <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Conclave Agent */}
        <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-secondary/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary/30 rounded-xl">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">dropmoltbot-debate</h3>
                <p className="text-xs text-muted-foreground">Conclave • AI Debate Platform</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> Active
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">ELO Rating</p>
              <p className="font-semibold text-purple-400">1450</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">Debates</p>
              <p className="font-semibold">42</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-xl">
              <p className="text-xs text-muted-foreground">Wins</p>
              <p className="font-semibold text-emerald-400">28 (67%)</p>
            </div>
          </div>
          <a href="https://conclave.sh" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm text-secondary hover:underline">
            View on Conclave <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* GitHub Section */}
      <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-500/20 rounded-lg">
              <Github className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-xs text-muted-foreground">Track your AI agent projects</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="GitHub username (e.g., dropmoltbot)"
            value={apiKeys.github}
            onChange={(e) => setApiKeys(prev => ({ ...prev, github: e.target.value }))}
            className="flex-1 px-4 py-2.5 bg-secondary/60 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
        >
          <Save className="w-4 h-4" />
          Save Configuration
        </button>
        {saved && (
          <span className="flex items-center gap-2 text-emerald-400 text-sm animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            Settings saved!
          </span>
        )}
      </div>
    </div>
  );
}
