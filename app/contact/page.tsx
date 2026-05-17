// app/contact/page.tsx
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-10 bg-white p-10 rounded-xl shadow-2xl border border-gray-200">
        {/* Left Column: Contact Information */}
        <div>
          <h1 className="text-4xl font-extrabold text-[#1A6BFF] mb-6 border-b pb-3">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">Whether you need a digital strategy, a custom application, or just want to discuss your next big idea, our team is ready to help. Drop us a line.</p>

          {/* Contact Info Block */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
              <p><span className="font-bold text-[#1A6BFF]">CloudOver Ltd.</span> | 12 Innovation Drive, London, UK</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p>hello@cloudover.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+44 (0) 1234 567890</p>
            </div>
          </div>

           {/* Service Interest CTA */}
          <div className="mt-10 p-6 bg-indigo-50 rounded-lg border border-[#1A6BFF]">
             <h3 className="text-2xl font-bold text-[#1A6BFF] mb-4">How can we help you?</h3>
             <p className='mb-4'>Select the area of interest that best fits your needs:</p>
             <div className="flex flex-wrap gap-4">
                {['Website Design', 'AI Integration', 'Enterprise Consulting', 'SEO & Marketing'].map(service => (
                   <button key={service} className='bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition'>
                     {service}
                   </button>
                ))}
             </div>
           </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="border p-8 rounded-lg shadow-inner bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          
          {/* Placeholder for actual form structure - using simple HTML/Tailwind to represent the input fields */}
          <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#1A6BFF] focus:border-[#1A6BFF]" placeholder="Your Full Name"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#1A6BFF] focus:border-[#1A6BFF]" placeholder="you@company.com"/>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
              <input type="text" id="company" name="company" className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#1A6BFF] focus:border-[#1A6BFF]" placeholder="Your Company Name"/>
            </div>
             <div>
              <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
               <div className='flex space-x-4'>
                   {['Website Design', 'AI Integration', 'Enterprise Consulting'].map(service => (
                       <label key={service} className='inline-flex items-center text-sm cursor-pointer'>
                           <input type="radio" name="serviceInterest" value={service} required className='form-radio h-4 w-4 text-[#1A6BFF] border-gray-300'/>
                           <span className='ml-2'>{service}</span>
                       </label>
                   ))}
               </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
              <textarea id="message" name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#1A6BFF] focus:border-[#1A6BFF]" placeholder="Tell us about your project..."></textarea>
            </div>

             {/* Privacy Consent Checkbox */}
             <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="privacyConsent" name="privacyConsent" type="checkbox" required className="focus:ring-[#1A6BFF] h-4 w-4 text-[#1A6BFF] border-gray-300 rounded"/>
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="privacyConsent" className="font-medium text-gray-700">
                        I agree to the <a href="#" className='text-[#1A6BFF] hover:underline'>Privacy Policy</a> and consent to be contacted. *
                    </label>
                </div>
             </div>

            <button type="submit" className="w-full bg-[#1A6BFF] text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition shadow-lg mt-4">
              Send Inquiry
            </button>
          </form>

        </div>
      </div>
    </main>
  )
}