import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 75 } },
}

type SubmenuName = 'solutions' | 'services' | 'about'

const StickyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSub, setActiveSub] = useState<SubmenuName | null>(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleSub = (name: SubmenuName) => setActiveSub(activeSub === name ? null : name)

  const isMobile = window.innerWidth < 768

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

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleSub('solutions')}
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
              >
                Solutions
              </button>

              <div
                className={`
                  absolute md:top-full md:pt-2 w-56
                  ${isMobile ? (activeSub === 'solutions' ? 'block' : 'hidden') : 'hidden group-hover:block'}
                `}
              >
                <div className="bg-white rounded-md shadow-md p-2 space-y-1">
                  <Link to="/solutions/hci" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Hyper Converged Infrastructure</Link>
                  <Link to="/solutions/networking" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Networking</Link>
                  <Link to="/solutions/data-centre" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Data Centre</Link>
                </div>
              </div>
            </div>

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
                  absolute md:top-full md:pt-2 w-48
                  ${isMobile ? (activeSub === 'services' ? 'block' : 'hidden') : 'hidden group-hover:block'}
                `}
              >
                <div className="bg-white rounded-md shadow-md p-2 space-y-1">
                  <Link to="/services/storage" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Data Storage</Link>
                  <Link to="/services/server" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Server Infrastructure</Link>
                  <Link to="/services/disaster-recovery" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Disaster Recovery</Link>
                  <Link to="/services/virtualization" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Virtualization</Link>
                  <Link to="/services/backup" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Backup & DR</Link>
                  <Link to="/services/migration" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Migration</Link>
                  <Link to="/services/mobility" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Mobility</Link>
                  <Link to="/services/security" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Security</Link>
                </div>
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
                  absolute md:top-full md:pt-2 w-40
                  ${isMobile ? (activeSub === 'about' ? 'block' : 'hidden') : 'hidden group-hover:block'}
                `}
              >
                <div className="bg-white rounded-md shadow-md p-2 space-y-1">
                  <Link to="/about" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">About Us</Link>
                  <Link to="/about#team" className="block text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-2 py-1 rounded">Our Team</Link>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-blue-600">Portfolio</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default StickyNavbar
