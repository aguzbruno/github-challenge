'use client';
import { useFavoriteUsers } from '../hooks/useFavoriteUsers'; 
import Spinner from '../components/Spinner';
import UserList from '../components/UserList';
import styles from '../styles/Home.module.css';

export default function Favorites() {
  const { favoriteUsers, loading } = useFavoriteUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favorites</h1>
      {loading ? (
        <Spinner />
      ) : favoriteUsers.length === 0 ? (
        <p>There are no favorites yet</p>
      ) : (
        <UserList users={favoriteUsers} />
      )}
    </div>
  );
}
