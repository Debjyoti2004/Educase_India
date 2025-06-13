import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      setEmailError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canLogin = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    console.log('Logging in with:', { email, password });
    navigate('/account')
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Sign in to your PopX account
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-violet-800">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                emailError 
                  ? 'border-red-500 focus:ring-red-300 bg-red-50' 
                  : 'border-gray-300 focus:ring-violet-500 focus:border-violet-500'
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>


          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-violet-800">
              Password*
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <button 
              type="button"
              className="text-sm text-violet-800 hover:text-violet-900 font-medium transition-colors duration-200 cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={!canLogin}
            className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 transform ${
              canLogin
                ? 'bg-violet-800 hover:bg-violet-900 text-white hover:scale-[1.02] shadow-lg hover:shadow-xl cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Sign In
          </button>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="text-violet-800 hover:text-violet-900 cursor-pointer font-semibold transition-colors duration-200"
            onClick={() => navigate('/createaccount')}
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}