"use client"
import moment from 'moment'; // NPM module that converts date objects to strings
import {useState} from 'react';
import Image from 'next/image'
import SubmitIcon from '../../images/submit-icon.png';

const Author = ({content}: { content: string }) => {
    const [showSummary, setShowSummary] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [userContent, setUserContent] = useState('');
    const [userSummary, setUserSummary] = useState('');
    const [logDate, setLogDate] = useState(moment().format('YYYY-MM-DD'));

    const toggleSummary = (e: any) => {
        e.preventDefault(); // Prevent the default behavior of the details element
        if (showContent) {
            setShowSummary(true);
            setShowContent(false);
        } else {
            setShowSummary(false);
            setShowContent(true);
        }
    }

    return(
        <section>
            <details onClick={(e) =>toggleSummary(e)} open={showContent}>
                <summary className="appearance-none list-none mb-4 text-primaryGreen">
                    <h2 className="text-center text-xl text-pretty">Let's talk about your {(content).toLowerCase()}</h2>
                    {showSummary &&
                        <p className="text-base text-black text-center">Click to Open</p>
                    }
                </summary>
            </details>
            {showContent &&
                <textarea name="userContent" value={userContent} onChange={(e) =>setUserContent(e.target.value)} className="w-full h-96 h-full border-2 border-black rounded-lg p-2 bg-secondaryGreen placeholder-gray-700" placeholder="What happened, in your own words..." />
            }
            <hr className="border-t border-gray-300 my-4" />

            <details onClick={(e) =>toggleSummary(e)} open={showSummary}>
                <summary className="appearance-none list-none mb-4 text-primaryGreen">
                    <h2 className="text-center text-xl text-pretty">Please provide a brief summary for the title</h2>
                    {showContent &&
                        <p className="text-base text-black text-center">Click to Open</p>
                    }
                </summary>
            </details>
            {showSummary &&
                <textarea name="userSummary" value={userSummary} onChange={(e) =>setUserSummary(e.target.value)} className="w-full h-96 h-full border-2 border-black rounded-lg p-2 bg-secondaryGreen placeholder-gray-700" placeholder="In 50 characters or less, please summarize what happened." />
            }
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-center">
                <label htmlFor="date" className="text-primaryGreen hidden">Date</label>
                <input value={logDate} id="date" onChange={(e) => setLogDate(e.target.value)} type="date" className="appearance-none list-none mb-4 text-primaryGreen" />
            </div>
            <div className='flex justify-center mt-6'>
                <Image src={SubmitIcon} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
            </div>
        </section>
    )
}   

export default Author;