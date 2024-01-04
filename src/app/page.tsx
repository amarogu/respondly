import Image from 'next/image'
import Navigation from './Navigation'
import Hero from './Hero'

export default function Home() {
  return (
    <main className="min-h-screen p-8 container mx-auto relative">
      <Navigation />
      <Hero />
    </main>
  )
}
