"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignInAlt, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faInstagram);

library.add(faYoutube, faInstagram);


export default function ConditionsUtilisation() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour toggler l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
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
      <main className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Conditions Générales d'Utilisation</h1>

        <div className="space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Les présentes conditions générales d'utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du site CasinoHub (ci-après « le Site »). 
              En utilisant le Site, vous acceptez les présentes CGU. Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser le Site immédiatement.
            </p>
          </section>

          {/* Utilisation du Site */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Utilisation du Site</h2>
            <p>
              Le Site est réservé aux utilisateurs âgés de 18 ans et plus. Vous devez vous conformer à toutes les lois locales, nationales et internationales applicables en matière de jeu en ligne.
            </p>
          </section>

          {/* Inscription et Compte Utilisateur */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Inscription et Compte Utilisateur</h2>
            <p>
              Pour accéder à certaines fonctionnalités du Site, vous devez créer un compte utilisateur. Vous êtes responsable de la confidentialité de votre mot de passe et des informations relatives à votre compte. Vous acceptez d'informer immédiatement le Site de toute utilisation non autorisée de votre compte.
            </p>
          </section>

          {/* Paiements et Transactions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Paiements et Transactions</h2>
            <p>
              Toutes les transactions financières effectuées sur le Site doivent être conformes à nos politiques de paiement et de retrait. Le Site se réserve le droit de bloquer tout compte utilisateur en cas de suspicion de fraude ou d'utilisation abusive des services.
            </p>
          </section>

          {/* Limitation de Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation de Responsabilité</h2>
            <p>
              Le Site décline toute responsabilité en cas de perte d'argent liée à l'utilisation des services de jeu en ligne. Vous reconnaissez que vous utilisez les services du Site à vos propres risques.
            </p>
          </section>

          {/* Modification des CGU */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Modification des CGU</h2>
            <p>
              Le Site se réserve le droit de modifier les présentes CGU à tout moment. Vous êtes invité à consulter régulièrement cette page afin de prendre connaissance des éventuelles modifications.
            </p>
          </section>

          {/* Résiliation du Compte */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Résiliation du Compte</h2>
            <p>
              Nous nous réservons le droit de suspendre ou de résilier votre compte à tout moment, notamment en cas de violation des présentes CGU ou de comportement inapproprié lors de l'utilisation du Site.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p>
              Si vous avez des questions concernant ces CGU, veuillez nous contacter à l'adresse e-mail suivante : support@casinohub.com.
            </p>
          </section>
        </div>
      </main>

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
