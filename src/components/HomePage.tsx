import Head from 'next/head';
import { FaGithub, FaGoogle, FaSignInAlt } from 'react-icons/fa';
import styles from '../styles/components/HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <div className={styles.content}>
        <img src='/login/logo.png' alt='Logo' />
        <p>
          Gerencie seu tempo combinando a técnica Pomodoro com desafios e
          conquistas divertidas que irão contribuir para o seu bem-estar.
        </p>
        <strong>Seja Bem-vindo!</strong>

        <div className={styles.title}>
          <FaGithub size={36} />
          <span>Faça login com sua conta no Github para iniciar.</span>
          <button type='submit'>
            <FaSignInAlt size={24} />
          </button>
        </div>

        <div className={styles.title}>
          <FaGoogle size={36} />
          <span>Faça login com sua conta do Google para iniciar.</span>
          <button type='submit'>
            <FaSignInAlt size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
