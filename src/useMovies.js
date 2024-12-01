import { useState, useEffect } from 'react';

const API_KEY = '2bfc8721';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(`${API_URL}s=${query}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error('Something went wrong');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movie not found');

        setMovies(data.Search);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 2) {
      setMovies([]);
      setError('');
      return;
    }
    handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);
}
