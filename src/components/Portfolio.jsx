const projects = [
  {
    title: "SIERA",
    desc: "Sistem informasi pengajuan surat akademik berbasis web untuk Program Studi Informatika dengan alur verifikasi bertingkat (Mahasiswa, Admin TU, Kaprodi), pelacakan status, notifikasi, serta laporan dalam format PDF.",
    img: "/assets/portfolio/SIERA.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "DomPDF"],
    role: "",
    repo: "https://github.com/Bayu75/Sistem-Informasi-E-Surat-Informatika",
    demo: "",
  },
  {
    title: "KUBI",
    desc: "Platform kursus hobi berbasis web untuk menjelajahi dan mendaftar kursus, melakukan pembayaran dengan verifikasi admin, mengakses materi, memberi ulasan, serta mengunduh sertifikat PDF.",
    img: "/assets/portfolio/KUBI.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    role: "",
    repo: "https://github.com/Bayu75/Kursus-Hobi",
    demo: "",
  },
  {
    title: "SIPILSAKU",
    desc: "Platform e-learning dan toko e-book untuk Teknik Sipil dengan katalog kursus video, checkout via WhatsApp, dan panel admin. Berkontribusi dalam slicing halaman Kursus, Tentang Kami, dan FAQ.",
    img: "/assets/portfolio/7-sipilsaku.png",
    tech: ["Javascript", "Laravel", "Tailwind CSS", "MySQL"],
    role: "Frontend Developer",
    repo: "https://github.com/chandraputra06/sipilsaku",
    demo: "",
  },
  {
    title: "Website Cuaca",
    desc: "Aplikasi web untuk menampilkan cuaca terkini suatu kota secara real-time, meliputi suhu, kelembapan, dan kecepatan angin, menggunakan OpenWeatherMap API.",
    img: "/assets/portfolio/3-web-cloud.png",
    tech: ["Javascript", "API"],
    role: "",
    repo: "https://github.com/Bayu75/Website-Cuaca",
    demo: "",
  },
  {
    title: "Pencarian Anime",
    desc: "Aplikasi web pencarian judul anime yang menampilkan poster dan judul secara dinamis menggunakan Jikan API (MyAnimeList).",
    img: "/assets/portfolio/6-pencarian-anime.png",
    tech: ["Tailwind CSS", "Javascript", "API"],
    role: "",
    repo: "https://github.com/Bayu75/Pencarian-Anime",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-semibold text-primary text-lg mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">Portfolio</h4>
          <h2 className="font-bold text-slate-800 text-3xl mb-4 lg:text-5xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Project terbaru</h2>
          <p className="font-medium text-secondary md:text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">Project yang pernah saya buat atau ikut berkontribusi.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, index) => (
            <div key={p.title} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100} data-aos-once="true">
              <div className="flex flex-col rounded-2xl p-4 transition duration-200 hover:scale-[1.02] hover:bg-slate-200 hover:shadow-xl">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={p.img} alt={p.title} className="w-full" loading="lazy" />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-slate-800">{p.title}</h3>
                {p.role && <p className="mb-2 text-sm font-semibold text-primary">{p.role}</p>}
                <p className="mb-4 font-medium text-secondary">{p.desc}</p>

                {p.tech.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t}</span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex gap-4">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary hover:text-primary">Link Repo</a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary hover:text-primary">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;