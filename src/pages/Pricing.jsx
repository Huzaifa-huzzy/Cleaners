import React from 'react';
import { CheckCircle, ArrowRight, Sparkles, Building, Briefcase, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const residentialPackages = [
    {
      title: 'The Essential Clean',
      subtitle: 'Standard Clean',
      price: 'Starting at: [Price]',
      description: 'Ideal for regular maintenance.',
      features: [
        'Dusting, vacuuming, mopping.',
        'Bathroom & kitchen surfaces.',
        'Trash removal.',
      ],
      benefit: 'Keeps your home tidy and fresh.',
      icon: <Zap className="h-10 w-10 text-primary-600" />,
      popular: false,
    },
    {
      title: 'The Deep Refresh',
      subtitle: 'Premium Clean',
      price: 'Starting at: [Price]',
      description: 'Ideal for seasonal cleaning or first-time visits.',
      features: [
        'Everything in Essential Clean.',
        'Baseboards, window sills, door frames.',
        'Detailed kitchen & bath scrubbing.',
        'Behind/under light furniture.',
      ],
      benefit: 'A complete reset for your home.',
      icon: <Star className="h-10 w-10 text-primary-600" />,
      popular: true,
    },
    {
      title: 'The Move Master',
      subtitle: 'Specialty Clean',
      price: 'Starting at: [Price]',
      description: 'Ideal for moving in or out.',
      features: [
        'Full deep clean.',
        'Inside cabinets, drawers, and closets.',
        'Inside fridge and oven.',
        'Wall spot cleaning.',
      ],
      benefit: 'Stress-free moving transitions.',
      icon: <Sparkles className="h-10 w-10 text-primary-600" />,
      popular: false,
    },
  ];

  const addOns = [
    { name: 'Inside Fridge', price: '[Price]' },
    { name: 'Inside Oven', price: '[Price]' },
    { name: 'Window Cleaning (Interior)', price: '[Price]' },
    { name: 'Load of Laundry', price: '[Price]' },
    { name: 'Carpet Steam Cleaning', price: '[Price]' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center bg-[#00060c]">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Pricing Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00060c]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Simple <span className="text-primary-200">Pricing.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            No hidden fees, no surprises. Choose the perfect cleaning package that fits your lifestyle and budget. Transparent value for your peace of mind.
          </p>
          <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/30 flex items-center space-x-3"
            >
              <span>View Packages</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {residentialPackages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative bg-white p-12 lg:p-14 rounded-3xl border border-gray-100 shadow-xl transition-all group overflow-hidden ${
                pkg.popular ? 'border-primary-600 border-2 scale-105 z-10' : 'hover:shadow-2xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-8 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-widest animate-pulse">
                  Most Popular
                </div>
              )}
              <div className="bg-primary-50 p-6 rounded-2xl w-fit mb-10 group-hover:scale-110 transition-transform">
                {pkg.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{pkg.title}</h3>
              <p className="text-primary-600 font-bold text-lg mb-4">{pkg.subtitle}</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-8">{pkg.price}</p>
              <p className="text-gray-600 mb-10 leading-relaxed font-medium">{pkg.description}</p>
              
              <div className="space-y-6 mb-12">
                <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Included:</h4>
                <ul className="space-y-4">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600 font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-gray-100 mb-10">
                <p className="text-gray-900 font-bold italic">
                  <span className="text-primary-600 not-italic uppercase tracking-widest text-xs block mb-1">Key Benefit:</span>
                  {pkg.benefit}
                </p>
              </div>

              <Link
                to="/contact"
                className={`block w-full text-center px-10 py-5 rounded-full font-extrabold text-lg transition-all shadow-lg hover:shadow-2xl ${
                  pkg.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get Started Now
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-primary-50 p-6 rounded-2xl">
                  <Building className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">The Office Pro</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Customized for small to medium businesses. Daily, weekly, or bi-weekly visits tailored to your office traffic.
              </p>
              <div className="bg-primary-50 p-6 rounded-2xl">
                <p className="text-lg font-extrabold text-gray-900">Contact for a personalized quote.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center justify-center space-x-3 bg-primary-600 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-primary-700 transition-all shadow-lg"
            >
              <span>Request Office Quote</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>

          <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            <div className="flex items-center space-x-6 mb-10">
              <div className="bg-primary-50 p-6 rounded-2xl">
                <Briefcase className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900">The Add-On Menu</h3>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
              Customize your clean with these extra services:
            </p>
            <div className="space-y-6">
              {addOns.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-6 border-b border-gray-50 group hover:px-4 transition-all hover:bg-primary-50 rounded-2xl">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{item.name}</span>
                  <span className="text-lg font-extrabold text-primary-600 bg-white px-6 py-2 rounded-full shadow-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary-600 rounded-[3rem] p-12 lg:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Need a Custom Package?</h2>
            <p className="text-xl lg:text-2xl text-primary-50 font-medium max-w-2xl mx-auto leading-relaxed">
              We understand every home is different. Contact us for a personalized cleaning plan that fits your exact requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-white text-primary-600 px-12 py-6 rounded-full font-extrabold text-xl hover:bg-primary-50 transition-all shadow-xl"
            >
              <span>Get Your Custom Quote</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
