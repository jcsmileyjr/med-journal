"use client"
import Header from '../components/header/header';
import Content from '../components/content/content';
import dynamic from 'next/dynamic';
/**
 * Page that renders all journal entries.
 * Marked as client because the getData function grabs data from local storage.
 */
const Logs = () => {
    const ContentComponent = dynamic(() => import('../components/content/content'), {
        ssr: false,
        loading: () => <div>Loading...</div>
    });    

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <ContentComponent />
        </main>
    )
}

export default Logs;