import Image from 'next/image'
import Navigation from './Navigation'
import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient p-8 container flex flex-col gap-28 mx-auto relative">
      <Navigation />
      <Hero />
      <SectionOne />
      <SectionTwo />
    </main>
  )
}
