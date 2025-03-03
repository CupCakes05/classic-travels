import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section: Company Info */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">Classic travels</p>
            <p className="text-sm">© 2025 All Rights Reserved</p>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:text-blue-400">
              Home
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              About
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Services
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Contact
            </a>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 space-x-6">
            <a href="#" className="text-sm hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Instagram
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
