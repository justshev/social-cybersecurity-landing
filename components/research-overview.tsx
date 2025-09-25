export function ResearchOverview() {
  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengatasi Gap Keamanan Siber
            <br />
            <span className="gradient-text">di Indonesia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Platform komprehensif yang menyediakan asesmen mandiri, panduan perilaku, dan materi pelatihan untuk
            mitigasi risiko cybercrime di ranah sosial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Asesmen Maturitas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Kuesioner berbasis dimensi terukur (phishing, SMC, CB, EW, EC) menghasilkan profil risiko dan rekomendasi
              personal
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Pelatihan Kontekstual</h3>
            <p className="text-muted-foreground leading-relaxed">
              Modul mengikuti peran/fungsi (governance vs operasional) dan budaya digital setempat untuk efektivitas
              maksimal
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Dashboard Organisasi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ringkasan kepatuhan, insiden, dan tren perilaku untuk mendorong perbaikan berkelanjutan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
