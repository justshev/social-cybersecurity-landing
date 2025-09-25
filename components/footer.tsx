export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SCA</span>
              </div>
              <span className="font-semibold text-lg">Social Cybersecurity Awareness</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Framework komprehensif untuk implementasi kesadaran keamanan siber sosial dengan integrasi standar
              internasional DAMA-DMBOK, NIST CSF, dan ISO/IEC 27001/27005.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Framework</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  DAMA-DMBOK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  NIST CSF
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ISO/IEC 27001
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ISO/IEC 27005
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kategori Risiko</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Phishing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cyberbullying
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  E-Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  E-Commerce
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Social Cybersecurity Awareness Research. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Research Paper</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Contact</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
