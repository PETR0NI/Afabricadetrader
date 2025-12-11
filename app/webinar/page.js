'use client'

import Link from 'next/link'
import styles from './webinar.module.css'

export default function WebinarPage() {
  // ID do vídeo explicativo da Fábrica de Traders
  const videoId = "dQw4w9WgXcQ" 

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backButton}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Voltar para Home
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Webinar <span className={styles.highlight}>Fábrica de Traders</span>
        </h1>
        <p className={styles.subtitle}>
          Descubra como nossa comunidade e ferramentas exclusivas podem acelerar sua evolução no mercado.
        </p>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.videoPlayerArea}>
          <iframe
            className={styles.videoFrame}
            src="https://player-vz-97e21c85-43f.tv.pandavideo.com/embed/?v=922677ec-9c4b-4646-9e76-247d68b4b3b8"
            title="Apresentação Fábrica de Traders"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <Link href="/#final-cta" className={styles.ctaButton}>
          <span className={styles.buttonIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Quero me cadastrar na Bullex
        </Link>
      </div>
    </main>
  )
}
