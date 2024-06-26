import Image from 'next/image'
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
      <Header displayBack={false} />
      <section className='  md:w-2/3 md:mx-auto'>
        <h2 className='text-center text-primaryGreen font-bold text-xl pt-8'>Capture 
          <span className='text-black text-base font-normal'> every detail of</span> your medical journey 
          <span className='text-black text-base font-normal'> in your</span> own words</h2>
      </section>
      <Dashboard />
    </main>
  )
}
