import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, MessageCircle, Link2, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold tracking-tight">CleanSpark</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Professional cleaning services in Hyderabad, Sindh. We bring sparkle and peace of mind to your home and office.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Share2 className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Link2 className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Residential Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-In/Out Cleaning</li>
              <li>Office Cleaning</li>
              <li>Carpet Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+92-XXX-XXXXXXX</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">hello@cleanspark.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Hyderabad, Sindh, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CleanSpark Services. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
