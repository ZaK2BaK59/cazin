"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignInAlt, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faInstagram);

export default function Signup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour toggler l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
      {/* Header */}
      <header className="bg-[#1b1b1b] text-white px-4 py-4 pb-0 shadow-md">
      <div className="flex items-center justify-between">
        {/* Menu burger (visible uniquement sur mobile) */}
        <button
          className="md:hidden text-[#F7971D] text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Logo centré sur tous les écrans */}
        <div className="flex-grow flex justify-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Casino</span>
            <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">Hub</div>
          </a>
        </div>

        {/* Icônes connexion (toujours visible à droite) */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
          </a>
          <a href="/signup" className="text-[#F7971D]">
            <FontAwesomeIcon icon={faSignInAlt} className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Menu de navigation (visible uniquement sur desktop ou quand le menu est ouvert sur mobile) */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex md:items-center md:space-x-6`}
      >
        {/* Mobile : affichage vertical */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          <a
            href="/"
            className="text-[#F7971D] text-lg font-bold hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="/hunt"
            className="text-[#F7971D] text-lg font-bold hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Hunt
          </a>
          <a
            href="/blackjack"
            className="text-[#F7971D] text-lg font-bold hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Blackjack
          </a>
        </div>

        {/* Desktop : affichage horizontal */}
        <div className="hidden md:flex items-center space-x-6 relative bottom-[2.0rem]">
  <a href="/" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
    Accueil
  </a>
  <a href="/hunt" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
    Hunt
  </a>
  <a href="/blackjack" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
    Blackjack
  </a>
</div>
      </nav>
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
