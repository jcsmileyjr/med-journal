"use client"
import {useState, useEffect} from 'react';
import getData from '../../utils/getData';
import Log from '../../components/log/log';
import ContentType from '../../types/contentType';

/**
* Quickly created page for displaying journal entries.
* Made because of Netlfy build issue due to pouchdb in the getData function. Force skip creating in server.
*/
const Content = () => {
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
        <section className='mt-8 md:w-2/3 md:mx-auto flex flex-col gap-4'>
            {content.length < 1 && <h1>Loading...</h1>}
            {content.length > 0 &&
                content.map((log) => (
                    <Log key={log._id} data={log} />
                ))
            }
        </section>
    )
}

export default Content;