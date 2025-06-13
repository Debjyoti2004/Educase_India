import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const [form, setForm] = useState({
    fullName: 'Marry Doe',
    phone: '(123) 456-7890',
    email: 'Marry@Gmail.com',
    password: '12345678',
    company: 'PopX',
    agency: 'yes'
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (!form.agency) {
      newErrors.agency = 'Please select if you are an agency';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      console.log('Form submitted:', form);
      navigate('/account')
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Create your PopX account
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Join our professional community and unlock exclusive features tailored for your business needs.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-semibold text-violet-800">
              Full Name*
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.fullName 
                  ? 'border-red-500 focus:ring-red-300 bg-red-50' 
                  : 'border-gray-300 focus:ring-violet-500 focus:border-violet-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-violet-800">
              Phone Number*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.phone 
                  ? 'border-red-500 focus:ring-red-300 bg-red-50' 
                  : 'border-gray-300 focus:ring-violet-500 focus:border-violet-500'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-violet-800">
              Email Address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-300 bg-red-50' 
                  : 'border-gray-300 focus:ring-violet-500 focus:border-violet-500'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-violet-800">
              Password*
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.password 
                  ? 'border-red-500 focus:ring-red-300 bg-red-50' 
                  : 'border-gray-300 focus:ring-violet-500 focus:border-violet-500'
              }`}
              placeholder="Create a secure password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-semibold text-violet-800">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200"
              placeholder="Enter your company name (optional)"
            />
          </div>

          {/* Agency Question */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900">
              Are you an Agency?*
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-violet-800 border-gray-300 focus:ring-violet-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700 font-medium">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-violet-800 border-gray-300 focus:ring-violet-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700 font-medium">No</span>
              </label>
            </div>
            {errors.agency && (
              <p className="text-red-500 text-sm mt-1">{errors.agency}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-violet-800 hover:bg-violet-900 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-violet-800 hover:text-violet-900 font-semibold transition-colors duration-200 cursor-pointer cursor-pointer"
            onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </p>
          <p className="text-xs text-gray-500 mt-3">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}