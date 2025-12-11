'use client'

import { useEffect, useRef } from 'react'
import styles from './GamifiedSteps.module.css'

export default function GamifiedSteps({ isRegistered }) {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Cadastrar na Bullex',
      description: 'Crie sua conta na corretora e comece sua jornada',
      icon: '✅',
      active: true
    },
    {
      number: 2,
      title: 'Acessar Telegram',
      description: 'Entre na comunidade exclusiva do Telegram',
      icon: '💬',
      active: isRegistered
    },
    {
      number: 3,
      title: 'Acessar WhatsApp',
      description: 'Participe do grupo VIP do WhatsApp',
      icon: '📱',
      active: isRegistered
    }
  ]

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          Seu caminho para a <span className={styles.highlight}>evolução</span>
        </h2>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.step} ${step.active ? styles.active : styles.locked}`}
              ref={(el) => (stepsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stepNumber}>
                {step.active ? (
                  <span className={styles.numberActive}>{step.number}</span>
                ) : (
                  <span className={styles.numberLocked}>🔒</span>
                )}
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              
              {step.active && (
                <div className={styles.stepGlow}></div>
              )}
            </div>
          ))}
        </div>
        
        {!isRegistered && (
          <p className={styles.hint}>
            Complete o cadastro na Bullex para desbloquear os próximos passos
          </p>
        )}
      </div>
    </section>
  )
}


