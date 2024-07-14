"use client"
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
import Header from '../components/header/header';
import Log from '../components/log/log';
import ContentType from '../types/contentType';

/**
 * Page that renders all journal entries.
 * Marked as client because the getData function grabs data from local storage.
 */
const Logs = () => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const setupState = async () => {
            const data: ContentType[] | undefined = await getData();
            if (data === undefined) {
                return
            }
            setContent(data);            
        }

        setupState();
    }, []);

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />

            <section className='mt-8 md:w-2/3 md:mx-auto flex flex-col gap-4'>
                {content.length < 1 && <h1>Loading...</h1>}
                {content.length > 0 &&
                    content.map((log) => (
                        <Log key={log._id} data={log} />
                    ))
                }
            </section>
            
        </main>
    )
}

export default Logs;