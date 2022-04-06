import styles from './styles.module.scss';

interface IProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: IProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
}
