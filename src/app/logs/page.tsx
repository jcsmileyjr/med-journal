"use client"
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
import Header from '../components/header/header';
import Log from '../components/log/log';
import ContentType from '../types/contentType';

const Logs = () => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: ContentType[] = await getData();
            setContent(data);
        }
        fetchData();
    }, [])

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />

            <section className='mt-8 flex flex-col gap-4'>
                {content.length < 1 && <h1>Loading...</h1>}
                {content.length > 0 &&
                    content.map((log) => (
                        <Log key={log.id} data={log} />
                    ))
                }
            </section>
            
        </main>
    )
}

export default Logs;