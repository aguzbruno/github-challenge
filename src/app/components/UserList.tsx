import Link from 'next/link';
import UserCard from './UserCard';
import styles from '../styles/UserList.module.css';
import { User } from '../types';

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <Link href={`/user/${user.login}`} key={user.id}>
          <UserCard user={user} />
        </Link>
      ))}
    </div>
  );
}