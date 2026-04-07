import React from 'react';

// Defining the interface for our props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // 1. Guard clause: If not open, render nothing
  if (!isOpen) return null;

  return (
    // 2. Backdrop: Covers the full screen
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* 3. Modal Box: White container */}
      <div 
        className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        <div className="mb-6">
          {children}
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;