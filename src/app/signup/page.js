"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import Image from 'next/image';


library.add(faYoutube, faInstagram);

export default function Signup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#1b1b1b]">
        <div className="flex items-center space-x-4">
          <button
            className="text-[#F7971D] text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
          {isMenuOpen && (
            <nav className="absolute top-16 left-0 bg-[#1b1b1b] p-4 z-50 shadow-lg">
              <ul className="space-y-4 text-white">
                <li className="hover:text-yellow-400"><a href="/blackjack">Blackjack</a></li>
                <li className="hover:text-yellow-400"><a href="/hunt">Hunt</a></li>
                <li className="hover:text-yellow-400"><a href="/slots">Machines à sous</a></li>
              </ul>
            </nav>
          )}
        </div>

        <div className="flex-grow flex justify-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Casino</span>
            <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">
              Hub
            </div>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/login" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
          </a>
          <a href="/signup" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faSignInAlt} className="text-3xl" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Inscription</h2>
        <p className="text-gray-400 text-lg">Cette section est en cours de développement. Revenez bientôt pour créer votre compte sur Casino Hub !</p>
      </main>

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
                  className="w-8 h-8"
                  style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(96%) saturate(731%) hue-rotate(358deg) brightness(95%) contrast(93%)' }}
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
