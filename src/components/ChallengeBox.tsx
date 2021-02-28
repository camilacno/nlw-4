import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src='icons/body.svg' />
            <strong>Novo Desafio</strong>
            <p>Descrição do Desafio</p>
          </main>

          <footer>
            <button type='button' className={styles.challengeFailedButton}>
              FALHEI
            </button>
            <button type='button' className={styles.challengeSucceededButton}>
              COMPLETEI
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Complete desafios e avance de Level!
          </p>
        </div>
      )}
    </div>
  );
}
