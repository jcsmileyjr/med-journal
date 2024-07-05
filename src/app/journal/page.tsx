"use client"
import Header from '../components/header/header';
import Author from '../components/author/author';
import { useSearchParams } from 'next/navigation'

const Journal = () => {
    const searchParams = useSearchParams()
    let search = searchParams.get('tag')
    if (search === null) {
        search = "Test"
    }
    
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={search} id={"none"} tag={"none"} />   
        </main>
    )
}

export default Journal;