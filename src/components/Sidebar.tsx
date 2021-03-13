import Link from 'next/link';
import { FaHome, FaSignOutAlt, FaUserCircle, FaAward } from 'react-icons/fa';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src='/sidebar/logo.png' alt='logo' />
      <div className={styles.buttons}>
        <button type='button'>
          <div></div>
          <FaHome size={32} />
        </button>
        <button type='button' disabled>
          <div></div>
          <FaUserCircle size={32} />
        </button>
        <button type='button' disabled>
          <div></div>
          <FaAward size={32} />
        </button>
      </div>
      <div className={styles.logout}>
        <Link href='/'>
          <FaSignOutAlt size={28} />
        </Link>
      </div>
    </div>
  );
}
