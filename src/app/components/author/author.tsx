"use client"
import {v4 as uuidv4} from 'uuid'; // NPM module that creates a random ID number
import moment from 'moment'; // NPM module that converts date objects to strings
import saveData from '@/app/utils/saveData';
import getData from '../../utils/getData';
import editData from '@/app/utils/editData';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import SubmitIcon from '../../images/submit-icon.png';
import BlackCheck from '../../images/BlackCheck.png'
import ContentType from '@/app/types/contentType';

const Author = ({content, id}: { content: string, id: string, tag: string }) => {
    const router = useRouter() // Routes a user to another page

    const [showSummary, setShowSummary] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [userContent, setUserContent] = useState('');
    const [userSummary, setUserSummary] = useState('');
    const [title, setTitle] = useState(content);
    const [logDate, setLogDate] = useState(moment().format('YYYY-MM-DD'));
    const [submitError, setSubmitError] = useState(false);

    useEffect(() => {
        // If there is an id, this means that the user is editing an entry
        if(id !== 'none') {
            const data = getData();
            const log= data.find((log) => log.id === id);
            console.log("date", log?.date)
            if (log !== undefined) {
                setUserContent(log.content);
                setUserSummary(log.summary);
                const newDate = moment(log.date).format('YYYY-MM-DD')
                setLogDate(newDate);
                setTitle(log.tag);
            }
        }
    }, [])

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

    const handleSubmit = () => {
        if (userContent === '' || userSummary === '') {
            setSubmitError(true);
            return
        }
        // create a data object with the userContent, userSummary, tag, and logDate
        let data: ContentType = {"content": "", "summary": "", "tag": "", "date": "", "id": ""};
        if (id !== 'none') {
            data = {
                "content": userContent,
                "summary": userSummary,
                "tag": title,
                "date" : moment(logDate).format('MM-DD-YYYY'),
                "id": id
            };

            editData(data, router);
        } else {
            data = {
                "content": userContent,
                "summary": userSummary,
                "tag": title,
                "date" : moment(logDate).format('MM-DD-YYYY'),
                "id": uuidv4()
            };
            saveData(data, router);
        }

    }

    return(
        <section className='mt-8 md:w-2/3 md:mx-auto'>
            <details onClick={(e) =>toggleSummary(e)} open={showContent}>
                <summary className="appearance-none list-none mb-4 text-primaryGreen">
                    <h2 className="text-center text-xl text-pretty">Let&apos;s talk about your {(title).toLowerCase()}</h2>
                    {showSummary &&
                        <p className="text-base text-black text-center">Click to Open</p>
                    }
                </summary>
            </details>
            {showContent &&
                <textarea name="userContent" value={userContent} onChange={(e) =>setUserContent(e.target.value)} className="w-full h-96 border-2 border-black rounded-lg p-2 bg-secondaryGreen placeholder-gray-700" placeholder="What happened, in your own words..." />
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
                <>
                    <textarea maxLength={50} name="userSummary" value={userSummary} onChange={(e) =>setUserSummary(e.target.value)} className="w-full h-96 border-2 border-black rounded-lg p-2 bg-secondaryGreen placeholder-gray-700" placeholder="In 50 characters or less, please summarize what happened." />
                    <div className='flex justify-end'>
                        <p>{userSummary.length}/50</p>
                    </div>
                </>
            }
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex flex-col items-center justify-center mb-4">
                <input value={logDate} id="date" onChange={(e) => setLogDate(e.target.value)} type="date" className="appearance-none list-none text-primaryGreen" />
                <label htmlFor="date" className="text-black">Date</label>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 mt-6'>
                {(userContent === '' || userSummary === '') &&
                    <Image onClick={() => handleSubmit()} src={BlackCheck} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
                }
                {userContent !== '' && userSummary !== '' &&
                    <Image onClick={() => handleSubmit()} src={SubmitIcon} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
                }
                {submitError && (userContent === '' || userSummary === '') &&
                    <p className='text-red-800 text-base'>Must fill out all fields</p>
                }                
            </div>
        </section>
    )
}   

export default Author;