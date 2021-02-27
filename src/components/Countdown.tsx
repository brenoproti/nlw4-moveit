import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Contdown.module.css'


export function Countdown() {
    const { minutes,
         seconds, 
         hasFinished, 
         isActive, 
         startCountdown, 
         resetCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.contdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled 
                className={styles.coutdownButton}>
                    Ciclo encerrado...
                </button>
            ) : (
                <>
                    { isActive ? (
                    <button onClick={resetCountdown} type="button" className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}>
                        Abandonar ciclo
                    </button>
                    ) : (
                    <button onClick={startCountdown} type="button" className={styles.coutdownButton}>
                        Iniciar um ciclo
                    </button>
                        )}
                </>
            )}

            
            
        </div>
    )
}