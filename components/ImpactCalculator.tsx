
import React, { useState, useEffect, useCallback } from 'react';
import { getImpactAnalysis } from '../services/geminiService';

const ImpactCalculator: React.FC = () => {
  const [liters, setLiters] = useState<number>(20);
  const [impactText, setImpactText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const getPricePerLiter = (l: number) => {
    if (l >= 500) return 7500;
    if (l >= 200) return 7000;
    if (l >= 100) return 6500;
    return 6000;
  };

  const currentPrice = getPricePerLiter(liters);
  const totalEarnings = liters * currentPrice;

  const fetchAnalysis = useCallback(async (val: number) => {
    setLoading(true);
    const result = await getImpactAnalysis(val);
    setImpactText(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAnalysis(liters);
    }, 1000);
    return () => clearTimeout(timer);
  }, [liters, fetchAnalysis]);

  return (
    <section id="harga" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hitung Estimasi Pendapatan</h2>
          <p className="text-slate-600">Masukkan jumlah liter di bawah ini untuk melihat total uang yang Anda terima.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Calculator Input */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Jumlah Jelantah (Liter)</label>
            <div className="relative mb-6">
              <input 
                type="number" 
                value={liters} 
                onChange={(e) => setLiters(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-4xl font-bold bg-transparent border-b-2 border-emerald-500 focus:outline-none py-2 pr-12"
              />
              <span className="absolute bottom-4 right-0 text-slate-400 font-medium text-xl">Liter</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Harga per Liter (Tier)</span>
                <span className="text-lg font-bold text-slate-800">Rp {currentPrice.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-500">Estimasi Pendapatan</span>
                <span className="text-2xl font-bold text-emerald-600">Rp {totalEarnings.toLocaleString('id-ID')}</span>
              </div>
              <p className="text-xs text-slate-400 italic">*Harga menyesuaikan dengan jumlah liter. Sameday khusus Jakarta.</p>
              <button 
                onClick={() => window.open('https://wa.me/6281919051690', '_blank')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> Jemput Sameday Sekarang
              </button>
            </div>
          </div>

          {/* AI Impact Result */}
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col min-h-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
                <i className="fas fa-sparkles"></i>
              </div>
              <h3 className="font-bold text-emerald-900">Analisa Dampak Lingkungan</h3>
            </div>
            
            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
                <p className="text-emerald-700 text-sm animate-pulse">Menghitung fakta lingkungan...</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <p className="text-emerald-800 text-lg leading-relaxed mb-6">
                  {impactText}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-emerald-200 pt-4">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Powered by Google Gemini</span>
                  <div className="flex items-center gap-1 text-emerald-600 text-sm">
                    <span className="font-semibold">Mijel.id AI</span>
                    <i className="fas fa-microchip text-xs"></i>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;
