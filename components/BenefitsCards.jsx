'use client'

import { useEffect, useRef } from 'react'
import styles from './BenefitsCards.module.css'

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Comunidade Ativa',
    description: 'Participe de discussões diárias, compartilhe trades e aprenda com traders experientes em tempo real.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Conteúdos Focados em Resultado',
    description: 'Acesso a análises técnicas, estratégias testadas e estudos de caso reais que geram resultados práticos.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Suporte ao Trader',
    description: 'Receba ajuda quando precisar. Nossa comunidade está sempre pronta para apoiar sua jornada de evolução.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Sistema Organizado para Evolução',
    description: 'Acompanhe seu progresso através de um sistema gamificado que motiva e recompensa cada conquista.'
  }
]

export default function BenefitsCards() {
  const titleRef = useRef(null)
  const cardsRef = useRef([])

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

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title} ref={titleRef}>
          Por que escolher a <span className={styles.highlight}>Fábrica de Traders</span>?
        </h2>
        
        <div className={styles.cardsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardIcon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
