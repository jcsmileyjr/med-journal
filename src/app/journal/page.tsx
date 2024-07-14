"use client"
import Header from '../components/header/header';
import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic';

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

    // Made because of Netlfy build issue due to pouchdb in the getData function. Force skip creating in server.
    const AuthorComponent = dynamic(() => import('../components/author/author'), {
        ssr: false,
        loading: () => <div>Loading...</div>
    });

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <AuthorComponent content={search} _id={"none"} />
        </main>
    )
}

export default Journal;