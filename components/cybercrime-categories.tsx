"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

type Category = {
  key: "phishing" | "smc" | "cb" | "ew" | "ec";
  title: string;
  description: string;
  variance: string;
  factors: string;
  icon: string;
  detail: string;
};

export function CybercrimeCategories() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);

  // Tutup dengan ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categories: Category[] = [
    {
      key: "phishing",
      title: "Phishing Cybercrime",
      description: "Paparan langsung dan pengetahuan tentang serangan phishing",
      variance: "58.48%",
      factors: "2 faktor utama",
      icon: "🎣",
      detail:
        `Phishing Cybercrime menipu korban agar memberikan informasi sensitif (password, kartu kredit, OTP, dsb.) ` +
        `dengan menyamar sebagai pihak resmi via email/SMS/media sosial/website tiruan. ` +
        `KMO = 0,754 (baik); Bartlett χ² = 89,747; df=21; p<0,001. PCA menemukan dua komponen eigen>1: 2,944 (42,051%) dan 1,150 (16,426%)—` +
        `kumulatif 58,478%. Setelah rotasi: 33,261% dan 25,216%; scree plot elbow pada komponen kedua. ` +
        `Dimensi merangkum paparan dan pengetahuan—menggambarkan ancaman lintas domain (akun diambil alih, tautan berbahaya, social engineering). ` +
        `Intervensi model: simulasi phishing, email/web filtering, aturan posting & privasi, 2FA, dan higienitas tautan.`,
    },
    {
      key: "smc",
      title: "Social Media Cybercrime",
      description:
        "Intensitas penggunaan dan kebiasaan berbagi informasi pribadi",
      variance: "73.20%",
      factors: "2 faktor utama",
      icon: "📱",
      detail:
        `KMO = 0,587 (memadai); Bartlett χ² = 71,940; df=10; p<0,001. PCA menghasilkan dua komponen eigen>1: ` +
        `2,299 (45,98%) dan 1,251 (25,02%)—kumulatif 70,99%. Rotasi menunjukkan keseimbangan (44,74% dan 26,25%); ` +
        `scree plot mendukung 2 faktor. Faktor-1: paparan langsung (tautan/OTP), Faktor-2: pengetahuan phishing. ` +
        `Risiko SMC terkait pengambilalihan akun, impersonasi, malware link, rekayasa sosial. ` +
        `Intervensi: aturan posting, pengaturan privasi, 2FA, edukasi higienitas tautan.`,
    },
    {
      key: "cb",
      title: "Cyberbullying",
      description:
        "Pengalaman langsung dan kesadaran penanganan perundungan daring",
      variance: "70.99%",
      factors: "2 faktor utama",
      icon: "🛡️",
      detail:
        `KMO = 0,606 (sedang, memadai); Bartlett χ² = 129,025; df=15; p<0,001. PCA: dua komponen eigen>1 ` +
        `2,664 (44,40%) dan 1,728 (28,80%)—kumulatif 73,202%. Setelah rotasi: 43,74% & 29,46%; scree plot menegaskan 2 faktor. ` +
        `Faktor-1: intensitas/ketergantungan penggunaan medsos (SMC2,4,5,6). Faktor-2: kebiasaan berbagi info/foto pribadi (SMC1,3). ` +
        `Risiko: perundungan, doxxing, pelecehan. Intervensi: etika digital, budaya penggunaan sehat, mekanisme pelaporan/pemblokiran, ` +
        `kebijakan komunitas, pelatihan empati & literasi budaya.`,
    },
    {
      key: "ew",
      title: "E-Wallet Cybercrime",
      description: "Tingkat penggunaan dan ketergantungan pada dompet digital",
      variance: "83.68%",
      factors: "1 faktor tunggal",
      icon: "💳",
      detail:
        `KMO = 0,716 (sedang, cukup baik); Bartlett χ² = 104,675; df=3; p<0,001. PCA menunjukkan satu komponen eigen>1 ` +
        `bernilai 2,510 (83,678%)—struktur faktor tunggal (diperkuat scree plot). Seluruh item (EWC1–EWC3) mengukur ` +
        `dimensi penggunaan/ketergantungan e-wallet: penyimpanan dana, frekuensi transaksi, ketergantungan. ` +
        `Ancaman: penipuan top-up, OTP hijack, aplikasi palsu, SIM swap. Intervensi: verifikasi aplikasi resmi, ` +
        `tidak membagikan OTP, aktifkan transaction alert.`,
    },
    {
      key: "ec",
      title: "E-Commerce Cybercrime",
      description:
        "Keterlibatan dalam aktivitas e-commerce dan berbagi informasi",
      variance: "65.79%",
      factors: "1 faktor tunggal",
      icon: "🛒",
      detail:
        `KMO = 0,617 (sedang, memadai); Bartlett χ² = 40,259; df=3; p<0,001. PCA satu komponen eigen>1: 1,974 ` +
        `(65,792%)—struktur faktor tunggal (dikonfirmasi scree plot). Item ECC1–ECC3 mengukur keterlibatan e-commerce: ` +
        `pembuatan akun, frekuensi transaksi, kecenderungan berbagi data. Ancaman: toko palsu, fake invoice, refund fraud, ` +
        `penyalahgunaan data pembayaran. Intervensi: verifikasi seller, tata kelola data kartu, edukasi escrow, ` +
        `kebijakan pengembalian yang jelas.`,
    },
  ];

  const openDetail = (c: Category) => {
    setSelected(c);
    setOpen(true);
    // optional: lock scroll
    document.documentElement.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setOpen(false);
    setSelected(null);
    document.documentElement.style.overflow = "";
  };

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kategori <span className="gradient-text">Cybercrime</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Lima domain risiko prioritas yang telah dianalisis menggunakan
            Principal Component Analysis (PCA) untuk validasi empiris
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => openDetail(category)}
              className="text-left bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                  {category.variance} variasi
                </span>
                <span className="text-muted-foreground">
                  {category.factors}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Validation */}
        <div className="mt-12 bg-card border border-border rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Metodologi Validasi
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                KMO &gt; 0.5
              </div>
              <p className="text-sm text-muted-foreground">
                Kecukupan sampel untuk analisis faktor
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                p &lt; 0.001
              </div>
              <p className="text-sm text-muted-foreground">
                Bartlett&apos;s Test signifikan
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                Eigenvalue &gt; 1
              </div>
              <p className="text-sm text-muted-foreground">
                Komponen utama valid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDetail();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <div className="relative bg-card border border-border rounded-2xl w-[92vw] max-w-3xl max-h-[90vh] md:max-h-[85vh] shadow-2xl flex flex-col">
            <header className="shrink-0 bg-card/95 backdrop-blur border-b border-border px-6 py-4 flex items-start gap-3">
              <div className="text-2xl leading-none">{selected.icon}</div>
              <div className="flex-1">
                <h4
                  id="modal-title"
                  className="text-lg md:text-xl font-semibold"
                >
                  {selected.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  Varian dijelaskan: {selected.variance} • {selected.factors}
                </p>
              </div>
              <button
                onClick={closeDetail}
                className="p-2 rounded-md hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Tutup"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="p-6 overflow-y-auto space-y-5 flex-1 min-h-0">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={`/images/${selected.key}.png`}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain p-4"
                  priority
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                  }}
                />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {selected.detail}
              </p>
            </div>
            <footer className="shrink-0 border-t border-border px-6 py-4 flex items-center justify-end gap-2 bg-card/95 backdrop-blur">
              <button
                onClick={closeDetail}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-95 transition"
              >
                Tutup
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
