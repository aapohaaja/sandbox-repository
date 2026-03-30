import React, { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const { movies, toggleWatched } = useMovieStore();
  const [filter, setFilter] = useState<'all' | 'watched' | 'unwatched'>('all');

  // Suodatuslogiikka
  const filteredMovies = movies.filter(m => {
    if (filter === 'watched') return m.watched;
    if (filter === 'unwatched') return !m.watched;
    return true;
  });

  return (
    <div style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #eee' }}>
      <h1>Movie library</h1>

      {/* Suodatuspainikkeet */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} style={btnStyle(filter === 'all')}>All movies</button>
        <button onClick={() => setFilter('watched')} style={btnStyle(filter === 'watched')}>Watched movies</button>
        <button onClick={() => setFilter('unwatched')} style={btnStyle(filter === 'unwatched')}>Kesken</button>
      </div>

      {/* Elokuvalista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredMovies.map(movie => (
          <div key={movie.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{movie.title}</span>
            <span>{movie.watched ? '✅ Watched' : '⏳ Unwatched'}</span>
            <button 
              onClick={() => toggleWatched(movie.id)}
              style={{ padding: '5px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              Change state
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Apufunktio tyylille
const btnStyle = (active: boolean) => ({
  padding: '8px 15px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: active ? '#f0f0f0' : '#fff',
  fontWeight: active ? 'bold' : 'normal',
  cursor: 'pointer',
  boxShadow: active ? 'inset 0 2px 4px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)'
});