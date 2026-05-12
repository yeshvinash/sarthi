import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Let's Talk</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Take the first step towards a happier, healthier relationship.
              We are here to listen and guide you through your journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 text-break">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-600">32, Sundarvan Shopping Centre, Mafatlaal Mill Road, near Railway Station, Navsari, Gujarat.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-break">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a href='tel:+919898537396' className="text-gray-600 hover:underline">+91 98985 37396</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-break">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:sambandhonasangharshnosarthi@gmail.com" className="text-gray-600 hover:underline">sambandhonasangharshnosarthi@gmail.com</a>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/919898537396"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="mt-10 inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-200 hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={24} />
              Connect on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background-light p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                  <option>Emotional Healing</option>
                  <option>Conflict Resolution</option>
                  <option>Relationship Guidance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about your situation..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-4 text-lg group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
