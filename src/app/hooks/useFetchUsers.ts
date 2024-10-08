import { useState, useEffect, useCallback } from 'react';
import { getUsers, searchUsers } from '../api';
import { User } from '../types';

export function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [since, setSince] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    if (!hasMore || loading) return; // No continuar si no hay más o ya está cargando
    setLoading(true);
    try {
      const data = await getUsers(since);
      setUsers((prevUsers) => [...prevUsers, ...data]);
      if (data.length === 0) {
        setHasMore(false); // Aca no hay más usuarios
      } else {
        setSince(data[data.length - 1].id);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  const handleSearch = async (term: string) => {
    setHasMore(true);
    setSince(0);
    setUsers([]); // Limpio usuarios en búsqueda

    if (term) {
      setLoading(true);
      try {
        const data = await searchUsers(term);
        setUsers(data.items);
      } catch (error) {
        console.error('Error searching users:', error);
      }
      setLoading(false);
    } else {
      fetchUsers(); // Carga usuarios iniciales si no hay búsqueda
    }
  };

  const handleScroll = useCallback(() => {
    // Chequeo si se llego al final del documento
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 10 // Usar -10 para un margen
    ) {
      fetchUsers(); // Llamar a la función de cargar más usuarios
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    users,
    loading,
    hasMore,
    handleSearch,
  };
}
