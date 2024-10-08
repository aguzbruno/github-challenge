'use client';
import './styles/globals.css';
import { useFetchUsers } from './hooks/useFetchUsers'; // Asegúrate de la ruta correcta
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import styles from './styles/Home.module.css';
import Spinner from './components/Spinner';

export default function Home() {
  const { users, loading, handleSearch } = useFetchUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
      {loading && <Spinner />}
    </div>
  );
}
