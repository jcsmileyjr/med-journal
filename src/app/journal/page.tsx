"use client"
import Header from '../components/header/header';
import Author from '../components/author/author';
import { useSearchParams } from 'next/navigation'

/**
 * Page that allows the user to create a journal entry via the Author component.
 * @returns 
 */
const Journal = () => {
    // Get the tag from the URL's search params
    const searchParams = useSearchParams()
    let search = searchParams.get('tag')
    if (search === null) {
        search = "Test"
    }
    
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={search} _id={"none"}/>   
        </main>
    )
}

export default Journal;