"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faYoutube, faInstagram);


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  // Function to toggle the popup and pass specific content
  const togglePopup = (casino) => {
    if (casino) {
      setPopupContent(casino);
    }
    setIsPopupOpen(!isPopupOpen);
  };

  const casinos = [
    {
      name: "Instant Casino",
      logo: "/instant.png",
      bonuses: [
        "60 tours gratuits sur le bandit",
        "Retrait instantané",
      ],
      description: "Déposez 50€ et vous aurez accès à 60 tours gratuits sur le bandit. Retrait instantané en moins d'une heure, sans aucune condition de mise. Profitez d'un support client 24/24 et de 10% de cashback chaque semaine.",
      paymentMethods: ["Cryptomonnaies", "Carte bancaire", "Virement bancaire"],
      color: "from-[#42445A] via-[#42445A] to-[#42445A]",
      url: "https://record.instantcasinoaffiliates.com/_vzUztB3jJhsd2bMnnkYwymNd7ZgqdRLk/1/", 
    },
    {
      name: "Kryptozino",
      logo: "/krypto.png", // Assure-toi que ce logo existe dans ton dossier public
      bonuses: [
        "100 % jusqu'à 1 000 $",
        "Retrait instantané",
      ],
      description: "Effectuez votre premier dépôt et réclamez un bonus de 100 % jusqu'à 1 000 $ avec un wager x30. Le dépôt minimum est de 20 $, et vous bénéficiez d'un retrait instantané. De plus, profitez de 60 tours gratuits sur le bandit, avec un support client 24/24 et un cashback de 10 % chaque semaine.",
      paymentMethods: ["Cryptomonnaies", "Carte bancaire", "Virement bancaire", "Apple Pay", "Google Pay", "Cashlib"],
      color: "from-[#3C347A] via-[#3C347A] to-[#3C347A]",
      url: "https://kryptosino555.com/?a_aid=LesZ_ours", 
    },
    {
      name: "CrazyBet",
      logo: "/crazy.png", // Assure-toi que le logo est disponible dans le dossier public
      bonuses: [
        "200 % WAGER x40",
        "Retrait instantané",
      ],
      description: `Le Bonus sur CrazyBet est un 200 % (Exemple : Je dépose 1000 €, le casino me rajoute 2000 € et je joue avec 3000 €).
                    \n\n⚠️ Pour activer le 200 %, tu dois être inscrit en cliquant ici.`,
      details: [
        "KYC Niveau 2 Obligatoire (CNI avec Selfie)",
        "Dépôt Mini : 50 € / Max : 2000 €",
        "Wager x40",
        "Achat de bonus INTERDIT",
        "Live Casino INTERDIT",
        "Max Bet : 10 €",
        "Bonus hunt autorisé mais attention à ne pas tomber en dessous de 1 €, sinon le bonus sera automatiquement annulé !",
        "VPN autorisé",
        "Liste de slots bannis pour ce wager",
        "Vous avez 7 jours pour compléter le wager une fois activé."
      ],
      paymentMethods: ["Cryptomonnaies", "Carte bancaire", "Virement bancaire"],
      color: "from-[#6A00FF] via-[#6A00FF] to-[#4E00FF]", // Dégradé personnalisé pour CrazyBet
      url: "https://crazybet.com/?modal=signUp&r=LesZ_ours" // Remplace avec l'URL correcte
    },
    {
      name: "FC Moon",
      logo: "/moon.png", // Assure-toi que le logo est bien dans ton dossier public
      bonuses: [
        "100 % jusqu'à 1000€",
        "Wager aléatoire x10 à x40",
      ],
      description: `Offre de bienvenue de 100 % avec un wager aléatoire qui peut aller de x10 jusqu'à x40, avec ou sans conditions. 
                    \n\nDépôt minimum de 20 €. Le bonus de bienvenue expire après 24 heures. Profitez du support client 24/24 et des dépôts et retraits instantanés en fiat ou en cryptomonnaies.`,
      details: [
        "VPN autorisé",
        "Bonus hunt autorisé",
        "Dépôt et retrait instantané en fiat ou en cryptomonnaies",
        "Support client 24/24",
        "Machine à sous et jeux en direct",
        "Le bonus de bienvenue expire après 24 heures",
        "Bien rentrer le code promotionnel « lesz_ours » après avoir cliqué sur le lien"
      ],
      paymentMethods: ["Cryptomonnaies", "Carte bancaire", "Virement bancaire"],
      color: "from-[#2E2C3C] via-[#2E2C3C] to-[#2E2C3C]", // Dégradé sombre personnalisé
      url: "https://bit.ly/4d0Wfmy" // URL à remplacer avec la bonne
    }    
    
  ];

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
                <li className="hover:text-yellow-400"><a href="/blackjack">Blackjack</a></li>
                <li className="hover:text-yellow-400"><a href="/hunt">Hunt</a></li>
                
              </ul>
            </nav>
          )}
        </div>

        {/* Center Section - Logo */}
        <div className="flex-grow flex justify-center">
          <div className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Casino</span>
            <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">
              Hub
            </div>
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

      {/* Main Content */}
      <main className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Offres Partenaires</h2>
        <p className="text-center text-gray-400 mb-12">
          Trouvez les meilleures offres exclusives de nos partenaires.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Casino Cards with radial gradients */}
          {casinos.slice(0, 2).map((casino, index) => (
            <div
              key={index}
              className={`lg:col-span-1 bg-gradient-to-br ${casino.color} p-6 rounded-lg shadow-md`}
            >
              <h3 className="text-xl font-bold text-white">{casino.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{casino.bonuses[0]}</p>
              <p className="mt-2 text-gray-200">{casino.bonuses[1]}</p>
              <div className="flex justify-between items-center mt-4">
                <button onClick={() => togglePopup(casino)} className="text-gray-200">En savoir plus</button>
                
                {/* Lien vers le casino pour "Réclamer" */}
                <a href={casino.url} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-[#F7971D] text-black rounded-lg">
                    Réclamer
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* One Casino and Two Emplacements libres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Third Casino (First Emplacement) */}
          <div
            className={`bg-gradient-to-br ${casinos[2].color} p-6 rounded-lg shadow-md hover: transition-all duration-300 ease-in-out`}
          >
            <h3 className="text-xl font-bold text-white">{casinos[2].name}</h3>
            <p className="mt-2 text-3xl font-bold text-white">{casinos[2].bonuses[0]}</p>
            <p className="mt-2 text-gray-200">{casinos[2].wager}</p>
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => togglePopup(casinos[2])} className="text-gray-200">En savoir plus</button>
              
              {/* Lien vers le casino pour "Réclamer" */}
              <a href={casinos[2].url} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-[#F7971D] text-black rounded-lg">
                  Réclamer
                </button>
              </a>
            </div>
          </div>
  {/* FC Moon (Second Emplacement) */}
  <div
    className={`bg-gradient-to-br ${casinos[3].color} p-6 rounded-lg shadow-md hover: transition-all duration-300 ease-in-out`}
  >
    <h3 className="text-xl font-bold text-white">{casinos[3].name}</h3>
    <p className="mt-2 text-3xl font-bold text-white">{casinos[3].bonuses[0]}</p>
    <p className="mt-2 text-gray-200">{casinos[3].bonuses[1]}</p>
    <div className="flex justify-between items-center mt-4">
      <button onClick={() => togglePopup(casinos[3])} className="text-gray-200">En savoir plus</button>
      
      {/* Lien vers le casino pour "Réclamer" */}
      <a href={casinos[3].url} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-[#F7971D] text-black rounded-lg">
          Réclamer
        </button>
      </a>
    </div>
  </div>
          {/* Two Emplacements libres */}
          <div className="bg-gray-500 p-6 rounded-lg flex items-center justify-center">
            <h3 className="text-xl font-bold text-gray-300">Emplacement libre</h3>
          </div>
        </div>
      </main>
            {/* Discord Section */}
            <section className="px-8 py-12 text-white mt-12 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-4">Rejoignez notre Discord !</h2>
          <p className="text-lg text-gray-400 mb-6">
            Giveaway quotidien avec de l'argent à gagner. Rejoignez notre communauté et ne ratez aucune opportunité !
          </p>
          <a href="https://discord.gg/D7ds3Fj7f3" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-[#F7971D] text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-colors">
              Rejoindre
            </button>
          </a>
        </div>
        {/* Discord Image with orange glow */}
        <div className="hidden md:block ml-8 relative">
        <Image
      src="/discord.png"
      alt="Discord"
      width={500}
      height={300}
      className="rounded-lg transform perspective-1000 rotate-6 shadow-lg"
    />
        </div>
      </section>

            {/* DLive Section */}
            <section className="px-8 py-12 text-white mt-12 flex items-center justify-between">
        {/* Stream Image with opposing perspective */}
        <div className="hidden md:block mr-8 relative">
          <Image
            src="/stream.png"
            alt="DLive Stream"
            width={500}
      height={300}
      className="rounded-lg transform perspective-1000 rotate-6 shadow-lg"
    />
        </div>
        
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-4">Suivez-moi en live sur DLive !</h2>
          <p className="text-lg text-gray-400 mb-6">
            En stream tous les jours ! Rejoignez le live pour ne rien manquer et participer à notre communauté.
          </p>
          <a href="https://dlive.tv/LesZ_ours" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-[#F7971D] text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-colors">
              Rejoindre
            </button>
          </a>
        </div>
      </section>



      {/* Footer */}
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



      {/* Pop-up */}
{isPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full relative text-center">
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        onClick={togglePopup}
      >
        <FontAwesomeIcon icon={faTimes} className="text-2xl" />
      </button>

      {/* Logo */}
      <Image
        src={popupContent.logo}
        alt={`${popupContent.name} Logo`}
        className="mx-auto mb-4"
        style={{ width: '200px', height: 'auto' }} // Largeur fixée, hauteur automatique
      />

      {/* Titre */}
      <h2 className="text-3xl font-bold text-white mb-4">{popupContent.name}</h2>

      {/* Description principale */}
      <p className="text-gray-300 mb-4 whitespace-pre-line">{popupContent.description}</p>

      {/* Liste des détails */}
      <ul className="text-gray-300 mb-4 text-left list-disc list-inside">
        {popupContent.details && popupContent.details.map((detail, index) => (
          <li key={index} className="mb-1">{detail}</li>
        ))}
      </ul>

      {/* Méthodes de paiement */}
      <h4 className="text-lg font-bold text-white mb-4">Méthodes de paiement</h4>
      <ul className="text-gray-300 mb-6 text-left">
        {popupContent.paymentMethods && popupContent.paymentMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>

      {/* Bouton Réclamer */}
      <a href={popupContent.url} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-[#F7971D] text-black rounded-lg w-full">
          Réclamer le bonus
        </button>
      </a>
    </div>
  </div>
)}

    </div>
  );
}
