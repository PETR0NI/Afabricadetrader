'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import WebinarSection from '@/components/WebinarSection'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegistration = () => {
    setIsRegistered(true)
  }

  return (
    <main>
      <Hero />
      <FinalCTA 
        isRegistered={isRegistered} 
        onRegister={handleRegistration}
      />
      <WebinarSection />
    </main>
  )
}

