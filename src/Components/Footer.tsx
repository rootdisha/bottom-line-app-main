import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 font-[poppins]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Bottomline Technologies</h3>
          <p className="text-sm mb-4">
            Leading global IT services provider, transforming businesses through innovative and advanced technology solutions.
          </p>
          <p className="text-sm text-blue-400 font-semibold">
            'Choosing The Right Technology'
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/solutions/hci" className="hover:text-blue-400 transition">Hyper Converged Infrastructure</Link></li>
            <li><Link to="/solutions/networking" className="hover:text-blue-400 transition">Networking</Link></li>
            <li><Link to="/solutions/data-centre" className="hover:text-blue-400 transition">Data Centre</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/storage" className="hover:text-blue-400 transition">Data Storage</Link></li>
            <li><Link to="/services/server" className="hover:text-blue-400 transition">Server Infrastructure</Link></li>
            <li><Link to="/services/disaster-recovery" className="hover:text-blue-400 transition">Disaster Recovery</Link></li>
            <li><Link to="/services/virtualization" className="hover:text-blue-400 transition">Virtualization</Link></li>
            <li><Link to="/services/backup" className="hover:text-blue-400 transition">Backup & DR</Link></li>
            <li><Link to="/services/migration" className="hover:text-blue-400 transition">Migration</Link></li>
            <li><Link to="/services/mobility" className="hover:text-blue-400 transition">Mobility</Link></li>
            <li><Link to="/services/security" className="hover:text-blue-400 transition">Security</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
              <span>
                # 9/8, ICC, 'B' Sector<br />
                Anna Nagar West Extension<br />
                6th Street, Chennai - 600101<br />
                Tamil Nadu, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <a href="tel:+918525955567" className="hover:text-blue-400 transition">+91 85259 55567</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:info@bottomlinetechnologies.in" className="hover:text-blue-400 transition">info@bottomlinetechnologies.in</a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-400" />
              <a href="http://www.bottomlinetechnologies.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">bottomlinetechnologies.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-xl mb-6">
          <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Bottomline Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
