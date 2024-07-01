"use client"
import {useState} from 'react';
import ContentType from "@/app/types/contentType";
import Image from 'next/image'
import Hand from '../../images/right-hand.png';

const Log = ({data}: {data: ContentType}) => {
    const [showOpenMessage, setShowOpenMessage] = useState(true);
    const [showSummary, setShowSummary] = useState(false);

    const toggleSummary = () => {
        setShowOpenMessage(!showOpenMessage);
        setShowSummary(!showSummary);
    }

    return (
        <details open={showSummary} onToggle={() => toggleSummary()} className="border-b-4 border-primaryGreen pb-4">
            <summary className="flex flex-col appearance-none list-none">
                <div className="flex justify-between text-primaryGreen">
                    <p>{data.date}</p>
                    <p>{data.tag}</p>
                </div>
                <div className="flex flex-col mt-4">
                    <p>{data.summary}</p>
                    <p className={` ${showOpenMessage ? 'block' : 'hidden'}`}>{data.content.substring(0, 50)} ...</p>
                    { showOpenMessage &&
                        <div className="flex start gap-4 mt-2">
                            <Image src={Hand} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
                            <p>Click to read more</p>
                        </div>
                    }
                </div>
            </summary>
            <p className='mt-2'>{data.content}</p>
        </details>
    )
}

export default Log;