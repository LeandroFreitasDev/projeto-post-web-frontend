import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventosPublicos from '../../components/EventosPublicos'

export default function HomePage() {
  return (
    <div>
        <Header />
        <EventosPublicos />
        <Footer />
    </div>
  )
}
