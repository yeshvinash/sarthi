import AuthLayout from '../layouts/AuthLayout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <AuthLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-outfit font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500">Log in to continue your journey with Sarthi.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary transition-all bg-gray-50/50"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="remember" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
            <label htmlFor="remember" className="text-sm font-medium text-gray-600">Remember me for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#329D9C] text-white font-bold shadow-lg shadow-primary/20 hover:bg-[#287d7c] transition-all"
          >
            Log In
            <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-center text-gray-500 font-medium">
          Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
