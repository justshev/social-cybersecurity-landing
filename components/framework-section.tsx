export function FrameworkSection() {
  return (
    <section id="framework" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Framework Terintegrasi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Kombinasi standar internasional untuk implementasi yang komprehensif dan terukur
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">D</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">DAMA-DMBOK v2</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Kerangka kerja tata kelola data dan kebiasaan digital, mencakup penetapan tujuan, perumusan
                    kebijakan, dan pengelolaan kontrol terukur
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">N</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">NIST Cybersecurity Framework</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Framework keamanan sistem informasi dengan enam fungsi inti: Govern, Identify, Protect, Detect,
                    Respond, dan Recover
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">ISO</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">ISO/IEC 27001 & 27005</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Evaluasi terstandar dengan siklus PDCA untuk sistem manajemen keamanan informasi dan manajemen
                    risiko berbasis bukti
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Model Implementasi</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Policy/SOP Generator</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Templat kebijakan selaras NIST CSF</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Kontrol ISO 27001 terintegrasi</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">PDCA & metrik efektivitas</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Deliverables terukur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
