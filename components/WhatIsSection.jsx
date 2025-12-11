'use client'

import { useEffect, useRef } from 'react'
import styles from './WhatIsSection.module.css'

export default function WhatIsSection() {
  const textSideRef = useRef(null)
  const visualSideRef = useRef(null)
  const highlightsRef = useRef(null)

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

    if (textSideRef.current) {
      observer.observe(textSideRef.current)
    }
    if (visualSideRef.current) {
      observer.observe(visualSideRef.current)
    }
    if (highlightsRef.current) {
      observer.observe(highlightsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.textSide} ref={textSideRef}>
            <h2 className={styles.title}>
              O que é a <span className={styles.highlight}>Fábrica de Traders</span>?
            </h2>
            
            <p className={styles.description}>
              A Fábrica de Traders é um ecossistema completo desenvolvido para 
              transformar traders iniciantes em profissionais de elite. Não é 
              apenas uma comunidade, é um sistema estruturado de evolução contínua 
              que combina educação prática, networking estratégico e suporte 
              especializado.
            </p>
            
            <p className={styles.description}>
              Nossa missão é criar um ambiente onde cada trader possa evoluir 
              em seu próprio ritmo, com acesso a estratégias testadas, análises 
              em tempo real e uma rede de profissionais comprometidos com o 
              crescimento mútuo.
            </p>
          </div>
          
          <div className={styles.visualSide} ref={visualSideRef}>
            <div className={styles.illustrationCard} ref={highlightsRef}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.highlightTitle}>Comunidade</h3>
                <p className={styles.highlightText}>
                  Conecte-se com traders de todos os níveis e compartilhe experiências
                </p>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.highlightTitle}>Evolução</h3>
                <p className={styles.highlightText}>
                  Sistema gamificado que acompanha seu progresso e recompensa conquistas
                </p>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className={styles.highlightTitle}>Estratégias</h3>
                <p className={styles.highlightText}>
                  Acesso a métodos comprovados e análises técnicas de alta qualidade
                </p>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M21 21V19C21 17.9391 20.5786 16.9217 19.8284 16.1716C19.0783 15.4214 18.0609 15 17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M7 7C7 4.79086 8.79086 3 11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M17 7C17 4.79086 15.2091 3 13 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h3 className={styles.highlightTitle}>Networking</h3>
                <p className={styles.highlightText}>
                  Construa relacionamentos estratégicos com profissionais do mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

