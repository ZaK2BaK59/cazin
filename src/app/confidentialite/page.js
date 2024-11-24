"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';


library.add(faYoutube, faInstagram);

export default function Confidentialite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
      {/* Header */}
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
                <li className="hover:text-yellow-400">
                  <a href="/blackjack">Blackjack</a>
                </li>
                <li className="hover:text-yellow-400">
                  <a href="/hunt">Hunt</a>
                </li>
                <li className="hover:text-yellow-400">
                  <a href="/slots">Machines à sous</a>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Center Section - Logo */}
        <div className="flex-grow flex justify-center">
          <div className="flex items-center space-x-2">
            <a href="/">
              <span className="text-white text-3xl font-bold cursor-pointer">Casino</span>
              <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">
                Hub
              </div>
            </a>
          </div>
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

      {/* Main Content - Politique de Confidentialité */}
      <main className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Politique de Confidentialité
        </h1>

        <section className="bg-gray-900 p-6 rounded-lg shadow-lg text-gray-300">
          <p className="mb-4">
            Chez CasinoHub, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous recueillons, utilisons, et protégeons vos informations personnelles lorsque vous utilisez notre site web.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Collecte des informations</h2>
          <p>
            Nous collectons certaines informations personnelles lorsque vous vous inscrivez sur notre site, faites des achats ou interagissez avec nos services. Ces informations peuvent inclure votre nom, adresse e-mail, et informations de paiement.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">2. Utilisation des informations</h2>
          <p>
            Vos informations sont utilisées pour traiter vos commandes, personnaliser votre expérience et améliorer nos services. Nous ne partageons jamais vos données avec des tiers sans votre consentement, sauf si la loi l'exige.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">3. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, altération ou divulgation.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Vos droits</h2>
          <p>
            Vous avez le droit d'accéder, de modifier ou de supprimer vos informations personnelles en nous contactant à l'adresse suivante : support@casinohub.com.
          </p>
        </section>
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
