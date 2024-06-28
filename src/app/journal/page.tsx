import Header from '../components/header/header';
import Author from '../components/author/author';

const Journal = () => {
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author />
        </main>
    )
}

export default Journal;