import Image from 'next/image';
import { useFavorites } from '../context/FavoritesContext';
import styles from '../styles/UserCard.module.css';
import { User } from '../types';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(user.login);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(user.login);
  };

  return (
    <div className={`${styles.card} ${ isFavorite && styles.cardFavorite}`}>
      <Image src={user.avatar_url} alt={user.login} className={styles.avatar} width={100} height={100}/>
      <h2>{user.login}</h2>
      <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
}
