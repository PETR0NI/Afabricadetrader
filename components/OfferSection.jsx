'use client'

import { useState, useEffect } from 'react'
import styles from './OfferSection.module.css'

const offerItems = [
  {
    title: "Curso OB do Zero ao Avançado",
    price: "R$ 3.997,90",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Lives Diárias com Eduardo Voltolini",
    price: "R$ 4.997,90",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Material de Estudo Exclusivo",
    price: "R$ 297,90",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Acesso à Comunidade VIP",
    price: "R$ 167,90",
    note: "/mês",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Data alvo: 24 de Dezembro de 2025 às 23:59:59
    const targetDate = new Date('2025-12-24T23:59:59').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const timer = setInterval(updateTimer, 1000)
    updateTimer() // Executa imediatamente

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          O que você vai receber na Fábrica de Traders
        </h2>

        <div className={styles.grid}>
          {offerItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardPrice}>
                  {item.price}
                  {item.note && <span>{item.note}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.totalSection}>
          <div className={styles.glowEffect}></div>
          <p className={styles.summaryTitle}>VALOR TOTAL DO PACOTE</p>
          <div className={styles.totalPrice}>R$ 9.461,60</div>
          <div className={styles.freePrice}>GRÁTIS</div>
          
          <div className={styles.scarcityBox}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <p className={styles.scarcityText}>
              Restam apenas <span className={styles.scarcityHighlight}>60 vagas</span> disponíveis
            </p>
            <p className={styles.deadline}>
              Oferta encerra em:
            </p>
            
            <div className={styles.timer}>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className={styles.timerLabel}>Dias</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className={styles.timerLabel}>Horas</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className={styles.timerLabel}>Min</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className={styles.timerLabel}>Seg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


