import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does Sarthi help couples overcome challenges?",
    answer: "Sarthi provides a safe, confidential environment where couples can address misunderstandings through guided communication and professional counseling, focusing on growth rather than separation."
  },
  {
    question: "What kind of emotional support does Sarthi provide?",
    answer: "We offer compassionate listening and psychological insights to help individuals heal from emotional rifts, providing a nurturing space for understanding and vulnerability."
  },
  {
    question: "How can Sarthi guide couples to foster stronger connections?",
    answer: "Through personalized relationship guidance, we help couples identify their strengths and work on areas of growth, implementing practical tools to deepen their bond and mutual respect."
  },
  {
    question: "What are the specific techniques Sarthi uses for conflict resolution?",
    answer: "We utilize structured sessions that blend legal insight with psychological understanding, facilitating respectful dialogues that focus on finding sustainable solutions and rebuilding trust."
  },
  {
    question: "Can Sarthi help with existing emotional gaps in a relationship?",
    answer: "Yes, our Emotional Healing service specifically addresses existing rifts. We help identify the root causes of distance and provide guidance on how to bridge those gaps through empathy and clear communication."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider mb-4"
          >
            <HelpCircle size={16} />
            Common Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-xl ring-1 ring-primary/5' : 'bg-white/50 hover:bg-white'
                }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className={`text-lg font-bold font-outfit ${activeIndex === index ? 'text-primary' : 'text-charcoal'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
