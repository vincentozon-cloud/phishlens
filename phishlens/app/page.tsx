import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            PHISHLENS
          </h1>
          <p className="text-slate-400 text-sm italic">Cyber-Threat Intelligence v1.0</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-lg text-blue-400 text-xs flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SYSTEM ACTIVE
          </div>
        </div>
      </div>

      {/* Main Scanner UI */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Input Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-blue-100">Analyze Suspicious Link</h2>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Paste URL here (e.g., https://secure-login-bank.com)..." 
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-slate-300"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20">
                SCAN
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">Powered by PhishLens AI Engine</p>
          </div>

          {/* Results Placeholder */}
          <div className="bg-slate-900/50 border border-dashed border-slate-800 p-12 rounded-2xl text-center">
            <p className="text-slate-500 italic">Enter a URL above to begin forensic analysis.</p>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-slate-400 text-xs font-bold uppercase mb-4">Threat Database</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Global Threats</span>
                <span className="text-blue-400 font-mono">14,209</span>
              </div>
              <div className="flex justify-between items-center text-red-400">
                <span className="text-sm font-semibold">Live Attacks</span>
                <span className="text-sm font-mono animate-pulse">● 329</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}