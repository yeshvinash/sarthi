import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AdvocateImg1 from '../assets/paresh-image.jpeg';
import AdvocateImg2 from '../assets/vaishali-image.jpeg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Guided by Visionaries</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sarthi is led by its founders who bring a unique blend of expertise and empathy
              to the mission of relationship healing.
            </p>

            <div className="space-y-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex-shrink-0 overflow-hidden">
                    <img src={AdvocateImg1} alt="Adv. Pareshkumar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Adv. Pareshkumar Vatvecha</h4>
                    <p className="text-primary text-sm font-semibold">Founder & Relationship Counselor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Brings a blend of legal insight, psychological understanding, and compassionate listening.
                  He is dedicated to offering relationships a second chance by fostering a confidential environment."
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex-shrink-0 overflow-hidden">
                    <img src={AdvocateImg2} alt="Vaishali Vatvecha" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Vaishali Vatvecha</h4>
                    <p className="text-primary text-sm font-semibold">Owner & Nurturing Leader</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Contributes warmth and vision. She focuses on creating a safe and compassionate space
                  for healing through understanding, ensuring guidance is delivered with expertise."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Founders Vision"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <Quote size={48} className="mb-4 opacity-50" />
                  <p className="text-2xl font-outfit font-medium">
                    "Our mission is to help couples cultivate stronger, more meaningful connections."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
