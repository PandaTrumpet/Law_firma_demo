import { Bell, FileText, Lock, Smartphone } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

export function CRMSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Online Transaction Status Tracking',
      description: 'Monitor your property transaction progress in real-time through our secure client portal.',
    },
    {
      icon: Bell,
      title: 'WhatsApp Updates',
      description: 'Receive instant notifications about critical milestones and document requirements.',
    },
    {
      icon: Lock,
      title: 'Secure Document Storage',
      description: 'Access all your legal documents anytime, anywhere through encrypted cloud storage.',
    },
    {
      icon: FileText,
      title: 'Automated Deadline Reminders',
      description: 'Never miss an important date with our intelligent reminder system.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Smartphone size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Legal Tech Platform</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Full Transparency<br />
            <span className="text-[#c9a961]">Throughout the Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge legal technology platform keeps you informed and in control at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-xl p-6 hover:border-emerald-500/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard */}
            <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-[#0a1628] border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">Transaction Dashboard</div>
                    <div className="text-gray-400 text-sm">Apt. 12B, Rothschild Blvd, Tel Aviv</div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 text-sm font-semibold">Active</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">Overall Progress</span>
                    <span className="text-[#c9a961] font-bold">65%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-[#c9a961] to-emerald-500 rounded-full" />
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
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
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Due Diligence Completed</div>
                      <div className="text-gray-400 text-xs mt-0.5">Feb 15, 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#c9a961]/10 rounded-lg border border-[#c9a961]/20">
                    <div className="w-8 h-8 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-[#0a1628] rounded-full animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Contract Review in Progress</div>
                      <div className="text-gray-400 text-xs mt-0.5">Expected: Feb 20, 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-gray-500 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 font-semibold text-sm">Final Registration</div>
                      <div className="text-gray-500 text-xs mt-0.5">Pending previous steps</div>
                    </div>
                  </div>
                </div>

                {/* Documents Section */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white font-semibold text-sm mb-3">Recent Documents</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <FileText size={16} className="text-[#c9a961]" />
                      <span>Title_Search_Report.pdf</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <FileText size={16} className="text-[#c9a961]" />
                      <span>Property_Valuation.pdf</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Notification Overlay */}
            <div className="absolute -bottom-6 -right-6 w-72 bg-[#25D366] rounded-2xl p-4 shadow-2xl border-4 border-[#141e2e] hidden lg:block">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">WhatsApp Update</div>
                  <div className="text-white/90 text-xs">
                    Your contract has been reviewed. Please check the dashboard for details.
                  </div>
                  <div className="text-white/70 text-xs mt-1">Just now</div>
                </div>
              </div>
            </div>

            {/* Decorative Tech Overlay */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
