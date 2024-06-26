import Image from 'next/image'
import Header from './components/header/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 md:p-24">
      <Header displayBack={false} />
      Test Landing Page
    </main>
  )
}
