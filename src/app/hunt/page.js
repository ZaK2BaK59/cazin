"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';


library.add(faYoutube, faInstagram);

export default function Hunt() {
  // State to hold all entries for the bonus hunt
  const [machines, setMachines] = useState([]);
  const [startAmount, setStartAmount] = useState(0); // Initial starting amount
  const [machineName, setMachineName] = useState('');
  const [provider, setProvider] = useState('');
  const [betAmount, setBetAmount] = useState(0);
  const [winAmount, setWinAmount] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null); // To track which machine's win is being edited
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Function to add a new machine (without the win amount)
  const addMachine = () => {
    setMachines([
      ...machines,
      { machineName, provider, betAmount, winAmount: null, multiplier: null },
    ]);
    // Reset form fields
    setMachineName('');
    setProvider('');
    setBetAmount(0);
  };

  // Function to update the win and calculate the multiplier for a specific machine
  const addWinAmount = (index) => {
    const updatedMachines = [...machines];
    updatedMachines[index].winAmount = winAmount;
    updatedMachines[index].multiplier = winAmount / updatedMachines[index].betAmount; // Calculate multiplier
    setMachines(updatedMachines);
    setEditingIndex(null); // Close the editing mode
    setWinAmount(0); // Reset win amount
  };

  // Total bets and bonuses
  const totalBets = machines.reduce((acc, machine) => acc + machine.betAmount, 0);
  const totalBonuses = machines.length;
  const totalGain = machines.reduce((acc, machine) => acc + (machine.winAmount || 0), 0);
  const netGain = totalGain - startAmount;
  const averageMultiplier = machines.reduce((acc, machine) => acc + (machine.multiplier || 0), 0) / totalBonuses || 0;
  const breakEvenMultiplier = totalBets ? startAmount / totalBets : 0;

  // Function to determine the color class based on the multiplier
  const getColorClass = (multiplier) => {
    if (multiplier >= 100) return 'bg-green-500';
    if (multiplier >= 51 && multiplier <= 99) return 'bg-orange-500';
    if (multiplier > 0 && multiplier < 51) return 'bg-red-500';
    return 'bg-gray-500'; // Default if multiplier is not set
  };

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

      {/* Main Content */}
      <main className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Bonus Hunt</h2>

        {/* Start Amount */}
        <div className="mb-6">
          <label className="block mb-2 text-xl">Montant de départ (ex. 20000€):</label>
          <input
            type="number"
            value={startAmount}
            onChange={(e) => setStartAmount(parseFloat(e.target.value))}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg w-full"
          />
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
                onChange={(e) => setBetAmount(parseFloat(e.target.value))}
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
                          onChange={(e) => setWinAmount(parseFloat(e.target.value))}
                          className="px-2 py-1 bg-gray-800 text-white rounded"
                        />
                      ) : (
                        <button onClick={() => setEditingIndex(index)} className="text-yellow-400">
                          Ajouter gain
                        </button>
                      )}
                      {editingIndex === index && (
                        <button onClick={() => addWinAmount(index)} className="ml-2 text-green-500">
                          Confirmer
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td className="px-4 py-2 text-right">
                  {machine.multiplier !== null ? machine.multiplier.toFixed(2) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
