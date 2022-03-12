import styles from './styles.module.scss';

interface IProps {
  title: string;
  //   props: React.HTMLProps<HTMLButtonElement>;
}

export function Button({ title }: IProps) {
  return <button className={styles.button}>{title}</button>;
}
