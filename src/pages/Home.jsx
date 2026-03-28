import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ShieldCheck, Heart, ArrowRight, Star, Sparkles, Home, Building, Truck, Briefcase, Shovel, Layers } from 'lucide-react';

const HomePage = () => {
  const benefits = [
    {
      title: 'Eco-Friendly & Safe',
      description: 'We use non-toxic, pet-safe, and biodegradable products for a healthier home environment.',
      icon: <Heart className="h-10 w-10 text-green-500" />,
    },
    {
      title: 'Fully Insured & Background-Checked',
      description: 'Your peace of mind is our priority. Our professional cleaners are thoroughly vetted and insured.',
      icon: <ShieldCheck className="h-10 w-10 text-primary-500" />,
    },
    {
      title: '100% Satisfaction Guarantee',
      description: 'Not happy with the result? We’ll come back and fix it for free, no questions asked.',
      icon: <CheckCircle className="h-10 w-10 text-purple-500" />,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Weekly, bi-weekly, or one-time deep cleans—we work around your busy lifestyle.',
      icon: <Clock className="h-10 w-10 text-orange-500" />,
    },
  ];

  const services = [
    {
      title: 'Residential Cleaning Hyderabad',
      description: 'Routine upkeep for a consistently clean home.',
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: 'Deep House Cleaning',
      description: 'A top-to-bottom refresh for every nook and cranny.',
      icon: <Layers className="h-8 w-8" />,
    },
    {
      title: 'Move-In/Move-Out Cleaning',
      description: 'Let us handle the scrubbing so you can focus on your move.',
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: 'Office & Commercial Cleaning',
      description: 'Professional workspace maintenance for a productive environment.',
      icon: <Building className="h-8 w-8" />,
    },
    {
      title: 'Post-Construction Cleaning',
      description: 'Removing dust and debris after your renovation or build.',
      icon: <Shovel className="h-8 w-8" />,
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      description: 'Revitalize your fabrics and remove stubborn stains.',
      icon: <Sparkles className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      quote: "I've tried several services in Hyderabad, but CleanSpark is by far the most reliable. My house has never looked this good!",
      author: "Ayesha R.",
      role: "Homeowner",
    },
    {
      quote: "Their deep cleaning service was a lifesaver after our home renovation. The team was professional, fast, and very thorough.",
      author: "Bilal K.",
      role: "Working Professional",
    },
    {
      quote: "As a busy mom, I don't have time to deep clean every week. Having CleanSpark come in bi-weekly has been a total game-changer for my stress levels.",
      author: "Sana M.",
      role: "Parent",
    },
    {
      quote: "We use them for our small office, and the difference is night and day. It's clean, smells fresh, and our employees love it.",
      author: "Farhan S.",
      role: "Business Owner",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                Come Home to a <span className="text-primary-600">Sparkle.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                From busy families to growing offices, we provide eco-friendly, reliable, and deep house cleaning services in Hyderabad, Sindh. Reclaim your time and enjoy a spotless space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Book Your Cleaning Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-5 rounded-full font-bold text-lg hover:bg-primary-50 transition-all flex items-center justify-center"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-sm font-semibold text-gray-500">Trusted by 500+ happy clients</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional House Cleaning Service in Hyderabad"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sparkles className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sparkle Result</p>
                    <p className="text-lg font-bold text-gray-900">100% Spotless</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Excellence in Every Sweep
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We go beyond just cleaning. We provide a professional, safe, and reliable service that gives you back your most valuable asset—your time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-gray-50 p-4 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Cleaning Solutions for Every Space
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              From residential homes to commercial offices, our team is equipped to handle any cleaning challenge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="bg-primary-100 p-4 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 leading-tight">{service.title}</h4>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">{service.description}</p>
                <Link
                  to="/services"
                  className="text-primary-600 font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm">Testimonials</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              What Our Customers Say
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 lg:p-14 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="h-20 w-20 text-primary-600" />
                </div>
                <div className="flex text-yellow-400 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-6 w-6 fill-current" />)}
                </div>
                <p className="text-2xl text-gray-700 italic leading-relaxed mb-10 font-medium">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-6">
                  <div className="h-16 w-16 rounded-full bg-primary-100 overflow-hidden border-4 border-white shadow-md">
                    <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt={t.author} />
                  </div>
                  <div>
                    <h5 className="text-xl font-extrabold text-gray-900">{t.author}</h5>
                    <p className="text-gray-500 font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-primary-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-50 font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the joy of a professionally cleaned home. Get your free quote in under 60 seconds!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <span>Book Now</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/contact"
                className="bg-primary-700 text-white border-2 border-primary-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-primary-800 transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 -ml-12 -mt-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 -mr-12 -mb-12 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
