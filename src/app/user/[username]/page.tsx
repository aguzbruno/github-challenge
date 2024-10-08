"use client";
import { useParams } from "next/navigation";
import styles from "../../styles/UserDetails.module.css";
import { useFavorites } from "../../context/FavoritesContext";
import Spinner from "../../components/Spinner";
import { useFetchUserDetails } from "../../hooks/useFetchUserDetails";
import Link from "next/link";
import { RepoIcon, FollowerIcon } from '../../assets/icons'
import Image from "next/image";

export default function UserDetails() {
  const params = useParams<{ username: string }>();
  const username = params.username ? params.username : "";
  const { user, loading, error } = useFetchUserDetails(username);

  const { favorites, toggleFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  const isFavorite = favorites.includes(user ? user?.login : "");

  return user ? (
    <div
      className={`${styles.container} ${
        isFavorite && styles.containerFavorite
      }`}
    >
      <Link href="/" className={styles.closeButton}>
        X
      </Link>
      <Image
        src={user.avatar_url}
        alt={user.login}
        className={`${styles.avatar} ${isFavorite && styles.avatarFavorite}`}
        width={200}
        height={200}
      />
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{user.name || user.login}</h1>
          <button
            className={styles.favoriteButton}
            onClick={() => toggleFavorite(user.login)}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
        {user.bio && <p className={styles.bio}>{user.bio}</p>}
        <div className={styles.iconContainer}>
          <RepoIcon />
          <p>Repositories: {user.public_repos}</p>
        </div>
        <div className={styles.iconContainer}>
          <FollowerIcon />
          <p>{user.followers} followers </p>
          <p>·</p>
          <p>{user.following} following</p>
        </div>
        <button
          className={styles.followButton}
          onClick={() => window.open(`https://github.com/${username}`, '_blank')}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}
