import React, { useState } from 'react';
import { sendFeedback } from '../services/api';

export const FeedbackForm = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await sendFeedback(title, message);
      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (error) {
      alert("Error!");
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#f0fdf4] border border-[#dcfce7] p-8 rounded-xl text-center mt-4">
        <h2 className="text-[#166534] font-bold text-xl mb-2">Thank you for your feedback!</h2>
        <p className="text-[#15803d]">Your message was saved with ID: <span className="font-bold">{responseId}</span></p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-left">Give Feedback</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-400 p-2 rounded-md w-full focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your message here..."
          className="border border-gray-400 p-2 rounded-md w-full h-40 resize-none focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="bg-[#2563eb] text-white p-3 rounded-md font-bold hover:bg-blue-700 transition mt-2 text-sm uppercase tracking-wide">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};