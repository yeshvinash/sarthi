import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-inter">
      {/* Left Side - Brand Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-[45%] bg-[#329D9C] p-12 md:p-24 flex flex-col justify-center text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg inline-block w-fit shadow-xl">
               <div className="flex items-center gap-3">
                  <Heart size={48} className="text-[#329D9C]" fill="#329D9C" />
                  <div className="text-[#329D9C] font-bold text-xs uppercase leading-tight">
                    Relationship<br/>Counsellor
                  </div>
               </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl font-medium text-white/90">Sambandho na Sangharsh no</p>
              <h1 className="text-7xl font-outfit font-extrabold tracking-tight">Sarthi</h1>
            </div>
            
            <p className="text-2xl font-medium mt-4">
              સંબંધોમાં સમજૂતી, સંવાદ અને સહારો
            </p>
            
            <p className="text-lg text-white/80 max-w-sm leading-relaxed mt-6">
              A trusted companion for relationship guidance and emotional well-being.
            </p>
          </div>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
