"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignInAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faInstagram);

export default function Hunt() {
  const [machines, setMachines] = useState([]);
  const [startAmount, setStartAmount] = useState(''); // Input pour la somme
  const [validatedStartAmount, setValidatedStartAmount] = useState(null); // Somme validée
  const [machineName, setMachineName] = useState('');
  const [provider, setProvider] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [winAmount, setWinAmount] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Ajouter une machine
  const addMachine = () => {
    if (!machineName || !provider || !betAmount) return;
    setMachines([
      ...machines,
      { machineName, provider, betAmount: parseFloat(betAmount), winAmount: null, multiplier: null },
    ]);
    setMachineName('');
    setProvider('');
    setBetAmount('');
  };

  // Ajouter le gain pour une machine
  const addWinAmount = (index) => {
    const updatedMachines = [...machines];
    updatedMachines[index].winAmount = parseFloat(winAmount);
    updatedMachines[index].multiplier = parseFloat(winAmount) / updatedMachines[index].betAmount;
    setMachines(updatedMachines);
    setEditingIndex(null);
    setWinAmount('');
  };

  // Supprimer une machine
  const removeMachine = (index) => {
    setMachines(machines.filter((_, i) => i !== index));
  };

  // Vider le tableau des machines
  const clearMachines = () => {
    setMachines([]);
  };

  // Valider la somme de départ
  const validateStartAmount = () => {
    if (!startAmount) return;
    setValidatedStartAmount(parseFloat(startAmount));
    setStartAmount('');
  };

  // Réinitialiser la somme de départ
  const resetStartAmount = () => {
    setValidatedStartAmount(null);
  };

  const totalBets = machines.reduce((acc, machine) => acc + machine.betAmount, 0);
  const totalBonuses = machines.length;
  const totalGain = machines.reduce((acc, machine) => acc + (machine.winAmount || 0), 0);
  const netGain = totalGain - (validatedStartAmount || 0);
  const averageMultiplier =
    machines.reduce((acc, machine) => acc + (machine.multiplier || 0), 0) / totalBonuses || 0;
  const breakEvenMultiplier = totalBets ? (validatedStartAmount || 0) / totalBets : 0;

  const getColorClass = (multiplier) => {
    if (multiplier >= 100) return 'bg-green-500';
    if (multiplier >= 51 && multiplier <= 99) return 'bg-orange-500';
    if (multiplier > 0 && multiplier < 51) return 'bg-red-500';
    return 'bg-gray-500';
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
      {/* Header */}
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

      {/* Main Content */}
      <main className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Bonus Hunt</h2>

        {/* Start Amount */}
        <div className="mb-6">
          <label className="block mb-2 text-xl">Montant de départ :</label>
          {validatedStartAmount === null ? (
            <>
              <input
                type="number"
                value={startAmount}
                onChange={(e) => setStartAmount(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg w-full"
              />
              <button
                onClick={validateStartAmount}
                className="mt-4 px-4 py-2 bg-[#F7971D] text-black rounded-lg"
              >
                Valider
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{validatedStartAmount} €</span>
              <button
                onClick={resetStartAmount}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>

        {/* Form to add a machine */}
        <div className="mb-6">
          <h3 className="text-2xl mb-4">Ajouter une machine</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Nom de la machine :</label>
              <input
                type="text"
                value={machineName}
                onChange={(e) => setMachineName(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Provider :</label>
              <input
                type="text"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Mise (€):</label>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg w-full"
              />
            </div>
          </div>
          <button
            onClick={addMachine}
            className="mt-4 px-4 py-2 bg-[#F7971D] text-black rounded-lg"
          >
            Ajouter
          </button>
        </div>

        {/* Bonus Hunt Table */}
        <h3 className="text-3xl font-bold mb-4">Tableau des Machines</h3>
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="text-left px-4 py-2">Machine</th>
              <th className="text-left px-4 py-2">Provider</th>
              <th className="text-right px-4 py-2">Mise (€)</th>
              <th className="text-right px-4 py-2">Gain (€)</th>
              <th className="text-right px-4 py-2">Multiplicateur</th>
              <th className="text-center px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine, index) => (
              <tr key={index} className="bg-gray-700 border-b border-gray-600">
                <td className="px-4 py-2">{machine.machineName}</td>
                <td className="px-4 py-2">{machine.provider}</td>
                <td className="px-4 py-2 text-right">{machine.betAmount.toFixed(2)}</td>
                <td className={`px-4 py-2 text-right ${getColorClass(machine.multiplier)}`}>
                  {machine.winAmount !== null ? (
                    machine.winAmount.toFixed(2)
                  ) : (
                    <>
                      {editingIndex === index ? (
                        <input
                          type="number"
                          value={winAmount}
                          onChange={(e) => setWinAmount(e.target.value)}
                          className="px-2 py-1 bg-gray-800 text-white rounded"
                        />
                      ) : (
                        <button
                          onClick={() => setEditingIndex(index)}
                          className="text-yellow-400"
                        >
                          Ajouter gain
                        </button>
                      )}
                      {editingIndex === index && (
                        <button
                          onClick={() => addWinAmount(index)}
                          className="ml-2 text-green-500"
                        >
                          Confirmer
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td className="px-4 py-2 text-right">
  {machine.multiplier !== null ? machine.multiplier.toFixed(2) : 'N/A'}
</td>
<td className="px-4 py-2 text-center">
  <button
    onClick={() => removeMachine(index)}
    className="px-2 py-1 bg-red-500 text-white rounded-lg"
  >
    Supprimer
  </button>
</td>
</tr>
))}
</tbody>
</table>

{/* Bouton pour vider le tableau */}
<div className="flex justify-end mt-4">
  <button
    onClick={clearMachines}
    className="px-4 py-2 bg-red-500 text-white rounded-lg"
  >
    Vider le tableau
  </button>
</div>

{/* Bonus Hunt Stats */}
<div className="grid grid-cols-2 gap-4 mt-8">
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Total des machines ouvertes</h4>
    <p className="text-2xl">{totalBonuses}</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Total des mises</h4>
    <p className="text-2xl">{totalBets.toFixed(2)} €</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Gain brut</h4>
    <p className="text-2xl">{totalGain.toFixed(2)} €</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Gain net</h4>
    <p className="text-2xl">{netGain.toFixed(2)} €</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Multiplicateur moyen</h4>
    <p className="text-2xl">{averageMultiplier.toFixed(2)}</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg">
    <h4 className="text-xl font-bold">Break-even (multiplicateur)</h4>
    <p className="text-2xl">{breakEvenMultiplier.toFixed(2)}</p>
  </div>
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

