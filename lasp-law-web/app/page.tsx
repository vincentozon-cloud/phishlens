'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', service: 'Civil Litigation', details: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Law Office! My name is ${formData.name}. I am inquiring about ${formData.service}. Details: ${formData.details}`;
    window.open(`https://m.me/LASPLawOffice?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen font-serif text-slate-900 bg-white scroll-smooth relative overflow-hidden">
      
      {/* 0. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center group">
        <a 
          href="https://api.whatsapp.com/send?phone=%2B639176237916"
          target="_blank"
          className="flex items-center bg-[#25D366] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:pr-6"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754c-1.882 0-3.727-.507-5.337-1.465l-.382-.227-3.974 1.041 1.059-3.874-.249-.397A9.488 9.488 0 013.308 9.58c0-5.245 4.267-9.512 9.518-9.512 2.54 0 4.929.991 6.722 2.783 1.793 1.791 2.781 4.177 2.781 6.721 0 5.247-4.266 9.516-9.518 9.516z"/>
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans font-bold text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-3">
            Chat with Atty. Lilibeth
          </span>
        </a>
      </div>

      {/* 1. HIGHLIGHTED HEADER */}
      <header className="bg-slate-900 text-white relative z-20 shadow-xl">
        <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-none uppercase">
              Atty. Lilibeth A. Sanchez-Pates <span className="text-blue-400 font-light block mt-1 text-sm md:text-base">Law Office and Realty</span>
            </h1>
            <span className="text-[9px] uppercase tracking-[0.3em] text-blue-300 font-bold mt-2">Butuan City, Philippines</span>
          </div>
          <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-blue-100">
            <a href="#about" className="hover:text-white transition">The Attorney</a>
            <a href="#gallery" className="hover:text-white transition">Galleries</a>
            <a href="#contact" className="hover:text-white transition underline underline-offset-8">Consultation</a>
          </div>
        </nav>
      </header>

      {/* 2. HERO & FORM SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-1 bg-blue-900 mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Legal Excellence <br/>
              <span className="italic font-light text-blue-900">Built on Trust.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Principled legal representation and strategic counsel for individuals and businesses in the Caraga Region.
            </p>
          </div>

          <div id="contact" className="bg-slate-900 p-8 md:p-12 rounded-sm shadow-2xl">
            <h3 className="text-2xl text-white font-bold mb-6">Request Consultation</h3>
            <form onSubmit={handleSend} className="space-y-4">
              <input required type="text" className="w-full bg-slate-800 border-none text-white p-4 outline-none focus:ring-1 focus:ring-blue-500" placeholder="Full Name" onChange={(e)=>setFormData({...formData, name: e.target.value})} />
              <select className="w-full bg-slate-800 border-none text-white p-4 outline-none" onChange={(e)=>setFormData({...formData, service: e.target.value})}>
                <option>Civil Litigation</option>
                <option>Criminal Defense</option>
                <option>Family Law</option>
                <option>Notarial Services</option>
                <option>Real Estate / Realty Services</option>
              </select>
              <textarea required rows={3} className="w-full bg-slate-800 border-none text-white p-4 outline-none" placeholder="Brief Summary of Case" onChange={(e)=>setFormData({...formData, details: e.target.value})} />
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 transition-all uppercase tracking-widest text-xs shadow-lg">
                Send to Messenger
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. LAW GALLERY (OFFICE & ENGAGEMENTS) */}
      <section id="gallery" className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-blue-900 font-bold uppercase text-[10px] tracking-widest mb-2">The Law Firm</p>
          <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-tighter">Office & Engagements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 bg-slate-200 rounded-sm overflow-hidden border-4 border-white shadow-md">
              <img src="/law-1.jpg" alt="Law Office" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-slate-200 rounded-sm overflow-hidden border-4 border-white shadow-md mt-8">
              <img src="/law-2.jpg" alt="Court Session" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-slate-200 rounded-sm overflow-hidden border-4 border-white shadow-md">
              <img src="/law-3.jpg" alt="Legal Consultation" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-slate-200 rounded-sm overflow-hidden border-4 border-white shadow-md mt-8">
              <img src="/law-4.jpg" alt="Firm Library" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. REALTY GALLERY (NEW SECTION) */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-blue-900 font-bold uppercase text-[10px] tracking-widest mb-2">Real Estate Portfolio</p>
          <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-tighter">Sanchez-Pates Realty</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative h-80 bg-slate-100 rounded-sm overflow-hidden shadow-lg">
              <img src="/realty-1.jpg" alt="Property 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 p-4 text-white">
                <p className="text-xs font-bold uppercase">Residential Development</p>
              </div>
            </div>
            <div className="group relative h-80 bg-slate-100 rounded-sm overflow-hidden shadow-lg">
              <img src="/realty-2.jpg" alt="Property 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 p-4 text-white">
                <p className="text-xs font-bold uppercase">Commercial Spaces</p>
              </div>
            </div>
            <div className="group relative h-80 bg-slate-100 rounded-sm overflow-hidden shadow-lg">
              <img src="/realty-3.jpg" alt="Property 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 p-4 text-white">
                <p className="text-xs font-bold uppercase">Land Acquisitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY PROFILE SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-64 h-80 bg-slate-100 shrink-0 rounded-sm border-[12px] border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/atty-profile.jpg" alt="Atty. Lilibeth" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-4xl font-bold text-slate-900 underline decoration-blue-900 decoration-4 underline-offset-8">Atty. Lilibeth A. Sanchez-Pates</h3>
            <p className="text-slate-600 leading-relaxed italic">
              "Providing ethical and results-driven legal solutions with over [X] years of experience in the Philippine legal system."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold">Roll No.</span>
                <span className="text-slate-700 font-medium font-sans">[Enter Roll No.]</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold">MCLE Compliance</span>
                <span className="text-slate-700 font-medium font-sans">[Enter MCLE No.]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT & MAP SECTION */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-3xl font-bold uppercase tracking-tighter">Visit Our Office</h4>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-blue-900 font-bold uppercase text-[10px] tracking-widest mb-1">Office Address</p>
                <p className="text-slate-700 leading-relaxed font-medium">
                  2nd Floor Connie Building, T. Guingona St., <br/>
                  Brgy. Dagohoy, Butuan City, <br/>
                  Philippines, 8600
                </p>
              </div>
              <p className="text-slate-700">Email: lasp.lawoffice@gmail.com</p>
              <p className="text-slate-700">WhatsApp: +63 917 623 7916</p>
            </div>
          </div>
          <div className="h-96 bg-slate-200 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.571404104523!2d125.530!3d8.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTYnNDMuNyJOIDEyNcKwMzInMTMuNyJF!5e0!3m2!1sen!2sph!4v1643110000000!5m2!1sen!2sph" 
              width="100%" height="100%" style={{ border: 0 }} loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center text-slate-400 text-[10px] uppercase tracking-widest border-t border-slate-50">
        © 2026 Atty. Lilibeth A. Sanchez-Pates Law Office and Realty • All Rights Reserved
      </footer>
    </main>
  );
}