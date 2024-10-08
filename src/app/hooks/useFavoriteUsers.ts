import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { getUserDetails } from '../api';
import { UserDetails } from '../types';

export const useFavoriteUsers = () => {
  const { favorites } = useFavorites();
  const [favoriteUsers, setFavoriteUsers] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavoriteUsers = async () => {
      setLoading(true);
      try {
        // Mapeamos a los nombres de usuario para obtener detalles
        const userPromises = favorites.map((username) => getUserDetails(username));
        const users = await Promise.all(userPromises);
        setFavoriteUsers(users);
      } catch (error) {
        console.error('Error fetching favorite users:', error);
      } finally {
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchFavoriteUsers();
    } else {
      setFavoriteUsers([]); // Reinico si no hay favoritos
      setLoading(false); // Detengo la carga si no hay favoritos
    }
  }, [favorites]);

  return { favoriteUsers, loading };
};
