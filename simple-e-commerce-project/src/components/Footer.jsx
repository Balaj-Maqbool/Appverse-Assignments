import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="BNN's" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">BNN's</span>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center space-x-6">
            <a href="https://github.com/balaj-maqbool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/balaj-maqbool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://wa.me/923252624261" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <MessageSquare className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-center text-base text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} BNN's Fashion. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white mx-4 text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white mx-4 text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white mx-4 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;