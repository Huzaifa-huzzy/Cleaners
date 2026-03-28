import React from 'react';
import { Heart, ShieldCheck, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We treat every home and office with the utmost respect and honesty.',
      icon: <ShieldCheck className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Excellence',
      description: 'We don\'t just clean; we care about the details that make a difference.',
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: 'Reliability',
      description: 'You can count on us to show up on time and deliver consistent results.',
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: 'Sustainability',
      description: 'We prioritize the health of our clients and the planet by using eco-friendly products.',
      icon: <Heart className="h-8 w-8 text-red-500" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center bg-[#00060c]">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
            alt="Our Dedicated Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00060c]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            About <span className="text-primary-200">Us.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Dedicated to bringing sparkle and comfort to every home in Hyderabad, Sindh. Discover the story behind our passion for excellence and our commitment to your peace of mind.
          </p>
          <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/30 flex items-center space-x-3"
            >
              <span>Our Journey</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our <span className="text-primary-600">Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              CleanSpark was founded in Hyderabad with a simple goal: to help our neighbors reclaim their time and enjoy the comfort of a truly clean home.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We started as a small team of passionate cleaners who believed that a clean environment leads to a happier life. Today, we’ve grown into a trusted local service known for our reliability, attention to detail, and commitment to eco-friendly practices.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Book a Clean</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1556740734-7f9583451bf6?auto=format&fit=crop&q=80&w=1200"
                alt="Our Professional Cleaning Team"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-6 animate-bounce">
              <div className="text-center border-r border-gray-100 pr-6">
                <p className="text-3xl font-extrabold text-primary-600">500+</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-green-600">100%</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-24 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our <span className="text-primary-600">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              To provide exceptional cleaning services that exceed our clients' expectations while promoting a healthier, more sustainable lifestyle through eco-friendly products and professional care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center">
                <div className="bg-gray-50 p-6 rounded-2xl w-fit mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-24 space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Why Customers <span className="text-primary-600">Trust Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start space-x-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
              <CheckCircle className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Locally Owned & Operated</h4>
                <p className="text-gray-600 leading-relaxed font-medium">We understand the needs of our Hyderabad community.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
              <CheckCircle className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Experienced Professionals</h4>
                <p className="text-gray-600 leading-relaxed font-medium">Our team is trained, background-checked, and fully insured.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
              <CheckCircle className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Transparent Communication</h4>
                <p className="text-gray-600 leading-relaxed font-medium">No hidden fees, clear scheduling, and proactive updates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
              <CheckCircle className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 leading-relaxed font-medium">Hundreds of satisfied clients and a growing list of 5-star reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
