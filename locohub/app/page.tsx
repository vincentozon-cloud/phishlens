'use client'; 
import React, { useState, useEffect } from 'react';
import { 
  Truck, Shield, Target, ZapOff, BarChart3, 
  Search, ClipboardCheck, Tag, LayoutDashboard, 
  Settings, LogOut, Activity, ChevronRight, RefreshCw, Plane, CheckCircle2,
  MapPin, Clock, Camera, MessageSquare, ShieldAlert, ShieldCheck, Scale, History, Info
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LocoHubCommandCenter() {
  const [activeTab, setActiveTab] = useState('visibility');
  const [selectedVan, setSelectedVan] = useState<any>(null);
  const [fleetData, setFleetData] = useState<any[]>([]);

  // Navigation Setup
  const navItems = [
    { id: 'visibility', label: 'HQ Visibility', icon: <LayoutDashboard size={20} /> },
    { id: 'compliance', label: 'Verification & Compliance', icon: <ClipboardCheck size={20} /> },
    { id: 'transparency', label: 'Price Transparency', icon: <Tag size={20} /> },
    { id: 'analytics', label: 'Efficiency Analytics', icon: <BarChart3 size={20} /> },
  ];

  const fetchData = async () => {
    const { data: vans } = await supabase.from('vans').select('*');
    if (vans) setFleetData(vans);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="flex min-h-screen bg-[#F4F5F7] font-sans text-slate-800">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-72 bg-slate-900 flex flex-col border-r border-slate-800 sticky top-0 h-screen z-50">
        <div className="p-8 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="bg-[#E31E24] p-2 rounded-lg shadow-lg">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white leading-none tracking-tighter uppercase italic">LocoHub</h1>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1 italic">HQ Butuan Operations</p>
            </div>
          </div>
        </div>

        {/* INTEGRITY PULSE */}
        <div className="p-6">
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hub Integrity Pulse</span>
              <Activity className="text-[#FDB813] w-3 h-3 animate-pulse" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-white italic">94%</span>
              <span className="text-[8px] font-bold text-emerald-400 mb-1 uppercase tracking-tighter">Stable</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all font-bold text-sm ${
                activeTab === item.id 
                ? 'bg-[#E31E24] text-white shadow-lg shadow-red-900/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 uppercase tracking-tighter">
                {item.icon} {item.label}
              </div>
              {activeTab === item.id && <ChevronRight size={14} />}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white h-20 border-b border-slate-200 px-10 flex items-center justify-between shadow-sm sticky top-0 z-40">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                {navItems.find(i => i.id === activeTab)?.label}
             </h2>
             <span className="h-4 w-[2px] bg-slate-200 mx-2" />
             <p className="text-[11px] font-bold text-slate-400 italic uppercase">Locating Integrity in Every Route.</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchData} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <RefreshCw size={20} className="text-slate-400" />
            </button>
            <div className="w-10 h-10 bg-[#FDB813] rounded-full border-2 border-white shadow-md flex items-center justify-center font-black text-xs">HQ</div>
          </div>
        </header>

        {/* DYNAMIC CONTENT AREA */}
        <div className="p-8 flex-1 overflow-y-auto">
          
          {/* PILLAR 1: HQ VISIBILITY */}
          {activeTab === 'visibility' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden h-[550px] relative border-slate-100">
                  <div className="absolute top-6 left-6 z-10 bg-slate-900/95 text-white p-4 rounded-2xl flex items-center gap-4 shadow-2xl backdrop-blur-md">
                    <Target className={`w-6 h-6 ${selectedVan ? 'text-[#FDB813] animate-pulse' : 'text-slate-500'}`} />
                    <div>
                      <p className="text-[9px] font-black uppercase text-[#FDB813]">Satellite Lock</p>
                      <p className="text-sm font-black tracking-widest">{selectedVan ? selectedVan.plate_number : 'SELECT UNIT'}</p>
                    </div>
                  </div>
                  <iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=125.4851,8.9145,125.5947,8.9782&layer=mapnik" className="border-0 grayscale-[0.2] contrast-[1.1]" />
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border-b-8 border-[#E31E24]">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-5">
                    <ZapOff className="text-[#FDB813] w-6 h-6" />
                    <h3 className="font-black text-lg uppercase tracking-tight text-white italic">Thumbling Alerts</h3>
                  </div>
                  <div className="bg-red-900/40 p-5 rounded-2xl border-l-4 border-l-[#E31E24] animate-pulse">
                    <p className="text-[10px] font-black text-[#FDB813] uppercase mb-1 flex items-center gap-2"><Plane size={12} /> Sync Lapse</p>
                    <p className="text-xl font-black text-white italic">GAA-9901</p>
                    <p className="text-[9px] font-bold text-red-200 mt-2 uppercase underline">Time Offline: 42m</p>
                  </div>
                </div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {fleetData.map((van, i) => (
                    <button key={i} onClick={() => setSelectedVan(van)} className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${selectedVan?.id === van.id ? 'border-[#E31E24] bg-red-50' : 'border-white bg-white'}`}>
                      <div className="flex items-center gap-3 text-left"><Truck size={20} className="text-slate-300" /><div><h4 className="text-sm font-black text-slate-900 leading-none">{van.plate_number}</h4><p className="text-[9px] font-bold text-slate-400 uppercase mt-1">SR: {van.senior_salesman}</p></div></div>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 2: COMPLIANCE */}
          {activeTab === 'compliance' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in">
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 text-red-600 p-3 rounded-2xl"><ShieldAlert size={24} /></div>
                    <div><h4 className="font-black text-slate-900 uppercase">GAA-9901 (Bautista)</h4><p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Thumbling Detected @ Libertad</p></div>
                  </div>
                  <button className="text-[10px] font-black uppercase text-[#E31E24] px-4 py-2 border border-red-100 rounded-lg hover:bg-red-50">Audit</button>
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl text-white">
                <h4 className="font-black text-sm uppercase tracking-widest text-[#FDB813] mb-4">Verification Terminal</h4>
                <textarea placeholder="Enter audit notes..." className="w-full p-4 bg-slate-800 rounded-2xl border-none text-xs outline-none h-32 mb-4" />
                <button className="w-full py-4 bg-[#E31E24] rounded-2xl font-black uppercase text-xs">Verify Integrity</button>
              </div>
            </div>
          )}

          {/* PILLAR 3: PRICE TRANSPARENCY */}
          {activeTab === 'transparency' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border-t-4 border-t-blue-600 shadow-sm"><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Total SKUs</p><p className="text-3xl font-black text-slate-900 italic">142</p></div>
                <div className="bg-white p-6 rounded-3xl border-t-4 border-t-[#FDB813] shadow-sm"><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Price Accuracy</p><p className="text-3xl font-black text-slate-900 italic">98.2%</p></div>
                <div className="bg-white p-6 rounded-3xl border-t-4 border-t-[#E31E24] shadow-sm"><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Active Deviations</p><p className="text-3xl font-black text-slate-900 italic">2</p></div>
              </div>
              <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-100 font-black uppercase italic">Live SKU Price List</div>
                <div className="p-8 text-center text-slate-400 uppercase text-[10px] font-black tracking-widest">Catalog Syncing with Hub...</div>
              </div>
            </div>
          )}

          {/* PILLAR 4: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm h-[400px] flex items-center justify-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Heatmap Engine Initializing...</p>
                </div>
                <div className="bg-slate-900 p-10 rounded-[2.5rem] h-[400px] flex items-end gap-3 px-6">
                  {[40, 70, 45, 90, 65, 85, 94].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-lg ${i === 6 ? 'bg-[#FDB813]' : 'bg-[#E31E24]/30'}`} />
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}