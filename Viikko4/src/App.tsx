import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showBonus, setShowBonus] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Modaalin testaus</h1>

      <div className="flex gap-1">
        <button 
          onClick={() => setShowInfo(true)}
          className="bg-[#0a369d] text-gray-300 px-6 py-3 rounded-l-md font-semibold hover:brightness-110"
        >
          Näytä tiedot
        </button>

        <button 
          onClick={() => setShowBonus(true)}
          className="bg-[#004d1a] text-gray-300 px-6 py-3 rounded-r-md border-2 border-black font-semibold hover:brightness-110"
        >
          Näytä tiedot
        </button>
      </div>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <p>Tämä on ensimmäinen modaali!</p>
      </Modal>

      <Modal isOpen={showBonus} onClose={() => setShowBonus(false)}>
        <p>Tämä on toinen modaali!</p>
      </Modal>
    </div>
  );
}

export default App;