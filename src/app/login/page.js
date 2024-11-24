"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignInAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faInstagram);

export default function LoginPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between">
      {/* Header with only the logo */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#1b1b1b]">
        <nav className="flex items-center space-x-6">
        <a href="/" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
            Accueil
          </a>
          <a href="/blackjack" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
            Blackjack
          </a>
          <a href="/hunt" className="text-[#F7971D] text-lg font-bold hover:text-yellow-400">
            Hunt
          </a>
        </nav>
        <div className="flex-grow flex justify-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Casino</span>
            <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">Hub</div>
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
    {/* Section Suivez-nous */}
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
            className="rounded-lg shadow-lg"
          />
        </a>
        <a href="https://www.instagram.com/LesZ_ours" className="text-[#F7971D] hover:text-white">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </a>
        <a href="https://x.com/LeszOurs" className="text-[#F7971D] hover:text-white">
          <FontAwesomeIcon icon={faTimes} className="text-3xl" /> {/* Icône X */}
        </a>
      </div>
    </div>

    {/* Section Légal */}
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Légal</h3>
      <div className="flex flex-col space-y-2">
        <a href="/condition" className="text-gray-400 hover:text-white">Conditions Générales</a>
        <a href="/confidentialite" className="text-gray-400 hover:text-white">Politique de Confidentialité</a>
      </div>
    </div>

    {/* Section Paramètres */}
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Paramètres</h3>
      <div className="flex flex-col space-y-2">
        <a href="/login" className="text-gray-400 hover:text-white">Paramètres du Profil</a>
        <a href="/login" className="text-gray-400 hover:text-white">Paramètres du Compte</a>
      </div>
    </div>
  </div>

  {/* Section Support */}
  <div className="mt-8">
    <h3 className="text-lg font-bold text-white mb-4">Support</h3>
    <p className="text-gray-400">
      Pour toute assistance, contactez-nous à :
      <a href="mailto:lesz_ours@outlook.fr" className="text-[#F7971D] hover:text-yellow-400 ml-1">
        lesz_ours@outlook.fr
      </a>
    </p>
  </div>

  {/* Texte de Responsabilité */}
  <div className="mt-8">
    <p className="text-[#FFFFFF] text-sm leading-6">
      CasinoHub n'est en aucun cas responsable des pertes dues au jeu ou à toute autre activité sur
      les casinos liés aux offres de bonus. Le joueur est responsable du montant qu'il peut jouer. Ne
      jouez pas de l'argent que vous ne pouvez pas vous permettre de perdre. Ne considérez pas le jeu
      comme un moyen de gagner de l'argent. Nous vous recommandons de ne pas jouer lorsque vous êtes
      de mauvaise humeur. Les joueurs sont tenus de vérifier les lois sur les jeux d'argent en
      vigueur dans leur pays ou leur juridiction avant de jouer de l'argent sur un site de jeux
      d'argent en ligne. Si vous avez besoin d'aide ou de soutien, visitez le site
      <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-white underline ml-1">
        www.begambleaware.org
      </a>
      ou appelez le
      <span className="text-white ml-1">0808 8020 133</span> (EN).
    </p>
  </div>

  {/* Droits réservés */}
  <div className="text-center text-gray-400 mt-8">
    &copy; 2024 CasinoHub. Tous droits réservés.
  </div>
</footer>
    </div>
  );
}
