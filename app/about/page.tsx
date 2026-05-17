// app/about/page.tsx
import Link from 'next/link'

const values = [
  { name: "AI-First", description: "Integrating intelligence into every process to drive smarter, faster business outcomes." },
  { name: "Build-vs-Buy Neutrality", description: "We provide objective advice, recommending the optimal path for your unique challenges, not just what sells." },
  { name: "UK-Based Expertise", description: "Leveraging local market knowledge and regulatory compliance to ensure smooth deployment in the UK and Europe." },
  { name: "Transparent Pricing", description: "No hidden fees. Clear, upfront pricing models tailored to your project scope from day one." },
  { name: "Long-Term Partnerships", description: "We aim to be a strategic partner, not just a vendor, guiding your digital journey long after launch." },
];

const teamMembers = [
    { name: "Alex Chen (CEO)", title: "Vision & Strategy", avatarPlaceholder: "/placeholder/alex.png" },
    { name: "Maya Singh (CTO)", title: "Tech Lead & Architecture", avatarPlaceholder: "/placeholder/maya.png" },
    { name: "David Miller (CMO)", title: "Market Strategy & Growth", avatarPlaceholder: "/placeholder/david.png" },
    { name: "Sarah Jones (Creative Dir)", title: "Design & UX Excellence", avatarPlaceholder: "/placeholder/sarah.png" },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A1F44] p-8 text-white">
      {/* Hero Section */}
      <header className="text-center py-24 mb-16 border-b-4 border-teal-500/50 shadow-inner">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Who We Are</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We&apos;re CloudOver. We make technology work for business, turning complex digital challenges into clear pathways to growth and efficiency.
        </p>
         {/* CTA */}
        <Link href="/services/smb-digital-services" className="inline-block bg-teal-500 text-[#0A1F44] font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition shadow-xl">
          See Our Solutions &rarr;
        </Link>
      </header>

      {/* Mission Statement */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-center bg-[#1A2E50] p-10 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
              To empower local businesses by providing bespoke, AI-driven digital transformation services. We believe technology should be a multiplier for human effort, not an obstacle. Our goal is to simplify the complex, ensuring every client achieves sustainable, data-backed growth.
          </p>
      </section>

      {/* Values Section */}
       <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-10 border-b-2 border-[#FFC72C] inline-block mx-auto pb-3">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {values.map((value) => (
            <div key={value.name} className="bg-[#1A2E50] p-6 rounded-lg shadow-xl hover:shadow-teal-500/30 transition duration-300 border-b-4 border-teal-500">
              <h3 className="text-xl font-semibold text-[#FFC72C] mb-2">{value.name}</h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Team Section */}
       <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-[#FFC72C] inline-block mx-auto pb-3">Meet The Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-[#1A2E50] p-6 rounded-xl shadow-lg border border-[#1A6BFF]">
              <img 
                src={member.avatarPlaceholder} 
                alt={`Portrait of ${member.name}`} 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 bg-gray-700 border-4 border-[#FFC72C] shadow-md"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-teal-500 text-sm mt-1 uppercase tracking-wider">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}