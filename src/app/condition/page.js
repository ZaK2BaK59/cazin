"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';


library.add(faYoutube, faInstagram);

export default function ConditionsUtilisation() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#1b1b1b]">
        <div className="flex-grow flex justify-center">
          <div className="flex items-center space-x-2">
            <span className="text-white text-3xl font-bold">Casino</span>
            <div className="bg-[#F7971D] text-black text-3xl font-bold px-2 rounded">
              Hub
            </div>
          </div>
        </div>
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
            className="w-8 h-8" // Ajustez la taille ici
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
