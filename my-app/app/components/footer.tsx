"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">L</span>
              </div>
              <div>
                <div className="text-white font-semibold text-lg tracking-tight">
                  LegalGuard
                </div>
                <div className="text-[#c9a961] text-xs tracking-wider">
                  Real Estate Law
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium legal services for high-value real estate transactions in
              Israel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("calculator")}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Pricing Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Property Due Diligence</li>
              <li>Transaction Management</li>
              <li>Investment Support</li>
              <li>Legal Disputes</li>
              <li>Contract Agreements</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Rothschild Boulevard 12</li>
              <li>Tel Aviv, Israel 6688012</li>
              <li className="pt-2">
                <a
                  href="tel:+972501234567"
                  className="hover:text-[#c9a961] transition-colors"
                >
                  +972-50-123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@legalguard.co.il"
                  className="hover:text-[#c9a961] transition-colors"
                >
                  info@legalguard.co.il
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LegalGuard Real Estate Law. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#c9a961] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c9a961] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#c9a961] transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
