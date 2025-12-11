'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import WhatIsSection from '@/components/WhatIsSection'
import BenefitsCards from '@/components/BenefitsCards'
import WebinarSection from '@/components/WebinarSection'
import OfferSection from '@/components/OfferSection'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegistration = () => {
    setIsRegistered(true)
  }

  return (
    <main>
      <Hero />
      <WhatIsSection />
      <FinalCTA 
        isRegistered={isRegistered} 
        onRegister={handleRegistration}
      />
      <OfferSection />
      <BenefitsCards />
      <WebinarSection />
    </main>
  )
}

