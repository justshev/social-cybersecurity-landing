export function ResearchFindings() {
  return (
    <section id="findings" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Temuan Penelitian</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Hasil analisis empiris menunjukkan validitas model dan efektivitas framework terintegrasi untuk implementasi
            lintas institusi
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Validasi Statistik</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Phishing (KMO)</span>
                    <span className="font-semibold">0.754</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Social Media (KMO)</span>
                    <span className="font-semibold">0.606</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cyberbullying (KMO)</span>
                    <span className="font-semibold">0.587</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">E-Wallet (KMO)</span>
                    <span className="font-semibold">0.716</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">E-Commerce (KMO)</span>
                    <span className="font-semibold">0.617</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bartlett's Test</span>
                    <span className="font-semibold text-primary">p &lt; 0.001</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Dimensi Risiko Teridentifikasi</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Paparan vs Pengetahuan</h4>
                    <p className="text-xs text-muted-foreground">
                      Phishing dan Cyberbullying menunjukkan dua dimensi: pengalaman langsung dan kesadaran penanganan
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Intensitas vs Berbagi Informasi</h4>
                    <p className="text-xs text-muted-foreground">
                      Social Media Cybercrime terbagi menjadi ketergantungan penggunaan dan kebiasaan berbagi data
                      pribadi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Ketergantungan Tunggal</h4>
                    <p className="text-xs text-muted-foreground">
                      E-Wallet dan E-Commerce menunjukkan faktor tunggal: tingkat keterlibatan dan penggunaan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Kontribusi Penelitian</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Model terintegrasi pertama</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Validasi empiris PCA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Framework implementasi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Deliverables terukur</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Aplikasi Praktis</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Platform dapat diterapkan lintas institusi dan komunitas dengan adaptasi kontekstual</p>
                <p>Siklus evaluasi berkelanjutan memastikan peningkatan maturitas keamanan siber</p>
                <p>Integrasi standar internasional memberikan kredibilitas dan kompatibilitas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-xl p-6">
            <div className="text-3xl">📊</div>
            <div className="text-left">
              <h3 className="font-semibold">Akses Penelitian Lengkap</h3>
              <p className="text-sm text-muted-foreground">Download paper untuk detail metodologi dan hasil analisis</p>
            </div>
            <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
