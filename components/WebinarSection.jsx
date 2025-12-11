'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './WebinarSection.module.css'

export default function WebinarSection() {
  const sectionRef = useRef(null)
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.glowEffect}></div>
          
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeText}>Acesso Gratuito</span>
            </div>
            
            <h2 className={styles.title}>
              Minicurso <span className={styles.highlight}>Start Trader</span>
            </h2>
            
            <p className={styles.description}>
              Preparamos uma série exclusiva de 5 vídeos essenciais para quem quer começar do jeito certo. Sem enrolação, direto ao ponto.
            </p>
            
            <p className={styles.description}>
              <strong>Lembrete:</strong> esse minicurso será exibido como um webinar dentro da Bullex. 
              Para ter acesso completo, você precisa criar sua conta na corretora e realizar um depósito 
              (qualquer valor) para poder operar na plataforma.
            </p>
            
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                5 Aulas em vídeo de alta qualidade
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Conceitos fundamentais e práticos
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Totalmente online e gratuito
              </div>
            </div>
            
            <Link href="/webinar" className={styles.ctaButton}>
              <span>Assistir Agora</span>
              <span className={styles.buttonIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>
          
          <div className={styles.visualContent}>
            <Link href="/webinar" className={styles.playCard}>
              <div className={styles.playButton}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



