'use client'

import styles from './FloatingWhatsApp.module.css'

export default function FloatingWhatsApp() {
  const phoneNumber = '5547920036543'
  const message = 'Olá! Gostaria de falar com o suporte da Fábrica de Traders.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.container}
      aria-label="Converse com nosso suporte no WhatsApp"
    >
      <div className={styles.iconWrapper}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 17.519C16.892 18.232 15.39 19.688 13.918 19.957C12.446 20.226 9.805 19.38 6.643 16.216C3.481 13.052 2.636 10.411 2.905 8.939C3.174 7.467 4.63 5.965 5.343 5.385C5.835 4.966 6.556 5.161 6.843 5.736C7.16 6.37 7.927 8.163 8.087 8.527C8.256 8.914 8.141 9.358 7.828 9.636L7.142 10.247C7.142 10.247 7.436 11.536 8.941 13.041C10.446 14.546 11.735 14.84 11.735 14.84L12.346 14.154C12.624 13.841 13.068 13.726 13.455 13.895C13.819 14.055 15.612 14.822 16.246 15.139C16.821 15.426 17.016 16.147 16.597 16.639L17.472 17.519Z" fill="white"/>
        </svg>
      </div>
      <span className={styles.text}>Converse com nosso suporte</span>
    </a>
  )
}






