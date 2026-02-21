import { CheckCircle2, Circle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'We review your situation, transaction details, and objectives. Our experts assess the complexity and provide a clear roadmap for your property transaction.',
      duration: '1-2 days',
      deliverables: ['Preliminary assessment', 'Fee structure', 'Timeline proposal', 'Team assignment'],
    },
    {
      number: '02',
      title: 'Legal & Document Review',
      description:
        'Comprehensive due diligence on the property, including title search, lien verification, and document analysis. We identify risks and ensure legal clarity.',
      duration: '7-14 days',
      deliverables: ['Title report', 'Lien search', 'Property history', 'Risk assessment'],
    },
    {
      number: '03',
      title: 'Contract Preparation & Signing',
      description:
        'We draft or review the purchase agreement, negotiate terms, and ensure your interests are protected. Final review and signing coordination.',
      duration: '5-10 days',
      deliverables: ['Contract draft', 'Terms negotiation', 'Final review', 'Signing coordination'],
    },
    {
      number: '04',
      title: 'Ownership Registration',
      description:
        'We manage the transfer of ownership at the Land Registry, payment coordination, and ensure all legal requirements are met for final registration.',
      duration: '30-60 days',
      deliverables: ['Registry filing', 'Transfer completion', 'Title deed', 'Final documentation'],
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle2 size={16} className="text-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-semibold">Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Path to Secure<br />
            <span className="text-[#c9a961]">Property Ownership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A streamlined, transparent process designed to protect your investment at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a961] via-[#c9a961]/50 to-[#c9a961]" />

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
                  }`}
                >
                  <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 hover:border-[#c9a961]/50 transition-all">
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      <span className="text-5xl font-bold text-[#c9a961]/30">{step.number}</span>
                      <div className="px-3 py-1 bg-[#c9a961]/10 rounded-full">
                        <span className="text-[#c9a961] text-xs font-semibold">{step.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
                    <div>
                      <div className="text-sm font-semibold text-[#c9a961] mb-3">Key Deliverables:</div>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex items-center gap-2 text-sm text-gray-400 ${
                              index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                            }`}
                          >
                            {index % 2 === 0 ? (
                              <>
                                <span>{item}</span>
                                <CheckCircle2 size={16} className="text-[#c9a961]" />
                              </>
                            ) : (
                              <>
                                <CheckCircle2 size={16} className="text-[#c9a961]" />
                                <span>{item}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-full flex items-center justify-center shadow-2xl shadow-[#c9a961]/30">
                      {index === steps.length - 1 ? (
                        <CheckCircle2 size={36} className="text-[#0a1628]" />
                      ) : (
                        <Circle size={36} className="text-[#0a1628]" />
                      )}
                    </div>
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 bg-[#c9a961] rounded-full animate-ping opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#c9a961] mb-2">43-90</div>
            <div className="text-gray-400 text-sm">Average Days to Close</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#c9a961] mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Client Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#c9a961] mb-2">100%</div>
            <div className="text-gray-400 text-sm">Transparency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#c9a961] mb-2">Real-Time</div>
            <div className="text-gray-400 text-sm">Status Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}
