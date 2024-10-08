import { useState, useEffect } from 'react';
import { getUserDetails } from '../api';
import { UserDetails as UserDetailsType } from '../types';

export function useFetchUserDetails(username: string) {
  const [user, setUser] = useState<UserDetailsType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return

    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const data = await getUserDetails(username);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError('Error fetching user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [username]);

  return { user, loading, error };
}
