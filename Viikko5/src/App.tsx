import React, { useState } from 'react';
import { FeedbackForm } from './components/FeedbackForm';
import { loginUser } from './services/api';

export default function App() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      setToken(data.accessToken);
      setIsLoggedIn(true);
    } catch (err: any) {
      setError("Wrong credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {isLoggedIn ? (
        <div className="max-w-2xl mx-auto space-y-8">
          
          <div className="bg-[#18181b] p-4 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <span className="text-[#22c55e] font-bold flex items-center">
                ✓ Logged In
              </span>
              <div className="bg-white p-2 rounded text-[10px] text-gray-500 w-32 truncate">
                Your token:<br/>{token}
              </div>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="bg-[#ef4444] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <FeedbackForm />
        </div>
      ) : (
        
        <div className="max-w-sm mx-auto bg-white p-10 rounded-2xl shadow-sm border border-gray-200 mt-20">
          <h2 className="text-2xl font-bold text-center mb-1">Login</h2>
          <p className="text-sm text-gray-400 text-center mb-8">Log in to access the feedback form.</p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="border border-gray-400 p-3 rounded-lg w-full"
            />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border border-gray-400 p-3 rounded-lg w-full"
            />
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            <button type="submit" className="bg-[#2563eb] text-white p-3 rounded-lg font-bold text-lg mt-2">
              Log In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}