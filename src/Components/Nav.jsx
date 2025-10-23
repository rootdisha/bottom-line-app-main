import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 75 } },
};

const StickyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSub = (name) => setActiveSub(activeSub === name ? null : name);

  const isMobile = window.innerWidth < 768;

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow"
    >
      <div className="max-w-8xl mx-auto px-4 py-5 sm:px-6 lg:px-8  font-[poppins]">
        <div className="flex justify-between items-center ">
          <div className="text-xl font-bold text-blue-600">
            <img src={logo} className='w-55' alt="" />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 text-2xl">
              ☰
            </button>
          </div>

          <div className={`md:flex md:items-center md:space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleSub('services')}
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </button>

              <div
                className={`
                  absolute md:top-full mt-1 w-40 bg-white rounded-md shadow-md p-2 space-y-1
                  ${isMobile ? (activeSub === 'services' ? 'block' : 'hidden') : 'hidden group-hover:block'}
                `}
              >
                <Link to="/web" className="block text-sm text-gray-600 hover:text-blue-500">Web Design</Link>
                <Link to="/seo" className="block text-sm text-gray-600 hover:text-blue-500">SEO</Link>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleSub('about')}
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </button>

              <div
                className={`
                  absolute md:top-full mt-1 w-40 bg-white rounded-md shadow-md p-2 space-y-1
                  ${isMobile ? (activeSub === 'about' ? 'block' : 'hidden') : 'hidden group-hover:block'}
                `}
              >
                <Link to="/team" className="block text-sm text-gray-600 hover:text-blue-500">Team</Link>
                <Link to="/mission" className="block text-sm text-gray-600 hover:text-blue-500">Mission</Link>
              </div>
            </div>

            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavbar;
