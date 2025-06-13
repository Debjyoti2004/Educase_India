import React, { useState } from 'react';
import { Camera, Edit3, Settings, User, Mail, Building } from 'lucide-react';

export default function Account() {
    const [selectedImage, setSelectedImage] = useState(
        'https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw='
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden">
                <div className="bg-gradient-to-r from-violet-800 to-violet-900 px-8 py-6 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Settings className="w-5 h-5" />
                            <h2 className="text-xl font-bold">Account Settings</h2>
                        </div>
                        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200">
                            <Edit3 className="w-4 h-4 cursor-pointer" />
                        </button>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-start space-x-6 mb-8">
                        <div className="relative flex-shrink-0">
                            <label htmlFor="image-upload" className="cursor-pointer group">
                                <div className="relative">
                                    <img
                                        src={selectedImage}
                                        alt="Profile"
                                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover ring-2 ring-violet-200 group-hover:ring-violet-400 transition-all duration-200"
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-violet-800 hover:bg-violet-900 p-2 rounded-full shadow-lg transition-colors duration-200 group-hover:scale-110">
                                        <Camera className="text-white w-3 h-3" />
                                    </div>
                                </div>
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Marry Doe</h3>
                            <p className="text-sm text-gray-600 mb-3 flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-violet-600" />
                                Marry@Gmail.com
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                                <Building className="w-3 h-3 mr-1" />
                                <span>PopX Agency</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                                    <User className="w-4 h-4 mr-2 text-violet-600" />
                                    About
                                </h4>
                                <button className="text-violet-600 hover:text-violet-800 transition-colors duration-200">
                                    <Edit3 className="w-4 h-4 cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Experienced professional specializing in digital marketing and brand strategy. 
                                Passionate about creating meaningful connections and delivering exceptional results 
                                for clients across various industries.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h4>
                        
                        <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-violet-200 transition-colors duration-200">
                                    <User className="w-5 h-5 text-violet-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-gray-900">Edit Profile</p>
                                    <p className="text-xs text-gray-500">Update your personal information</p>
                                </div>
                            </div>
                            <Edit3 className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors duration-200 cursor-pointer" />
                        </button>

                        <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-violet-200 transition-colors duration-200">
                                    <Settings className="w-5 h-5 text-violet-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-gray-900">Privacy Settings</p>
                                    <p className="text-xs text-gray-500">Manage your privacy preferences</p>
                                </div>
                            </div>
                            <Edit3 className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors duration-200 cursor-pointer" />
                        </button>
                    </div>
                </div>

                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Member since June 2025</p>
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-gray-600 font-medium">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}