'use client';

import React, { useState } from 'react';

// 1. Blueprints (TypeScript)
interface ScanHistoryItem {
  url: string;
  status: string;
  time: string;
  isDanger: boolean;
}

export default function Home() {
  // 2. Mental Switches (State)
  const [urlInput, setUrlInput] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);

  // 3. The Brain (Logic)
  const startScan = () => {
    if (!urlInput) return; // Don't scan if empty

    setIsScanning(true);
    setResult("");

    setTimeout(() => {
      setIsScanning(false);
      const score = Math.floor(Math.random() * 100) + 1;
      
      const isBad = score > 70;
      let statusText = "";
      if (score < 30) statusText = `SAFE (${score}/100)`;
      else if (score < 70) statusText = `SUSPICIOUS (${score}/100)`;
      else statusText = `DANGEROUS (${score}/100)`;

      setResult(statusText);

      // Add to history
      const newEntry: ScanHistoryItem = {
        url: urlInput,
        status: statusText,
        time: new Date().toLocaleTimeString(),
        isDanger: isBad
      };

      setHistory(prev => [newEntry, ...prev]);
      setUrlInput(""); // Clear the box
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            PHISHLENS
          </h1>
          <p className="text-slate-500 mt-2 italic">Professional Threat Intelligence</p>
        </div>

        {/* Action Box */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Enter URL to analyze..." 
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors text-slate-300"
            />
            <button 
              onClick={startScan}
              disabled={isScanning}
              className={`${
                isScanning ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-500 active:scale-95'
              } text-white px-10 py-3 rounded-xl font-bold transition-all flex items-center gap-3`}
            >
              {isScanning ? "SCANNING..." : "SCAN URL"}
            </button>
          </div>
        </div>

        {/* Result Area */}
        {result && (
          <div className={`p-6 rounded-xl border text-center animate-in zoom-in duration-300 ${
            result.includes('SAFE') ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' :
            result.includes('SUSPICIOUS') ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' :
            'bg-rose-500/10 border-rose-500/50 text-rose-500'
          }`}>
            <span className="text-2xl font-mono font-bold">{result}</span>
          </div>
        )}

        {/* History Table */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="bg-slate-800/50 p-4 border-b border-slate-700">
            <h3 className="font-bold text-slate-300">Scan History</h3>
          </div>
          <div className="p-4 space-y-3">
            {history.length === 0 ? (
              <p className="text-slate-600 text-center py-4">No data available.</p>
            ) : (
              history.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-800 animate-in slide-in-from-bottom">
                  <div className="flex flex-col">
                    <span className="text-blue-400 font-mono text-sm">{item.url}</span>
                    <span className="text-slate-600 text-[10px] uppercase tracking-widest">{item.time}</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.status.includes('SAFE') ? 'bg-emerald-900/30 text-emerald-400' : 
                    item.status.includes('SUSPICIOUS') ? 'bg-yellow-900/30 text-yellow-400' : 'bg-rose-900/30 text-rose-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}