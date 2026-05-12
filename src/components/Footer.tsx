import { Heart, } from 'lucide-react';
import { BsTwitter } from 'react-icons/bs';
import { CgYoutube } from 'react-icons/cg';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Heart className="text-white w-6 h-6" fill="white" />
            </div>
            <span className="text-2xl font-outfit font-extrabold tracking-tight">
              SARTHI
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Strengthening relationships through care, guidance, and emotional support.
            Dedicated to helping you cultivate meaningful connections.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <RiInstagramFill size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <RiFacebookBoxFill size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <CgYoutube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#services" className="hover:text-primary transition-colors">Emotional Healing</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Conflict Resolution</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Relationship Guidance</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Couples Counseling</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-6">Stay updated with our latest articles and relationship tips.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full outline-none focus:border-primary"
            />
            <button className="bg-primary p-2 rounded-lg hover:bg-primary-dark transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sarthi Relationship Consultancy. All rights reserved.</p>
        <p className="mt-2">Designed with heart for better connections.</p>
      </div>
    </footer>
  );
};

export default Footer;
