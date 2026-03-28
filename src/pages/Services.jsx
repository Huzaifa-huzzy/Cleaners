import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Building, Truck, Shovel, Sparkles, Layers } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'residential',
      title: 'Residential Cleaning Hyderabad',
      subtitle: 'Regular Home Cleaning for Your Peace of Mind',
      description: 'Keep your home consistently clean without lifting a finger. Our routine visits ensure your living space stays fresh, organized, and welcoming.',
      benefits: [
        'Consistent cleanliness week after week.',
        'Customizable checklists to suit your home\'s needs.',
        'More free time for you and your family.',
      ],
      included: [
        'Dusting and wiping all surfaces.',
        'Mopping and vacuuming floors.',
        'Kitchen surface cleaning and appliance exterior wiping.',
        'Bathroom sanitation (toilets, sinks, showers).',
        'Trash removal.',
      ],
      pricing: 'Starting from [Price per Visit/Room]. Contact us for a custom quote based on your home size.',
      icon: <Home className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 'deep',
      title: 'Deep House Cleaning',
      subtitle: 'A Top-to-Bottom Refresh for Your Home',
      description: 'Perfect for seasonal cleaning or when your home needs a little extra love. We dive deep into those often-overlooked areas.',
      benefits: [
        'Removal of built-up grime and allergens.',
        'Detailed attention to every corner.',
        'A "new home" feeling without the move.',
      ],
      included: [
        'Everything in the regular clean, plus:',
        'Wiping baseboards, window sills, and door frames.',
        'Cleaning behind and under movable furniture.',
        'Inside-cabinet cleaning (upon request).',
        'Detailed kitchen and bathroom scrubbing.',
      ],
      pricing: 'One-time service starting at [One-time Price]. Recommended every 3-6 months.',
      icon: <Layers className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 'move',
      title: 'Move-In/Move-Out Cleaning',
      subtitle: 'Smooth Transitions for Your New Chapter',
      description: 'Moving is stressful enough. Let us handle the deep cleaning of your old or new space so you can focus on the big move.',
      benefits: [
        'Ensure your security deposit is returned.',
        'Start fresh in your new home with total confidence.',
        'Saves you hours of exhausting work during a move.',
      ],
      included: [
        'Comprehensive deep clean of all rooms.',
        'Inside all cabinets and drawers.',
        'Inside appliances (fridge, oven, etc.).',
        'Wall washing and baseboard detailing.',
      ],
      pricing: 'Flat-rate packages available based on bedroom count.',
      icon: <Truck className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 'office',
      title: 'Office & Commercial Cleaning',
      subtitle: 'Professional Environments for Maximum Productivity',
      description: 'A clean office is a productive office. We provide reliable commercial cleaning tailored to your business schedule.',
      benefits: [
        'Healthier workspace for employees.',
        'Professional impression for clients and visitors.',
        'Customized cleaning plans for small to medium offices.',
      ],
      included: [
        'Desk and common area sanitization.',
        'Restroom and breakroom cleaning.',
        'Waste management and recycling.',
        'Floor maintenance (sweeping, mopping, vacuuming).',
      ],
      pricing: 'Monthly contracts or one-time cleans available. Inquire for a site walkthrough and quote.',
      icon: <Building className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 'construction',
      title: 'Post-Construction Cleaning',
      subtitle: 'Reveal the Beauty of Your New Space',
      description: 'After the dust settles, we make sure your renovation or new build is truly move-in ready.',
      benefits: [
        'Expert removal of construction dust and debris.',
        'Detailed cleaning of all surfaces, windows, and floors.',
        'Safe handling of leftover materials and residues.',
      ],
      included: [
        'Full dust removal from walls and ceilings.',
        'Window track and glass cleaning.',
        'Deep cleaning of all floors and carpets.',
        'Final polishing of all fixtures.',
      ],
      pricing: 'Quote provided after on-site assessment.',
      icon: <Shovel className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 'carpet',
      title: 'Carpet & Upholstery Cleaning',
      subtitle: 'Refresh Your Fabrics and Remove Stubborn Stains',
      description: 'Prolong the life of your carpets and furniture with our professional steam cleaning and stain removal services.',
      benefits: [
        'Removal of deep-seated dirt, allergens, and odors.',
        'Restoration of fabric color and texture.',
        'Fast-drying techniques for minimal disruption.',
      ],
      included: [
        'Pre-treatment of stains and high-traffic areas.',
        'Deep steam extraction cleaning.',
        'Deodorizing and fabric protection (optional).',
      ],
      pricing: 'Per room or per furniture item. Packages available.',
      icon: <Sparkles className="h-12 w-12 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center bg-[#00060c]">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528740561666-dc2479da08ad?auto=format&fit=crop&q=80&w=2000"
            alt="Cleaning Service Details"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00060c]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Our Cleaning <span className="text-primary-200">Services.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Professional cleaning solutions tailored to your unique needs in Hyderabad, Sindh. We bring sparkle and peace of mind to every corner of your space.
          </p>
          <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/30 flex items-center space-x-3"
            >
              <span>Book Your Clean</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 space-y-8 p-10 lg:p-14 bg-white rounded-3xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex items-center space-x-6">
                  <div className="bg-primary-50 p-6 rounded-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-primary-600 font-bold text-lg">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3 group">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-600 font-medium leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">What's Included</h3>
                    <ul className="space-y-4">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 group">
                          <CheckCircle className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-100">
                  <div className="bg-primary-50 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Pricing Info</p>
                      <p className="text-gray-700 font-extrabold text-lg">{service.pricing}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1581578731548-c64695cc6958' : index === 1 ? '1527515637462-cff94eecc1ac' : index === 2 ? '1600585154340-be6161a56a0c' : index === 3 ? '1497366216548-37526070297c' : index === 4 ? '1584622650111-993a426fbf0a' : '15175545081-5db817172677'}?auto=format&fit=crop&q=80&w=800`}
                    alt={service.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
