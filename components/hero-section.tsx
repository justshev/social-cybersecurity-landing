import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" id="overview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            Penelitian Keamanan Siber
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
            <span className="gradient-text">Social Cybersecurity</span>
            <br />
            <span className="text-foreground">Awareness Framework</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed">
            Model implementasi komprehensif untuk meningkatkan kesadaran
            keamanan siber sosial melalui integrasi framework DAMA-DMBOK, NIST
            CSF, dan standar ISO/IEC 27001/27005
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors glow-effect">
              <a href="#model">Explore Framework</a>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors">
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Research
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
