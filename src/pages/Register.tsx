import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../layouts/AuthLayout';
import { User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const progressWidth = `${(step / totalSteps) * 100}%`;

  return (
    <AuthLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-outfit font-bold text-gray-900 mb-2">Create Your Account</h2>
          <p className="text-gray-500">Start your journey toward healthier relationships.</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm font-bold">
            <span className="text-primary">Step {step} of {totalSteps}</span>
            <span className="text-gray-400">
              {step === 1 && 'Personal Info'}
              {step === 2 && 'Address'}
              {step === 3 && 'Security'}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progressWidth }}
              className="h-full bg-[#329D9C]"
            />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Personal Information</label>
                  <div className="space-y-4 pt-2">
                    <div className="relative">
                      <input type="text" placeholder="Full Name" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                    </div>
                    <div className="relative">
                      <input type="email" placeholder="Email Address" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
                        <input type="tel" placeholder="Enter mobile number" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-xs font-bold text-gray-500 uppercase">Date of Birth</label>
                        <input type="date" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Gender</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all font-medium text-gray-600">
                          <User size={18} /> Male
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all font-medium text-gray-600">
                          <User size={18} /> Female
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-700">Address Details</label>
                  <input type="text" placeholder="Street Address" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                    <input type="text" placeholder="Pincode" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  </div>
                  <input type="text" placeholder="State" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-700">Account Security</label>
                  <input type="password" placeholder="Password" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                  <input type="password" placeholder="Confirm Password" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-all"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            )}
            <button
              type="button"
              onClick={step === totalSteps ? () => { } : nextStep}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#329D9C] text-white font-bold shadow-lg shadow-primary/20 hover:bg-[#287d7c] transition-all`}
            >
              {step === totalSteps ? 'Register' : 'Continue'}
              <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 font-medium">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
