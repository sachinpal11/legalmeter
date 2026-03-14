import Link from "next/link";
import Image from "next/image";

export default function LegalInsights() {
  const guides = [
    {
      title: "Complete Guide to GST for New Startups",
      description: "Demystifying thresholds, registration protocols, and exempt services for the Indian ecosystem.",
      category: "GST Guide",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJWwWdVZ9uqBVZw1-LChvuORpT0hLLBn_8tHo8YRRRI7Dwvl7MmE-Xilw-f_kpVzRxjvdpcOOJjOpAo4bk9JuLo07qvbHA2n-OWQIFZ68Ra78yOJiEJAz3APUvK1iHbhTRVkNWqBJ-XjKHivPA6NT0rXGAKez1Kz_u8deQe1l_KC2KzxwxmskEqsvvDrp5UdyyE6SkQWZoTDpcg4jfTfBRIcZUkPT6jrGOfv0HxYUkdakHJxeQnlfQye2HB13xHiYFmLFnHSb1wxCq"
    },
    {
      title: "Professional Tax Explained State-wise",
      description: "A comprehensive audit of P-Tax compliance for employers across India's emerging tech hubs.",
      category: "Taxation",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnYFIuTgq_JYimfF6DtLF0PSFFbsGIcwkjJKiIOCiE0G_XFyap6gYYx-F1OIsbeo5z1wdvqXj6ILOzvObitZcUpFZiKEFiANcEX8Wc1GwjIJs29kobpBKn9wN4dqYumY3Qqbh2A-mpkTB-4FsrhTyptqlzjr-AAiwFuEbPq2nvUfHfUY-lkRGMYUA7Adqe_Z5kUDnTSCHMceZZWpd0FtGqsbhGhyZiAmweq3Nm6kpVZHPmuRV5BVRWECYtWMzvlKhlaT8mX2p7QOoD"
    },
    {
      title: "Do You Really Need a Shop Act License?",
      description: "Navigating Gumasta requirements for remote-first entities and decentralized operations.",
      category: "Shop Act",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiNlXhzhAy7fLI_Rz-OMDFO4GRQW1lKdV1tC3YvANqLAOxNHhm0A6_ooN8uPqBm3ICjBd3k8gw_ZBZuCMlkm-BwKqBtgM24X5pEw5r6xHctBKHDmir2zfImc-xwtatQ6fbMJ98atjGDTdpHX479gNvgWrlR8imNVoXPWag1oq7v-SqAz7mATK8Dp5RHO-28G1tjeYJHc19oJW9IMBtOXN3e93eF6wYF_XnECchwb1YeDvvHl6cyU32FzEee2KWtckPqZyTZVAjaH9j"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Legal Insights</h2>
          <Link href="/articles" className="text-primary text-sm font-semibold hover:underline">View all guides</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-2xl mb-6 overflow-hidden relative">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-slate-900 uppercase tracking-wider">{guide.category}</div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-slate-900">{guide.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
