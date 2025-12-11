'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroContentRef = useRef(null)
  const videoRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Substitua este URL pelo link de embed do seu vídeo do Instagram
  // Para pegar o link: Abra o vídeo no PC -> Três pontinhos -> Incorporar -> Copiar código (pegue apenas o src)
  // Ou adicione /embed ao final do link do post/reel
  const instagramEmbedUrl = "https://www.instagram.com/reel/DQ9ef4DDVge/embed" 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroContentRef.current) {
      observer.observe(heroContentRef.current)
    }
    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffects}>
        <div 
          className={styles.mouseGlow}
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        ></div>
        <div className={styles.gridOverlay}></div>
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`} ref={heroContentRef}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Projeto Institucional Oficial <strong className={styles.bullexHighlight}>Bullex</strong>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Fábrica de Traders</span>
            <span className={styles.titleGradient}>
              {' '}Transforme-se em um Trader de Elite
            </span>
          </h1>
          
          <p className={styles.subtitle}>
            Projeto institucional oficial da <strong className={styles.bullexHighlight}>Bullex</strong>. 
            O único ecossistema completo que combina <strong>comunidade ativa</strong>, 
            <strong> estratégias comprovadas</strong> e <strong>networking estratégico</strong> 
            {' '}para acelerar sua evolução no mercado financeiro.
          </p>
          
          <div className={styles.limitedTime}>
            <span className={styles.limitedTimeIcon}>⏰</span>
            <span className={styles.limitedTimeText}>
              Disponível por <strong>tempo limitado</strong>
            </span>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+3000</span>
              <span className={styles.statLabel}>Traders Ativos</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Suporte</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Focado em Resultados</span>
            </div>
          </div>
          
          <button 
            className={styles.ctaButton}
            onClick={scrollToCTA}
          >
            <span className={styles.buttonText}>Começar Minha Evolução</span>
            <span className={styles.buttonArrow}>→</span>
            <span className={styles.buttonGlow}></span>
          </button>
        </div>
        
        <div className={styles.visualContent}>
          <div className={styles.videoContainer} ref={videoRef}>
            <div className={styles.videoWrapper}>
              <iframe 
                src={instagramEmbedUrl}
                className={styles.instagramFrame} 
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
