"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';


library.add(faYoutube, faInstagram);

export default function LoginPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      {/* Header with only the logo */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#1b1b1b]">
        {/* Left Section - Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button
            className="text-[#F7971D] text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/* Hamburger Icon */}
          </button>
          {isMenuOpen && (
            <nav className="absolute top-16 left-0 bg-[#1b1b1b] p-4 z-50 shadow-lg">
              <ul className="space-y-4 text-white">
                <li className="hover:text-yellow-400"><a href="/blackjack">Blackjack</a></li>
                <li className="hover:text-yellow-400"><a href="/hunt">Hunt</a></li>
              </ul>
            </nav>
          )}
        </div>

        {/* Center Section - Logo */}
        {/* Center Section - Logo */}
<div className="flex-grow flex justify-center">
  <a href="/" className="flex items-center space-x-2">
    <span className="text-white text-3xl font-bold">Casino</span>
    <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">
      Hub
    </div>
  </a>
</div>


        {/* Right Section - Profile Icons */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
          </a>
          <a href="/signup" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faSignInAlt} className="text-3xl" />
          </a>
        </div>
      </header>
      {/* Login Form */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Login with DLive</h1>

          {/* Disabled Button for DLive login */}
          <div className="text-center">
            <button
              className="w-full px-4 py-2 bg-gray-600 text-gray-300 font-bold rounded-md cursor-not-allowed"
              disabled
            >
              Login with DLive
            </button>
            <p className="text-gray-400 mt-2">À venir</p> {/* Message "À venir" */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1b1b1b] py-8 px-8 mt-12 relative">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Suivez-nous sur</h3>
      <div className="flex space-x-4">
        <a href="https://www.youtube.com/@LesZ_oursOff" className="text-[#F7971D] hover:text-white">
          <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
        </a>
        <a href="https://dlive.tv/LesZ_ours" className="hover:text-white">
          <Image 
            src="/dlive.png" 
            alt="DLive" 
            width={30}
      height={18}
      className="rounded-lg transform perspective-1000 rotate-6 shadow-lg"
    
          />
        </a>
        <a href="https://www.instagram.com/LesZ_ours" className="text-[#F7971D] hover:text-white">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Légal</h3>
      <div className="flex flex-col space-y-2">
        <a href="/condition" className="text-gray-400 hover:text-white">Conditions Générales</a>
        <a href="/confidentialite" className="text-gray-400 hover:text-white">Politique de Confidentialité</a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Paramètres</h3>
      <div className="flex flex-col space-y-2">
        <a href="/login" className="text-gray-400 hover:text-white">Paramètres du Profil</a>
        <a href="/login" className="text-gray-400 hover:text-white">Paramètres du Compte</a>
      </div>
    </div>
  </div>
  <div className="text-center text-gray-400 mt-8">
    &copy; 2024 CasinoHub. Tous droits réservés.
  </div>
</footer>
    </div>
  );
}
