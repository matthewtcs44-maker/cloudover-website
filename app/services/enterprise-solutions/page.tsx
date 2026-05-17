// app/services/enterprise-solutions/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise Solutions | CloudOver',
  description: 'Strategic Microsoft Power Platform, process automation, and digital transformation solutions for enterprise organisations.',
  openGraph: {
    title: 'Enterprise Solutions | CloudOver',
    description: 'Strategic Power Platform and digital transformation solutions for enterprise.',
  },
}

const enterpriseServices = [
  { name: "Power Platform Architecture", description: "Designing robust, scalable Power Platform solutions aligned with your business goals." },
  { name: "Custom Power Apps", description: "Building tailored applications to automate internal processes and improve operational efficiency." },
  { name: "Process Automation", description: "Automating end-to-end workflows using advanced RPA and Power Automate flows." },
  { name: "Power BI Dashboards", description: "Transform raw data into actionable, high-impact business intelligence dashboards." },
  { name: "Off-the-Shelf Evaluation", description: "Assessing existing commercial software to ensure it meets your enterprise needs optimally." },
  { name: "Training & Enablement", description: "Empowering your teams with the necessary skills to leverage new digital investments effectively." },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Enterprise Solutions',
  provider: { '@type': 'Organization', name: 'CloudOver' },
  description: 'Strategic Microsoft Power Platform, process automation, business intelligence, and digital transformation solutions for enterprise organisations.',
  areaServed: 'GB',
}

export default function EnterpriseSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0A1F44] p-8 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <header className="text-center py-24 mb-16 border-b-4 border-teal-500/50 shadow-inner">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Enterprise Solutions Consulting</h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Scale your operations, transform your data, and streamline your processes with Microsoft Power Platform expertise. We handle the complexity so you can focus on growth.
        </p>
        <Link href="/contact" className="inline-block bg-teal-500 text-[#0A1F44] font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition shadow-xl">
          Discuss a Project &rarr;
        </Link>
      </header>

      {/* Build vs Buy Differentiator Callout */}
       <div className="max-w-5xl mx-auto px-4 mb-16 p-8 bg-gray-900 rounded-lg shadow-2xl border-l-8 border-[#FFC72C]">
        <h2 className="text-3xl font-bold text-[#FFC72C] mb-4">Build vs. Buy: Strategic Decision Making</h2>
        <p className="text-gray-300 text-lg">
          Our consulting starts with a deep dive into your current landscape. We don't push products; we recommend the right path—whether it's leveraging an off-the-shelf tool, customizing an existing system (Build), or adopting a new methodology. Strategic guidance first, solution second.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12 border-b border-gray-700 inline-block mx-auto pb-3">Our Expertise Areas</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseServices.map((service) => (
            <div key={service.name} className="bg-[#1A2E50] p-6 rounded-xl shadow-xl transition duration-300 hover:border-[#FFC72C] border border-transparent hover:border-teal-400">
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link href="/contact" className="text-teal-500 font-semibold hover:underline flex items-center gap-2">
                Request Deep Dive &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}