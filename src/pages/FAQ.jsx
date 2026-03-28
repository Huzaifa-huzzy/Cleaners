import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Sparkles, ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I book a cleaning service?',
      a: 'Booking is easy! You can fill out our Online Booking Form, call us at [Phone Number], or send us a message on Social Media/WhatsApp. We’ll confirm your appointment within 24 hours.',
    },
    {
      q: 'What cleaning products do you use?',
      a: 'We use high-quality, eco-friendly, and non-toxic cleaning products that are safe for your family, pets, and the environment. If you have specific preferences or allergies, please let us know!',
    },
    {
      q: 'Do I need to be home during the cleaning?',
      a: 'No, you don\'t have to be home. Many of our clients provide us with a key or a security code. However, you\'re more than welcome to stay if you prefer. All our staff are background-checked for your security.',
    },
    {
      q: 'Which areas in Hyderabad do you serve?',
      a: 'We serve all major areas in Hyderabad and surrounding neighborhoods. Contact us to see if we cover your specific location!',
    },
    {
      q: 'Are your cleaners insured and background-checked?',
      a: 'Yes, absolutely. All our cleaners undergo a rigorous background check and are fully insured for your peace of mind.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'We understand that plans change. We ask for at least 24 hours\' notice for cancellations or rescheduling. Cancellations with less than 24 hours\' notice may incur a small fee.',
    },
    {
      q: 'How long does a typical cleaning session take?',
      a: 'The duration depends on the size of your space and the type of service. A regular home clean usually takes 2-4 hours, while a deep clean can take 4-8 hours.',
    },
    {
      q: 'Do you bring your own cleaning supplies?',
      a: 'Yes, we provide all the necessary cleaning supplies and equipment. However, if you have specific products you\'d like us to use, we\'re happy to accommodate your request.',
    },
  ];

  const blogPosts = [
    {
      title: '5 Tips for Maintaining a Spotless Home Between Professional Cleanings',
      category: 'Residential Cleaning',
      date: 'March 20, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Why Eco-Friendly Cleaning Products are Better for Your Family and Pets',
      category: 'Eco-friendly',
      date: 'March 15, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1528740561666-dc2479da08ad?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'The Ultimate Move-Out Cleaning Checklist: How to Get Your Deposit Back',
      category: 'Move-out',
      date: 'March 10, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'How Often Should You Professionally Clean Your Office?',
      category: 'Office',
      date: 'March 5, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Spring Cleaning 101: Why Deep House Cleaning is Essential for a Healthy Home',
      category: 'Deep Cleaning',
      date: 'March 1, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211ff973?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center bg-[#00060c]">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Help and FAQ Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00060c]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            FAQs & <span className="text-primary-200">Help.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Everything you need to know about our services and professional cleaning tips. We're here to help you keep your space spotless and answer all your questions.
          </p>
          <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/30 flex items-center space-x-3"
            >
              <span>Ask a Question</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'bg-primary-50 border-primary-100 shadow-xl' : 'bg-white hover:bg-gray-50 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full text-left p-8 flex justify-between items-center group"
                >
                  <span className={`text-xl font-bold transition-colors ${
                    openIndex === i ? 'text-primary-600' : 'text-gray-900 group-hover:text-primary-600'
                  }`}>
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0 group-hover:text-primary-600 transition-colors" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-600 font-medium leading-relaxed border-t border-primary-100 pt-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Sidebar */}
          <div className="space-y-12">
            <div className="bg-gray-900 p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <Sparkles className="h-12 w-12 text-primary-400 animate-pulse" />
                <h3 className="text-3xl font-extrabold">Have more questions?</h3>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                  Our friendly team is always here to help. Reach out to us directly and we'll get back to you right away!
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-primary-700 transition-all shadow-lg text-center"
                  >
                    Contact Support
                  </Link>
                  <a
                    href="https://wa.me/yourwhatsappnumber"
                    className="bg-green-600 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-green-700 transition-all shadow-lg text-center flex items-center justify-center space-x-3"
                  >
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>

            <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-gray-100 shadow-xl space-y-10">
              <h3 className="text-2xl font-extrabold text-gray-900">Why Our Clients Love Us</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Star className="h-6 w-6 text-yellow-600 fill-current" />
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-tight">5.0 Average Google Rating</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-tight">Fast 24-Hour Response Time</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sparkles className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-tight">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm">Latest Articles</h2>
              <h3 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Our Blog & <span className="text-primary-600">Tips</span>
              </h3>
            </div>
            <Link to="/blog" className="text-primary-600 font-bold flex items-center space-x-3 group hover:translate-x-2 transition-transform text-lg">
              <span>View All Articles</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl mb-8 border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-8px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white px-6 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-extrabold text-primary-600 uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
                <div className="space-y-6 px-4">
                  <div className="flex items-center space-x-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary-500" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    {post.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-primary-600 font-extrabold group-hover:translate-x-3 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
