import Header from '../components/header/header';
import Author from '../components/author/author';

const Journal = ({searchParams}: { [key: string]: string }) => {
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={Object.values(searchParams)[0]} />
        </main>
    )
}

export default Journal;