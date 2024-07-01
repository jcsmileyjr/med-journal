"use client"
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
import Header from '../components/header/header';

const Logs = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setContent(data);
        }
        fetchData();
    }, [])

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />

            {content.length < 1 && <h1>Loading...</h1>}
            {content.length > 0 &&
                <p>Content</p>
            }
            
        </main>
    )
}

export default Logs;