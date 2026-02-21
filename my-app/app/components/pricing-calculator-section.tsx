"use client";

import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export function PricingCalculatorSection() {
  const [formData, setFormData] = useState({
    transactionType: 'purchase',
    propertyValue: '2000000',
    city: 'tel-aviv',
    urgency: 'standard',
    dueDiligence: true,
  });

  const calculateFee = () => {
    const value = parseInt(formData.propertyValue) || 0;
    let baseFee = value * 0.015; // 1.5% base
    
    if (formData.urgency === 'urgent') baseFee *= 1.3;
    if (formData.urgency === 'express') baseFee *= 1.6;
    if (formData.dueDiligence) baseFee += 15000;
    if (formData.city === 'jerusalem') baseFee *= 1.1;
    
    return Math.round(baseFee);
  };

  const estimatedFee = calculateFee();

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a961]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
            <Calculator size={16} className="text-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Calculate the Cost of<br />
            <span className="text-[#c9a961]">Legal Support</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get an instant estimate for your real estate legal services. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="space-y-6">
              {/* Transaction Type */}
              <div>
                <label className="block text-white font-semibold mb-3">Type of Transaction</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'purchase', label: 'Purchase' },
                    { value: 'sale', label: 'Sale' },
                    { value: 'investment', label: 'Investment' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({ ...formData, transactionType: option.value })}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        formData.transactionType === option.value
                          ? 'bg-[#c9a961] text-[#0a1628]'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Value */}
              <div>
                <label className="block text-white font-semibold mb-3">Property Value (₪)</label>
                <input
                  type="number"
                  value={formData.propertyValue}
                  onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
                  placeholder="2,000,000"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-white font-semibold mb-3">City</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
                >
                  <option value="tel-aviv">Tel Aviv</option>
                  <option value="jerusalem">Jerusalem</option>
                  <option value="herzliya">Herzliya</option>
                  <option value="netanya">Netanya</option>
                  <option value="haifa">Haifa</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-white font-semibold mb-3">Urgency Level</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'standard', label: 'Standard', time: '30 days' },
                    { value: 'urgent', label: 'Urgent', time: '14 days' },
                    { value: 'express', label: 'Express', time: '7 days' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({ ...formData, urgency: option.value })}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        formData.urgency === option.value
                          ? 'bg-[#c9a961] text-[#0a1628]'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <div>{option.label}</div>
                      <div className="text-xs mt-1 opacity-70">{option.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Due Diligence */}
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-4 border border-white/10">
                <div>
                  <div className="text-white font-semibold">Full Due Diligence</div>
                  <div className="text-gray-400 text-sm mt-1">Comprehensive property investigation</div>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, dueDiligence: !formData.dueDiligence })}
                  className={`w-12 h-6 rounded-full transition-all ${
                    formData.dueDiligence ? 'bg-[#c9a961]' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-all ${
                      formData.dueDiligence ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="space-y-6">
            {/* Main Fee Display */}
            <div className="bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-2xl p-8 lg:p-10 text-[#0a1628] shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} />
                <span className="font-semibold">Estimated Legal Fee</span>
              </div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">
                ₪{estimatedFee.toLocaleString()}
              </div>
              <div className="text-sm opacity-80">
                Based on {((estimatedFee / parseInt(formData.propertyValue || '1')) * 100).toFixed(2)}% of property value
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Fee Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Base Legal Fee</span>
                  <span className="text-white font-semibold">
                    ₪{Math.round(parseInt(formData.propertyValue || '0') * 0.015).toLocaleString()}
                  </span>
                </div>
                {formData.dueDiligence && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">Due Diligence</span>
                    <span className="text-white font-semibold">₪15,000</span>
                  </div>
                )}
                {formData.urgency !== 'standard' && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400">
                      {formData.urgency === 'urgent' ? 'Urgent Service' : 'Express Service'}
                    </span>
                    <span className="text-[#c9a961] font-semibold">
                      +{formData.urgency === 'urgent' ? '30%' : '60%'}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold">Total Estimate</span>
                  <span className="text-[#c9a961] font-bold text-xl">
                    ₪{estimatedFee.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-[#c9a961] text-[#0a1628] py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl text-lg">
              Get Exact Quote
            </button>

            {/* Disclaimer */}
            <p className="text-gray-500 text-sm text-center">
              *This is an estimate. Final fees depend on transaction complexity and specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
