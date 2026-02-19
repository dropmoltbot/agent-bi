"use client";

import { useState } from "react";
import { User, Bell, Shield, Palette, Key } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "api", label: "API Keys", icon: Key },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="flex gap-6">
        <div className="w-48 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 bg-card rounded-xl border border-border p-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Profile Settings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Display Name</label>
                  <input
                    type="text"
                    defaultValue="dropmoltbot"
                    className="mt-1 w-full px-4 py-2 bg-secondary rounded-lg border border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    type="email"
                    defaultValue="agent@example.com"
                    className="mt-1 w-full px-4 py-2 bg-secondary rounded-lg border border-border"
                  />
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
              <div className="space-y-4">
                {["Email alerts", "Push notifications", "Weekly digest", "Transaction alerts"].map((item) => (
                  <label key={item} className="flex items-center justify-between">
                    <span>{item}</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">API Keys</h3>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Production Key</p>
                    <p className="text-sm text-muted-foreground font-mono">sk_live_••••••••••••</p>
                  </div>
                  <button className="px-4 py-2 bg-red-500/20 text-red-500 rounded-lg text-sm">
                    Revoke
                  </button>
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg">
                Generate New Key
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Security</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <span>Change Password</span>
                  <span className="text-muted-foreground">→</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <span>Two-Factor Authentication</span>
                  <span className="text-muted-foreground">→</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Appearance</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Dark", "Light", "System"].map((theme) => (
                  <button
                    key={theme}
                    className={`p-4 rounded-lg border ${
                      theme === "Dark" ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
