import { Shield, Search, TrendingUp, Scale, FileText, Building2 } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: 'Full Transaction Management',
      description:
        'End-to-end legal support from initial due diligence through final ownership registration. We handle every legal aspect of your property transaction.',
      features: ['Contract drafting & review', 'Negotiation support', 'Closing coordination', 'Post-sale assistance'],
      color: 'from-[#c9a961] to-[#a68a4e]',
    },
    {
      icon: Search,
      title: 'Property Due Diligence',
      description:
        'Comprehensive investigation of property history, ownership status, liens, restrictions, and potential legal issues before you commit.',
      features: ['Title search', 'Lien verification', 'Zoning compliance', 'Building permit review'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Investment Legal Support',
      description:
        'Specialized legal counsel for foreign investors and high-net-worth individuals seeking to build their Israeli real estate portfolio.',
      features: ['Tax optimization', 'Entity structuring', 'Multi-property strategy', 'Exit planning'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Scale,
      title: 'Complex Legal Cases & Disputes',
      description:
        'Expert representation in property disputes, breach of contract, fraud claims, and litigation related to real estate transactions.',
      features: ['Dispute resolution', 'Court representation', 'Arbitration & mediation', 'Damage claims'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileText,
      title: 'Lease & Contract Agreements',
      description:
        'Professional drafting and review of lease agreements, rental contracts, and commercial property agreements to protect your interests.',
      features: ['Lease drafting', 'Tenant agreements', 'Commercial contracts', 'Terms negotiation'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Building2,
      title: 'Development & Construction Legal',
      description:
        'Legal guidance for property development projects, construction contracts, and contractor agreements in Israel.',
      features: ['Construction contracts', 'Permit assistance', 'Contractor disputes', 'Project compliance'],
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
            <Shield size={16} className="text-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Premium Legal Services<br />
            <span className="text-[#c9a961]">for Your Real Estate Needs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive legal protection tailored for high-value property transactions in Israel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a2942]/80 to-[#0f1f3a]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#c9a961]/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon size={32} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c9a961] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg
                      className="w-5 h-5 text-[#c9a961] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Arrow */}
              <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#c9a961] text-sm font-semibold flex items-center gap-2">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Not sure which service you need?</p>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
