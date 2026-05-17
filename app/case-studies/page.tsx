// app/case-studies/page.tsx
import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0A1F44] p-8 text-white">
      {/* Hero Section */}
      <header className="text-center py-24 mb-16 border-b-4 border-teal-500/50 shadow-inner">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Our Work - Real Results</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          See how CloudOver has partnered with businesses to achieve transformative digital success.
        </p>
         {/* CTA */}
        <div className="bg-[#1A2E50] p-6 rounded-lg inline-block shadow-md">
            <p className='text-gray-300'>We are currently compiling a showcase of our successful projects.</p>
            <Link href="/contact" className="mt-4 inline-block text-teal-400 font-semibold hover:underline">
              Contact us to start your success story &rarr;
            </Link>
        </div>
      </header>

      {/* Placeholder Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-8">Coming Soon</h2>
          <p className='text-lg'>As we build out our portfolio, we will showcase detailed case studies on: AI Automation in Finance, E-Commerce Platform Revamps, and Enterprise Process Digitization.</p>
      </div>

    </main>
  )
}