"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignInAlt, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faInstagram);

export default function Blackjack() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour toggler l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tableData = [
    ["", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A"],
    ["21", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["20", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["19", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["18", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["17", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["16", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
    ["15", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
    ["14", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
    ["13", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T"],
    ["12", "T", "T", "R", "R", "R", "T", "T", "T", "T", "T"],
    ["11", "D", "D", "D", "D", "D", "D", "D", "D", "T", "T"],
    ["10", "D", "D", "D", "D", "D", "D", "D", "D", "T", "T"],
    ["9", "T", "D", "D", "D", "D", "T", "T", "T", "T", "T"],
    ["8", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["7", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A"],
    ["6", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["5", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["4", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["3", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["2", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
    ["A/A", "S", "S", "S", "S", "S", "S", "S", "S", "S", "T"],
    ["10/10", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
    ["9/9", "S", "S", "S", "S", "S", "R", "S", "S", "R", "R"],
    ["8/8", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
    ["7/7", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T"],
    ["6/6", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T"],
    ["5/5", "D", "D", "D", "D", "D", "D", "D", "D", "T", "T"],
    ["4/4", "T", "T", "T", "P", "P", "T", "T", "T", "T", "T"],
    ["3/3", "P", "P", "P", "P", "P", "P", "T", "T", "T", "T"],
    ["2/2", "P", "P", "P", "P", "P", "P", "T", "T", "T", "T"],
  ];

  const firstHalf = tableData.slice(0, tableData.length / 1.9);
  const secondHalf = tableData.slice(tableData.length / 2);

  const getCellColor = (value) => {
    switch (value) {
      case "R":
        return "bg-red-600";
      case "T":
        return "bg-green-600";
      case "D":
        return "bg-blue-600";
      case "S":
        return "bg-pink-600";
      case "Ab":
        return "bg-gray-300 text-black";
      default:
        return "bg-gray-800";
    }
  };

  const renderTable = (data) => (
    <table className="border-collapse border border-gray-700 text-center text-white text-xs">
      <thead>
        <tr>
          {data[0].map((cell, index) => (
            <th
              key={index}
              className="border border-gray-700 px-2 py-1 bg-[#F7971D] text-black"
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`border border-gray-700 px-2 py-1 ${
                  cellIndex === 0 ? "bg-[#F7971D] text-black" : getCellColor(cell)
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
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

      <main className="px-8 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Stratégie de Blackjack</h2>
        <p className="text-gray-400 text-lg mb-8">
          Consultez notre tableau de stratégie pour maximiser vos chances de succès au Blackjack.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div>{renderTable(firstHalf)}</div>
          <div>{renderTable(secondHalf)}</div>
        </div>
      </main>




        {/* Legend */}
        {/* Legend */}
<div className="mt-8 flex justify-center">
  <div className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-md inline-block text-center">
    <h3 className="text-xl font-bold mb-4">Légende</h3>
    <p>
      <span className="inline-block w-6 h-6 bg-blue-600 rounded-full mr-2"></span> D = Double
    </p>
    <p>
      <span className="inline-block w-6 h-6 bg-pink-600 rounded-full mr-2"></span> S = Diviser
    </p>
    <p>
      <span className="inline-block w-6 h-6 bg-green-600 rounded-full mr-2"></span> T = Tirer
    </p>
    <p>
      <span className="inline-block w-6 h-6 bg-red-600 rounded-full mr-2"></span> R = Rester
    </p>
    <p>
      <span className="inline-block w-6 h-6 bg-gray-300 text-black rounded-full mr-2"></span> Ab = Abandonner
    </p>
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
