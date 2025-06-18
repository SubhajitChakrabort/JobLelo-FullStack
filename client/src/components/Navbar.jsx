import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState({ name: 'User' });
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const navLinks = ['home', 'about', 'contact'];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserData(response.data);
      } catch (error) {
        console.log('User not logged in');
      }
    };

    fetchUserData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const displayName = userData?.name?.split(' ')[0] || userData?.email?.split('@')[0] || 'User';
  const avatarUrl = `https://ui-avatars.com/api/?name=${displayName}&background=0D47A1&color=fff`;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-blue-900 to-blue-500 dark:from-gray-900 dark:to-gray-800 p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/job.jpg"
              alt="JobLelo Logo"
              className="w-8 h-8 md:w-8 md:h-8 object-contain"
            />
            <span className="text-white text-xl md:text-2xl font-bold">
              JobLelo
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border-2 border-white text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/${link === 'home' ? '' : link}`}
                  onClick={() => setActiveLink(link)}
                  className={`px-4 py-2 rounded-lg border-2 border-white
                    ${activeLink === link ? 'bg-white text-blue-900 dark:text-gray-900' : 'text-white hover:bg-white hover:text-blue-900 dark:hover:text-gray-900'}
                    transition-all duration-300`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </motion.div>
            ))}

            {/* User Profile */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </motion.div>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2"
                >
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => navigate('/login')}
                    className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border-2 border-white text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile User Profile */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </motion.div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-3 mt-4">
            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/${link === 'home' ? '' : link}`}
                  onClick={() => {
                    setActiveLink(link);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-lg border-2 border-white text-center
                    ${activeLink === link ? 'bg-white text-blue-900 dark:text-gray-900' : 'text-white hover:bg-white hover:text-blue-900 dark:hover:text-gray-900'}
                    transition-all duration-300`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Profile Options */}
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-lg py-2"
              >
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => navigate('/login')}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
