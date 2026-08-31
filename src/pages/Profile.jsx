import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Trash2, Camera } from 'lucide-react';
import Button from '../components/ui/Button';

const Profile = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight">
            My Profile
          </h1>
        </div>

        {/* User Header Section */}
        <div className="bg-white border-2 border-black rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative group">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 border-2 border-black rounded-full overflow-hidden flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
            <button className="absolute bottom-0 right-0 bg-black text-white p-2 border-2 border-black rounded-full hover:bg-gray-800 transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <Camera size={16} />
            </button>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="font-heading font-bold text-2xl uppercase mb-1">John Doe</h2>
            <p className="text-gray-600 font-medium mb-4 flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} />
              {email}
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-600 text-sm font-bold uppercase tracking-wider">
              Active Member
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Change Email Form */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black">
              <div className="bg-blue-100 p-2 rounded-xl border border-blue-600 text-blue-600">
                <Mail size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">Update Email</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">New Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter new email"
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] focus:shadow-none focus:translate-y-[4px] focus:translate-x-[4px] transition-all"
                />
              </div>
              <Button type="button" className="mt-2 py-3 rounded-xl w-full sm:w-auto">
                Save Changes
              </Button>
            </form>
          </div>

          {/* Change Password Form */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black">
              <div className="bg-orange-100 p-2 rounded-xl border border-orange-600 text-orange-600">
                <Lock size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">Change Password</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] focus:shadow-none focus:translate-y-[4px] focus:translate-x-[4px] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">New Password</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] focus:shadow-none focus:translate-y-[4px] focus:translate-x-[4px] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Confirm Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] focus:shadow-none focus:translate-y-[4px] focus:translate-x-[4px] transition-all"
                />
              </div>
              <Button type="button" className="mt-2 py-3 rounded-xl w-full sm:w-auto">
                Update Password
              </Button>
            </form>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-red-50 border-2 border-red-500 rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-red-100 p-2 rounded-xl text-red-600">
                  <Trash2 size={24} strokeWidth={2.5} />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase text-red-600">Delete Account</h3>
              </div>
              <p className="text-red-700 font-medium text-sm">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-bold uppercase tracking-wider rounded-xl border-2 border-red-700 hover:bg-red-600 shadow-[4px_4px_0px_0px_rgba(185,28,28,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
