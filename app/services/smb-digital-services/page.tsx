// app/services/smb-digital-services/page.tsx
import Link from 'next/link'

const services = [
  { name: "Website Design", priceHint: "£2k+", description: "Modern, responsive websites built to capture leads and tell your brand story." },
  { name: "AI Integration", priceHint: "£1.5k+", description: "Implement AI assistants, automated workflows, and data insights into your operations." },
  { name: "E-Commerce Solutions", priceHint: "£3k+", description: "Fully functional online stores integrated with payment gateways and inventory management." },
  { name: "SEO & Marketing", priceHint: "£500/mo+", description: "Get found online. Comprehensive search engine optimisation and digital marketing campaigns." },
  { name: "Analytics", priceHint: "£200/mo+", description: "Deep dive into your user behavior with custom analytics dashboards and reporting." },
  { name: "Hosting & Support", priceHint: "£50/mo+", description: "Reliable, secure cloud hosting and 24/7 technical support for seamless operation." },
];

export default function SmbDigitalServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* Hero Section */}
      <header className="text-center py-24 mb-16 bg-[#EBF0FF] rounded-xl shadow-inner border-b-4 border-[#1A6BFF]">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Power Up Your Business with Digital Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Stop wishing for growth and start building it. Our affordable, AI-enhanced services are designed to scale small businesses into digital powerhouses.
        </p>
         {/* CTA */}
        <Link href="/contact" className="inline-block bg-[#1A6BFF] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition shadow-xl">
          Get a Free Quote Today &rarr;
        </Link>
      </header>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 border-b-2 border-[#1A6BFF] inline-block mx-auto">Our Core Offerings</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#1A6BFF]">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-3">Starting from {service.priceHint}</p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/contact" className="text-[#1A6BFF] font-semibold hover:underline flex items-center gap-2">
                Inquire Now &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

       {/* How We Work Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16 text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-8">How We Work: Discover $\to$ Build $\to$ Grow</h2>
          <div className="flex justify-between items-center space-x-4 relative">
             {/* Line connecting steps */}
            <div className='absolute top-[25px] left-0 right-0 h-1 bg-gray-300 mx-8'></div>

            {/* Step 1: Discover */}
            <div className="w-1/3 p-4 relative z-10">
              <div className="text-5xl text-[#1A6BFF] font-bold mb-2">1</div>
              <h3 className='font-semibold text-xl'>Discover</h3>
              <p className='text-sm text-gray-600'>We analyze your current needs and pain points.</p>
            </div>

            {/* Step 2: Build */}
            <div className="w-1/3 p-4 relative z-10">
               <div className="text-5xl text-[#1A6BFF] font-bold mb-2">2</div>
              <h3 className='font-semibold text-xl'>Build</h3>
              <p className='text-sm text-gray-600'>We architect and develop bespoke digital solutions.</p>
            </div>

            {/* Step 3: Grow */}
            <div className="w-1/3 p-4 relative z-10">
               <div className="text-5xl text-[#1A6BFF] font-bold mb-2">3</div>
              <h3 className='font-semibold text-xl'>Grow</h3>
              <p className='text-sm text-gray-600'>We monitor performance and ensure long-term success.</p>
            </div>

          </div>
      </div>
    </main>
  )
}