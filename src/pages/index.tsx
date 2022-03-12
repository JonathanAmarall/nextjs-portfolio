import Head from 'next/head';
import { Button } from '../componentes/Button';
import { Header } from '../componentes/Header';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon</title>
      </Head>
      <Header />
      <div className={styles.authorContainer}>
        <div>
          <h1>Jonathan Amaral</h1>
          <h2>Web Developer</h2>
          <Button title={'About Me'} />
        </div>
      </div>
    </>
  );
}
