'use client';

import React, { useState } from 'react';

// 1. THE BLUEPRINT (Telling the computer what a "Scan" looks like)
interface ScanHistoryItem {
  url: string;
  status: string;
  time: string;
}

export default function Home() {
  // 2. THE MEMORY (States)
  const [urlInput, setUrlInput] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);

  // 3. THE BRAIN (Functions)
  const startScan = () => {
    if (!urlInput) return;
    setIsScanning(true);
    setResult("");

    setTimeout(() => {
      setIsScanning(false);
      const score = Math.floor(Math.random() * 100) + 1;
      
      let statusText = score > 70 ? `DANGEROUS (${score}/100)` : `SAFE (${score}/100)`;
      setResult(statusText);

      // Add to the list
      const newEntry = { url: urlInput, status: statusText, time: new Date().toLocaleTimeString() };
      setHistory(prev => [newEntry, ...prev]);
      setUrlInput(""); // Clear the input box
    }, 2000);
  };

  const deleteItem = (indexToDelete: number) => {
    setHistory(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  // 4. THE VISUALS (UI)
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-400">PHISHLENS</h1>

        {/* Input Box */}
        <div className="flex gap-2 bg-slate-900 p-4 rounded-xl border border-slate-800">
          <input 
            className="flex-1 bg-transparent outline-none p-2"
            placeholder="Enter URL..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <button 
            onClick={startScan}
            disabled={isScanning}
            className="bg-blue-600 px-6 py-2 rounded-lg font-bold disabled:opacity-50"
          >
            {isScanning ? "..." : "SCAN"}
          </button>
        </div>

        {/* Big Result Display */}
        {result && (
          <div className="p-4 bg-slate-900 border border-blue-500/50 rounded-xl text-center text-xl font-mono">
            {result}
          </div>
        )}

        {/* History List */}
        <div className="space-y-4">
          <h2 className="text-slate-500 text-sm font-bold uppercase tracking-wider">Recent Scans</h2>
          {history.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div>
                <p className="text-blue-400 text-sm font-mono">{item.url}</p>
                <p className="text-slate-600 text-[10px]">{item.time}</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xs font-bold text-slate-300">{item.status}</span>
                <button onClick={() => deleteItem(index)} className="text-slate-600 hover:text-red-500">✕</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}