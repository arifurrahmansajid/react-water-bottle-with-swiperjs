import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">WaterBottle</h3>
            <p className="text-gray-200">
              Stay hydrated with our stylish, eco-friendly, and durable water bottles. Your perfect companion for a healthy, sustainable lifestyle.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-200">
              <li className="mb-2">
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; 2025 WaterBottle. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
