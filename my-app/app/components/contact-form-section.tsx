"use client";

import { useState } from "react";
import { Send, Phone, Mail, CheckCircle2 } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyValue: "",
    transactionType: "purchase",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyValue: "",
        transactionType: "purchase",
        description: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contact-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
            <Send size={16} className="text-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-semibold">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get a Legal Evaluation
            <br />
            <span className="text-[#c9a961]">of Your Transaction</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Share your details and our experts will contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="David Cohen"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-semibold mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="+972-50-123-4567"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="david@example.com"
                  />
                </div>

                {/* Property Value */}
                <div>
                  <label
                    htmlFor="propertyValue"
                    className="block text-white font-semibold mb-2"
                  >
                    Property Value (₪) *
                  </label>
                  <input
                    type="number"
                    id="propertyValue"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="2,000,000"
                  />
                </div>

                {/* Transaction Type */}
                <div>
                  <label
                    htmlFor="transactionType"
                    className="block text-white font-semibold mb-2"
                  >
                    Type of Transaction *
                  </label>
                  <select
                    id="transactionType"
                    name="transactionType"
                    value={formData.transactionType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
                  >
                    <option value="purchase">Purchase</option>
                    <option value="sale">Sale</option>
                    <option value="investment">Investment</option>
                    <option value="lease">Lease</option>
                    <option value="dispute">Legal Dispute</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-white font-semibold mb-2"
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500 resize-none"
                    placeholder="Tell us about your property transaction..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#c9a961] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/20 text-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Request Consultation
                </button>

                {/* Response Time */}
                <p className="text-center text-gray-400 text-sm">
                  ⏱️ We respond within 24 hours
                </p>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-400 mb-6">
                  We've received your request. Our legal team will contact you
                  within 24 hours.
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                  <span className="text-emerald-400 text-sm font-semibold">
                    Request Submitted
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information & Details */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+972501234567"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
                    <Phone size={24} className="text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-semibold">
                      +972-50-123-4567
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@legalguard.co.il"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
                    <Mail size={24} className="text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-semibold">
                      info@legalguard.co.il
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="bg-gradient-to-br from-[#c9a961]/10 to-transparent border border-[#c9a961]/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {[
                  "Specialized in high-value transactions",
                  "Foreign investor expertise",
                  "Real-time tech platform",
                  "98% success rate",
                  "Transparent pricing",
                  "Hebrew, English, Russian support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#c9a961] flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Location */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">
                Office Location
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Rothschild Boulevard 12
                <br />
                Tel Aviv, Israel 6688012
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Office Hours: Sunday-Thursday, 9:00-18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
