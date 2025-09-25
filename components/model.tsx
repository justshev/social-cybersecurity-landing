"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Target,
  BarChart3,
  FileText,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ModelPages() {
  const categories = [
    {
      title: "Phishing Cybercrime",
      description: "Paparan langsung dan pengetahuan tentang serangan phishing",
      variance: "58.48%",
      factors: "2 faktor utama",
      icon: "🎣",
    },
    {
      title: "Social Media Cybercrime",
      description:
        "Intensitas penggunaan dan kebiasaan berbagi informasi pribadi",
      variance: "73.20%",
      factors: "2 faktor utama",
      icon: "📱",
    },
    {
      title: "Cyberbullying",
      description:
        "Pengalaman langsung dan kesadaran penanganan perundungan daring",
      variance: "70.99%",
      factors: "2 faktor utama",
      icon: "🛡️",
    },
    {
      title: "E-Wallet Cybercrime",
      description: "Tingkat penggunaan dan ketergantungan pada dompet digital",
      variance: "83.68%",
      factors: "1 faktor tunggal",
      icon: "💳",
    },
    {
      title: "E-Commerce Cybercrime",
      description:
        "Keterlibatan dalam aktivitas e-commerce dan berbagi informasi",
      variance: "65.79%",
      factors: "1 faktor tunggal",
      icon: "🛒",
    },
  ];

  return (
    <section id="model" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header & Narrative */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4" />
            Social Cybersecurity Awareness Model
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Model Implementasi{" "}
            <span className="gradient-text">Cybersecurity Awareness</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Model ini dihadirkan sebagai <b>website bimbingan</b> untuk praktik
            bermedia sosial dan transaksi digital yang aman. Fitur utama:
            asesmen mandiri, panduan perilaku, pelatihan, generator
            kebijakan/SOP, dan dashboard organisasi untuk perbaikan
            berkelanjutan. Secara fungsional, model memetakan{" "}
            <b>kategori kejahatan siber prioritas</b> ke kerangka{" "}
            <b>DAMA-DMBOK</b> dan <b>NIST CSF</b>, lalu dievaluasi dengan{" "}
            <b>ISO/IEC 27001/27005</b> (PDCA) untuk menghasilkan deliverables
            terukur.
          </p>
        </div>

        {/* 4 Core Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition">
            <Target className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Asesmen Skor Maturitas</h3>
            <p className="text-sm text-muted-foreground">
              Kuesioner berbasis dimensi (Phishing, SMC, CB, EW, EC)
              menghasilkan profil risiko & rekomendasi personal.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition">
            <BookOpen className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Pelatihan Kontekstual</h3>
            <p className="text-sm text-muted-foreground">
              Modul disesuaikan dengan peran (governance/operasional) dan budaya
              digital setempat.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition">
            <FileText className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Policy & SOP Generator</h3>
            <p className="text-sm text-muted-foreground">
              Template kebijakan & SOP selaras NIST CSF + kontrol ISO 27001,
              dilengkapi PDCA & metrik efektivitas.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition">
            <BarChart3 className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Dashboard Organisasi</h3>
            <p className="text-sm text-muted-foreground">
              Ringkasan kepatuhan, insiden, & tren perilaku untuk mendorong
              perbaikan berkelanjutan.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-3">
            Kategori Kejahatan Siber Prioritas
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Ringkas dan fokus: ikon, judul, deskripsi, dan ringkasan metrik.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {categories.map((c, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg p-3 bg-gradient-to-tr from-primary/10 to-primary/5 text-primary ring-1 ring-primary/15">
                    <span className="text-2xl leading-none">{c.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold tracking-tight">
                      {c.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">{c.variance} variasi</Badge>
                      <Badge variant="secondary">{c.factors}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
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

        {/* Figure */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Figure 2: Indonesian Cybersecurity Research Gaps
          </h3>
          <div className="bg-card border border-border rounded-xl p-4">
            <Image
              src="/images/Picture1.png" // ganti dengan path gambar kamu
              alt="Indonesia Cybersecurity Research Gaps"
              width={800}
              height={500}
              className="mx-auto rounded-md"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Penelitian menunjukkan masih terdapat gap signifikan pada
            representasi demografis, cakupan studi empiris, keterbatasan
            metodologis, dan distribusi geografis. Hal ini menegaskan pentingnya
            implementasi model kesadaran keamanan siber di Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
