import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, MessageSquare, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Users } from 'lucide-react';

const services = [
  { id: 'emotional', name: 'Emotional Healing', icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-100' },
  { id: 'conflict', name: 'Conflict Resolution', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 'guidance', name: 'Relationship Guidance', icon: Users, color: 'text-amber-600', bg: 'bg-amber-100' },
];

const timeSlots = [
  "09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"
];

const BookSlot = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const isStep1Complete = selectedService !== '';
  const isStep2Complete = selectedDate !== '' && selectedTime !== '';
  const isStep3Complete = formData.name !== '' && formData.phone !== '';

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen bg-background-light font-inter">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Book a Session</h1>
            <p className="text-gray-500 text-lg">Take a meaningful step towards relationship harmony.</p>
          </div>

          {/* Stepper */}
          <div className="mb-12 px-4">
            <div className="relative flex justify-between">
              {/* Background Line */}
              <div className="absolute top-5  left-0 right-0 h-1.5 bg-gray-100 -z-10 rounded-full" />
              {/* Active Progress Line */}
              <motion.div
                className="absolute top-5 left-5 h-1.5 bg-primary -z-10 rounded-full shadow-[0_0_10px_rgba(30,58,138,0.3)]"
                initial={{ width: '0%' }}
                animate={{ width: `${((step - 1) / 2) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {[1, 2, 3].map((i) => {
                const isCompleted = step > i;
                const isActive = step === i;

                return (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        backgroundColor: isCompleted || isActive ? '#1e3a8a' : '#ffffff',
                        borderColor: isCompleted || isActive ? '#1e3a8a' : '#e5e7eb',
                        color: isCompleted || isActive ? '#ffffff' : '#9ca3af',
                      }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-shadow duration-300 ${isActive ? 'shadow-xl shadow-primary/30 ring-4 ring-primary/10' : ''
                        }`}
                    >
                      {isCompleted ? <CheckCircle2 size={20} /> : i}
                    </motion.div>
                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-primary' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                      {i === 1 && 'Service'}
                      {i === 2 && 'Schedule'}
                      {i === 3 && 'Details'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                    Select a Service
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-4 group ${selectedService === service.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-gray-100 hover:border-primary/30 hover:bg-gray-50'
                          }`}
                      >
                        <div className={`w-12 h-12 rounded-xl ${service.bg} ${service.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                          <service.icon size={24} />
                        </div>
                        <span className={`font-bold text-lg ${selectedService === service.id ? 'text-primary' : 'text-gray-700'}`}>
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-12 flex justify-end">
                    <button
                      disabled={!isStep1Complete}
                      onClick={handleNext}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-10"
                    >
                      Continue to Schedule
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                    Pick a Date & Time
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                        <Calendar size={16} /> Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-lg font-medium"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                        <Clock size={16} /> Available Slots
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-xl border font-bold transition-all ${selectedTime === time
                              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                              : 'border-gray-100 hover:border-primary/50 text-gray-600'
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex justify-between">
                    <button onClick={handleBack} className="btn-secondary px-8">Back</button>
                    <button
                      disabled={!isStep2Complete}
                      onClick={handleNext}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-10"
                    >
                      Enter Your Details
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                    Final Details
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                          <User size={16} /> Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Clock size={16} /> Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <MessageSquare size={16} /> Note for the Counselor (Optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe what you'd like to discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                      />
                    </div>
                  </div>
                  <div className="mt-12 flex justify-between">
                    <button onClick={handleBack} className="btn-secondary px-8">Back</button>
                    <button
                      disabled={!isStep3Complete}
                      onClick={() => setStep(4)}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-10"
                    >
                      Confirm Booking
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={64} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Slot Booked Successfully!</h3>
                  <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                    We've received your booking. Our team will contact you shortly at <span className="font-bold text-charcoal">{formData.phone}</span> to confirm your session.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 text-left max-w-sm mx-auto mb-10">
                    <p className="text-sm text-gray-500 mb-2 uppercase font-bold tracking-wider">Booking Details</p>
                    <p className="font-bold text-lg mb-1">{services.find(s => s.id === selectedService)?.name}</p>
                    <p className="text-gray-600">{selectedDate} at {selectedTime}</p>
                  </div>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="btn-primary mx-auto"
                  >
                    Return to Home
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookSlot;
