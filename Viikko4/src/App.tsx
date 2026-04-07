import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  // State for two different modal triggers
  const [showInfo, setShowInfo] = useState(false);
  const [showBonus, setShowBonus] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React Reusable Modal Task</h1>

      {/* Trigger Button 1 */}
      <button 
        onClick={() => setShowInfo(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Show Details
      </button>

      {/* Trigger Button 2 */}
      <button 
        onClick={() => setShowBonus(true)}
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-emerald-700 transition"
      >
        Surprise Me
      </button>

      {/* Modal 1: Basic Info */}
      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h2 className="text-xl font-semibold mb-2">Information</h2>
        <p className="text-gray-600">This is content injected inside the modal!</p>
      </Modal>

      {/* Modal 2: Bonus Content */}
      <Modal isOpen={showBonus} onClose={() => setShowBonus(false)}>
        <div className="text-center">
          <span className="text-4xl">🎉</span>
          <h2 className="text-xl font-bold mt-2">Dynamic Reuse!</h2>
          <p className="text-gray-500 mt-2">
            The same component logic, but totally different HTML content.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;