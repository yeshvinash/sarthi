import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileImg from '../assets/paresh-image.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-warm">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase"
          >
            Nurturing Relationships, Rebuilding Trust
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
            Your Partner in <span className="text-primary italic">Emotional Healing</span> & Growth
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Sarthi is a dedicated platform helping couples and individuals cultivate stronger,
            healthier, and more meaningful connections through professional guidance and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book-slot"
              className="btn-primary py-4 px-8 text-lg"
            >
              Book a Slot
              <ArrowRight size={20} />
            </Link>

            <motion.a
              href="https://wa.me/919898537396"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary py-4 px-8 text-lg bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:border-green-300"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500">
              <span className="text-charcoal font-bold">500+</span> Happy Relationships Guided
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[4/5] bg-gray-100">
              <img
                src={ProfileImg}
                alt="Counseling Session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-xl max-w-[240px]"
          >
            <p className="text-primary font-bold text-sm mb-2 italic">"A second chance for every relationship."</p>
            <p className="text-gray-500 text-xs">- Adv. Pareshkumar Vatvecha</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
