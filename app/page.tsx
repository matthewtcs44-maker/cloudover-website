import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="text-center py-24 bg-gradient-to-r from-[#F5F7FA] to-[#EBF0FF] shadow-2xl rounded-xl mb-12 p-16">
        <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-md">
          Technology That Works For Business.
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We are CloudOver, your AI-first partner for digital transformation across SMB and Enterprise.
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/services/smb-digital-services" className="inline-block bg-[#1A6BFF] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition shadow-lg">
            Explore SMB Services
          </Link>
          <Link href="/services/enterprise-solutions" className="inline-block border border-[#1A6BFF] text-[#1A6BFF] font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition shadow-lg">
            Enterprise Solutions
          </Link>
        </div>
      </header>

      <section className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Capabilities</h2>
        <p className="text-lg text-gray-600">We bridge the gap between complex technology and tangible business outcomes.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 my-12 border-t pt-12">
        <div className="bg-white p-8 rounded-xl shadow-2xl transform transition duration-300 hover:scale-[1.02] border-b-8 border-[#1A6BFF]">
          <h3 className="text-4xl font-extrabold text-[#1A6BFF] mb-4">SMB Digital Services</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Designed for small and medium businesses looking to modernize, scale operations, or enter the digital market with targeted, affordable solutions. We focus on quick wins and measurable ROI.</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Website Design &amp; Branding</li>
            <li>AI Automation &amp; Workflow Optimization</li>
            <li>SEO &amp; Local Marketing Campaigns</li>
            <li>E-Commerce Setup</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-2xl transform transition duration-300 hover:scale-[1.02] border-b-8 border-teal-600">
          <h3 className="text-4xl font-extrabold text-teal-600 mb-4">Enterprise Solutions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">For large organizations requiring complex, integrated technology solutions. We specialize in custom platform architecture and leveraging Microsoft Power Ecosystems.</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Custom Platform Architecture (Power Platform)</li>
            <li>Process Automation &amp; Digital Transformation</li>
            <li>Advanced BI Dashboards</li>
            <li>Dedicated Consulting &amp; Training</li>
          </ul>
        </div>
      </div>

      <section className="text-center mb-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white bg-[#1A6BFF] inline-block py-2 px-6 rounded-full shadow-lg">AI-FIRST PARTNER</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Leveraging cutting-edge artificial intelligence to drive efficiency, innovation, and growth for your business.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-20">
        {[
          {name: "Website Design", desc: "Modern, responsive web presences built for conversion.", color: "border-[#1A6BFF] text-[#1A6BFF]"},
          {name: "AI Integration", desc: "Embedding intelligent automation into your core processes.", color: "border-teal-500 text-teal-500"},
          {name: "E-Commerce", desc: "Full-stack online store development and optimization.", color: "border-orange-500 text-orange-500"},
          {name: "SEO & Marketing", desc: "Driving targeted traffic and maximizing online visibility.", color: "border-[#1A6BFF] text-[#1A6BFF]"},
          {name: "Analytics", desc: "Actionable data insights using tools like Plausible/Google Analytics.", color: "border-purple-500 text-purple-500"},
          {name: "Hosting & Support", desc: "Reliable, high-performance cloud hosting and ongoing support.", color: "border-gray-400 text-gray-600"}
        ].map((service, index) => (
          <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${service.color}`}>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
          </div>
        ))}
      </div>

      <section className="text-center mb-20 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
        <p className="text-lg text-gray-600 mb-8">See how we transformed businesses with our digital solutions.</p>
        <div className="bg-gray-100 p-12 rounded-xl shadow-inner border border-dashed border-gray-300">
          <p className="text-xl text-gray-500 italic">[Case Studies are coming soon! Contact us for a preview.]</p>
        </div>
      </section>

      <section className="mb-20 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Meet Our Experts</h2>
        <div className="flex justify-around flex-wrap gap-8">
          {[
            {name: "CEO", title: "Visionary Leader"},
            {name: "CTO", title: "AI & Architecture Expert"},
            {name: "CMO", title: "Growth Strategist"},
            {name: "Creative Director", title: "Design Maestro"}
          ].map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500 text-sm">Avatar</div>
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-md text-gray-500">{person.title}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#1A6BFF] p-12 text-center rounded-t-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8">Let&apos;s discuss how CloudOver can help you achieve your digital goals.</p>
        <Link href="/contact" className="inline-block bg-white text-[#1A6BFF] font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-100 transition shadow-xl">
          Get a Free Consultation
        </Link>
      </footer>
    </main>
  )
}
