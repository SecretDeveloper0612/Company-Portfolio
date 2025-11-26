import React from 'react';
import { Page } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-primary">
              NOVACORP
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Pioneering the future of digital solutions. We create products that empower businesses to thrive in the modern age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark dark:text-white">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('about')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">About Us</button></li>
              <li><button onClick={() => onNavigate('products')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Products</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Careers</button></li>
              <li><button onClick={() => onNavigate('home')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">News</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark dark:text-white">Support</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('faq')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">FAQ</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Contact Support</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-dark dark:text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={18} className="mt-1 text-primary shrink-0" />
                <span>123 Innovation Blvd, Tech District,<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@novacorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} NovaCorp Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="text-gray-500 hover:text-primary text-sm">Privacy</button>
            <button onClick={() => onNavigate('terms')} className="text-gray-500 hover:text-primary text-sm">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};