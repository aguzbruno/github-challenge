'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (username: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Carga los favoritos del localStorage al inicializar el estado
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return []; // Si no hay localStorage, retorna un array vacío
  });

  const toggleFavorite = (username: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(username)
        ? prevFavorites.filter((fav) => fav !== username)
        : [...prevFavorites, username];

      // Guarda la lista actualizada de favoritos en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextType {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
