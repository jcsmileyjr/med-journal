import { Suspense } from 'react';
import Header from '../components/header/header';
import Author from '../components/author/author';

type tag  = {
    tag: string
};

const Journal = ({searchParams}: { searchParams: tag}) => {
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={Object.values(searchParams)[0]} />   
        </main>
    )
}

export default Journal;