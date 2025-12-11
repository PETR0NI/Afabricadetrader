'use client'

import { useEffect, useRef } from 'react'
import styles from './FinalCTA.module.css'

export default function FinalCTA({ isRegistered, onRegister }) {
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleBullexClick = () => {
    // Abre o link de cadastro da Bullex
    window.open('https://trade.bull-ex.com/register?aff=803915&aff_model=revenue&afftrack=', '_blank')
    
    // Atualiza o estado para desbloquear os outros botões
    onRegister()
    
    // Scroll suave para os botões desbloqueados
    setTimeout(() => {
      const buttonsSection = document.querySelector(`.${styles.buttonsContainer}`)
      if (buttonsSection) {
        buttonsSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 300)
  }

  const handleTelegramClick = () => {
    if (isRegistered) {
      window.open('https://t.me/+NsvLHcm0LJU5MjIx', '_blank')
    }
  }

  const handleWhatsAppClick = () => {
    if (isRegistered) {
      window.open('https://bull-ex.com/whatsapp', '_blank')
    }
  }

  return (
    <section 
      id="final-cta" 
      className={styles.section}
    >
      <div className={styles.blackHoleEffect}>
        <div className={styles.blackHole}></div>
        <div className={styles.accretionDisk}></div>
        <div className={styles.particles}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content} ref={contentRef}>
          <h2 className={styles.title}>
            Entre para a Fábrica de Traders agora
          </h2>
          
          <p className={styles.subtitle}>
            Primeiro cadastre-se na Bullex. Depois, acesse a comunidade.
          </p>
          
          <div className={styles.buttonsContainer}>
            <button
              className={`${styles.button} ${styles.buttonPrimary}`}
              onClick={handleBullexClick}
            >
              <span className={styles.buttonIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
              <span className={styles.buttonText}>
                Cadastro Bullex
              </span>
              <span className={styles.buttonGlow}></span>
            </button>
            
            <button
              className={`${styles.button} ${isRegistered ? styles.buttonActive : styles.buttonLocked}`}
              onClick={handleTelegramClick}
              disabled={!isRegistered}
            >
              <span className={styles.buttonIcon}>
                {isRegistered ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L9 13.5M21 5L9 13.5M9 13.5V19L13.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                )}
              </span>
              <span className={styles.buttonText}>
                Comunidade Telegram
              </span>
              {isRegistered && <span className={styles.buttonGlow}></span>}
            </button>
            
            <button
              className={`${styles.button} ${isRegistered ? styles.buttonActive : styles.buttonLocked}`}
              onClick={handleWhatsAppClick}
              disabled={!isRegistered}
            >
              <span className={styles.buttonIcon}>
                {isRegistered ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21L4.9 16.1C3.3 14.4 2.4 12.2 2.4 9.8C2.4 5.1 6.1 1.4 10.8 1.4C15.5 1.4 19.2 5.1 19.2 9.8C19.2 14.5 15.5 18.2 10.8 18.2C8.4 18.2 6.2 17.3 4.5 15.7L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M8 9.8C8 10.1 8.1 10.3 8.2 10.5C8.4 10.9 8.7 11.2 9.1 11.4C9.5 11.6 9.9 11.7 10.3 11.7C10.7 11.7 11.1 11.6 11.5 11.4C11.9 11.2 12.2 10.9 12.4 10.5C12.5 10.3 12.6 10.1 12.6 9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <path d="M13.4 9.8C13.4 10.1 13.5 10.3 13.6 10.5C13.8 10.9 14.1 11.2 14.5 11.4C14.9 11.6 15.3 11.7 15.7 11.7C16.1 11.7 16.5 11.6 16.9 11.4C17.3 11.2 17.6 10.9 17.8 10.5C17.9 10.3 18 10.1 18 9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                )}
              </span>
              <span className={styles.buttonText}>
                Comunidade WhatsApp
              </span>
              {isRegistered && <span className={styles.buttonGlow}></span>}
            </button>
          </div>
          
          {isRegistered && (
            <div className={styles.successMessage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={styles.successText}>
                Cadastro concluído! Agora você pode acessar as comunidades.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
