export function ImplementationModel() {
  return (
    <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Model Implementasi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Siklus evaluasi berkelanjutan dengan deliverables terukur untuk peningkatan maturitas keamanan siber
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-xs">1</span>
                </div>
                Domain Risiko
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Lima kategori cybercrime prioritas sebagai objek intervensi kebiasaan
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Phishing</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Social Media</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Cyberbullying</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">E-Wallet</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">E-Commerce</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-xs">2</span>
                </div>
                Evaluasi Terstandar
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                ISO/IEC 27001 & 27005 untuk memastikan efektivitas kontrol dan kebiasaan
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Siklus PDCA (Plan-Do-Check-Act)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Risk Assessment & Treatment</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Monitoring & Review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Deliverables Terukur</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-secondary/30 rounded-lg">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Kebijakan & SOP</h4>
                  <p className="text-xs text-muted-foreground">Templat selaras NIST CSF dan ISO 27001</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-secondary/30 rounded-lg">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Kurikulum Pelatihan</h4>
                  <p className="text-xs text-muted-foreground">Modul kontekstual per peran dan budaya</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-secondary/30 rounded-lg">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Metrik Kedewasaan</h4>
                  <p className="text-xs text-muted-foreground">KPI terukur untuk perbaikan berkelanjutan</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium text-sm mb-3">Indikator Keberhasilan</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-primary font-semibold">↓ Click-rate phishing</div>
                  <div className="text-muted-foreground">Penurunan tingkat klik</div>
                </div>
                <div>
                  <div className="text-primary font-semibold">↑ Adopsi MFA</div>
                  <div className="text-muted-foreground">Peningkatan keamanan</div>
                </div>
                <div>
                  <div className="text-primary font-semibold">↑ Laju pelaporan</div>
                  <div className="text-muted-foreground">Kesadaran meningkat</div>
                </div>
                <div>
                  <div className="text-primary font-semibold">↓ Insiden sosial</div>
                  <div className="text-muted-foreground">Risiko berkurang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
