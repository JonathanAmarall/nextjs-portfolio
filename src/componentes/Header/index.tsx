import styles from '../Header/styles.module.scss';
import { FaToggleOff } from 'react-icons/fa';
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="J logo" />
        <nav>
          <a href="">Skills</a>
          <a href="">Contact</a>
          <a href="">Projects</a>
          <a href="">Blog</a>
        </nav>
        <div className={styles.toggleContainer}></div>
      </div>
    </header>
  );
}
