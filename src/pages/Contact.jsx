import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    size: '',
    frequency: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const neighborhoods = [
    'Latifabad', 'Qasimabad', 'Hala Naka', 'Kohsar', 'Gari Khata', 'Saddar', 'Other',
  ];

  const services = [
    'Regular Clean', 'Deep Clean', 'Move-In/Out', 'Commercial', 'Post-Construction', 'Carpet/Upholstery',
  ];

  const sizes = [
    'Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms', 'Office Space',
  ];

  const frequencies = [
    'One-time', 'Weekly', 'Bi-weekly', 'Monthly',
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center bg-[#00060c]">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00060c]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Get in <span className="text-primary-200">Touch.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Ready for a sparkling clean home or office? We're here to help! Reach out for a free quote or any questions you may have. Our team is ready to assist you.
          </p>
          <div className="flex justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a
              href="tel:+92-XXX-XXXXXXX"
              className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-2xl hover:shadow-primary-600/30 flex items-center space-x-3"
            >
              <span>Call Us Now</span>
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-xl border border-gray-100 space-y-12 relative overflow-hidden group">
              <div className="relative z-10 space-y-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Reach Out Directly</h2>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="bg-primary-50 p-4 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Phone className="h-6 w-6 text-primary-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-xl font-extrabold text-gray-900">+92-XXX-XXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <MessageSquare className="h-6 w-6 text-green-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                      <p className="text-xl font-extrabold text-gray-900">Start a Chat</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="bg-purple-50 p-4 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <Mail className="h-6 w-6 text-purple-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-xl font-extrabold text-gray-900">hello@cleanspark.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="bg-orange-50 p-4 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-6 w-6 text-orange-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Office</p>
                      <p className="text-xl font-extrabold text-gray-900">Hyderabad, Sindh, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="bg-primary-50 p-4 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Clock className="h-6 w-6 text-primary-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-xl font-extrabold text-gray-900">Mon-Sun: 8 AM – 8 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            </div>

            <div className="bg-primary-600 p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl space-y-8 animate-pulse">
              <h3 className="text-2xl font-extrabold">Trust Signals</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="h-6 w-6 text-primary-300" />
                  <span className="text-lg font-bold">Secure Booking</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary-300" />
                  <span className="text-lg font-bold">Guaranteed Quality</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Sparkles className="h-6 w-6 text-primary-300" />
                  <span className="text-lg font-bold">Insured & Bonded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-20 rounded-[4rem] shadow-2xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-20 space-y-8 animate-in zoom-in duration-500">
                  <div className="bg-green-100 p-10 rounded-full w-fit mx-auto shadow-inner">
                    <CheckCircle className="h-24 w-24 text-green-600" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Quote Request Received!</h2>
                  <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-xl mx-auto">
                    Thank you for reaching out. Our team will review your requirements and get back to you with a personalized quote within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary-600 font-extrabold text-xl hover:underline hover:translate-y-[-4px] transition-transform"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none"
                        placeholder="John Doe"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none"
                        placeholder="john@example.com"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none"
                        placeholder="+92 XXX XXXXXXX"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Service Area (Hyderabad)</label>
                      <select
                        name="area"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none appearance-none"
                        onChange={handleChange}
                      >
                        <option value="">Select Neighborhood</option>
                        {neighborhoods.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Service Type</label>
                      <select
                        name="service"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none appearance-none"
                        onChange={handleChange}
                      >
                        <option value="">Select Service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Home/Space Size</label>
                      <select
                        name="size"
                        required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-2xl px-8 py-5 text-lg font-medium transition-all outline-none appearance-none"
                        onChange={handleChange}
                      >
                        <option value="">Select Size</option>
                        {sizes.map((sz) => (
                          <option key={sz} value={sz}>{sz}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Cleaning Frequency</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {frequencies.map((f) => (
                        <label
                          key={f}
                          className={`flex items-center justify-center px-6 py-4 rounded-2xl cursor-pointer transition-all border-2 font-bold text-center ${
                            formData.frequency === f
                              ? 'bg-primary-600 border-primary-600 text-white shadow-lg scale-105'
                              : 'bg-gray-50 border-transparent text-gray-500 hover:bg-primary-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="frequency"
                            value={f}
                            className="hidden"
                            onChange={handleChange}
                          />
                          {f}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-extrabold text-gray-500 uppercase tracking-widest">Additional Notes</label>
                    <textarea
                      name="notes"
                      rows="4"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-600 focus:bg-white rounded-3xl px-8 py-6 text-lg font-medium transition-all outline-none resize-none"
                      placeholder="Tell us about any specific requirements or instructions..."
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-12 py-6 rounded-full font-extrabold text-2xl hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-4 group"
                  >
                    <span>Get My Free Quote Now</span>
                    <Send className="h-8 w-8 group-hover:translate-x-3 group-hover:translate-y-[-4px] transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
