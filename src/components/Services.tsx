import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Emotional Healing',
    description: 'Addressing and resolving misunderstandings and emotional rifts to restore inner peace.',
    icon: Sparkles,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Conflict Resolution',
    description: 'Facilitating respectful and structured sessions to overcome challenges together.',
    icon: ShieldCheck,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Relationship Guidance',
    description: 'Providing ongoing support and expert advice across all stages of your relationship.',
    icon: Users,
    color: 'bg-amber-100 text-amber-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We believe that clarity, understanding, and professional guidance are beneficial 
            for all relationships, helping you overcome challenges and enhance your bonds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-background-light border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <motion.button 
                className="mt-6 text-primary font-bold flex items-center gap-2 group"
              >
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
