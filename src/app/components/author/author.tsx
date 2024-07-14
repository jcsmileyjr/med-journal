"use client"
import {v4 as uuidv4} from 'uuid'; // NPM module that creates a random ID number
import posthog from 'posthog-js'
import moment from 'moment'; // NPM module that converts date objects to strings
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import DeleteEntry from '../deleteEntry/deleteEntry';
import getData from '../../utils/getData'; // Returns an unenncrypted sorted (by date) array of journal entries from local storage
import saveData from '@/app/utils/saveData'; // Encrypts and saves a journal entry to local storage. Afterward, redirects the user to the Logs page.
import editData from '@/app/utils/editData'; // Encrypts and edits a journal entry to local storage. Afterward, redirects the user to the Logs page.
import SubmitIcon from '../../images/submit-icon.png';
import BlackCheck from '../../images/BlackCheck.png'
import ContentType from '@/app/types/contentType';

/**
 * Component that renders on the Journal & Edit pages that allows a user to create a journal entry. 
 * @param {string} content - The tag of the blank journal entry used on the page title.
 * @param {string} _id - The _id of the journal entry to be edited. Can be 'none' (meaning not an previous entry)
 * @returns 
 */
const Author = ({content, _id}: { content: string, _id: string}) => {
    const router = useRouter() // Routes a user to another page

    const [showSummary, setShowSummary] = useState(false); // Toggle the state of the summary details element
    const [showContent, setShowContent] = useState(true); // Toggle the state of the content details element
    const [userContent, setUserContent] = useState('');
    const [userSummary, setUserSummary] = useState('');
    // const [logRev, setLogRev] = useState('');
    const [title, setTitle] = useState(content); // The tag of the journal entry
    const [logDate, setLogDate] = useState(moment().format('YYYY-MM-DD'));
    const [submitError, setSubmitError] = useState(false); // error state for the submit button

    /**
     * useEffect hook that check if there an _id in the url. If there is an _id, 
     * it will populate the elements with the data from the log with the _id. 
     */
    useEffect(() => {
        const setupState = async () => {
            // If there is an _id, this means that the user is editing an entry
            if(_id !== 'none') {
                const data: ContentType[] | undefined = await getData();
                if (data === undefined) {
                    console.log("Undefined from author.tsx");
                    return
                } else {
                    const log= data.find((log) => log._id === _id);
                    if (log !== undefined) {
                        setUserContent(log.content);
                        setUserSummary(log.summary);
                        const newDate = moment(log.date).format('YYYY-MM-DD')
                        setLogDate(newDate);
                        setTitle(log.tag);
                    }
                }                
            }            
        };
        setupState();
    }, [])

    // Toggle the state of the summary and content details elements at the same time
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

    // Function that saves the data or edit a previous entry based on if the _id is in the url
    const handleSubmit = () => {
        // Prevent the user from submitting an empty or incomplete entry
        if (userContent === '' || userSummary === '') {
            setSubmitError(true);
            return
        }
    
        let data: ContentType = {"content": "", "summary": "", "tag": "", "date": "", "_id": ""};
        if (_id !== 'none') {
            data = {
                "content": userContent,
                "summary": userSummary,
                "tag": title,
                "date" : moment(logDate).format('MM-DD-YYYY'),
                "_id": _id,
            };

            editData(data, router);
        } else {
            data = {
                "content": userContent,
                "summary": userSummary,
                "tag": title,
                "date" : moment(logDate).format('MM-DD-YYYY'),
                "_id": uuidv4(),
            };
            saveData(data, router);
        }
        posthog.capture('journal_entry_submitted'); // Track the number of journal entries submitted
    }

    return(
        <section className='mt-8 md:w-2/3 md:mx-auto'>
            {/* Toggleable content's UI */}
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

            {/* Toggleable summary's UI */}
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
            
            {/* Date UI */}
            <div className="flex flex-col items-center justify-center mb-4">
                <input value={logDate} id="date" onChange={(e) => setLogDate(e.target.value)} type="date" className="appearance-none list-none text-primaryGreen" />
                <label htmlFor="date" className="text-black">Date</label>
            </div>

            {/* Submit button UI */}
            <div className='flex flex-col items-center justify-center gap-4 mt-6'>
                {/* Show the black checkmark if the user has not filled out the form */}
                {(userContent === '' || userSummary === '') &&
                    <Image onClick={() => handleSubmit()} src={BlackCheck} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
                }
                
                {/* Show the green checkmark if the user has filled out the form */}
                {userContent !== '' && userSummary !== '' &&
                    <Image onClick={() => handleSubmit()} src={SubmitIcon} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
                }
                {submitError && (userContent === '' || userSummary === '') &&
                    <p className='text-red-800 text-base'>Must fill out all fields</p>
                }                
            </div>
            {_id !== 'none' &&
                <DeleteEntry _id={_id} />
            }
        </section>
    )
}   

export default Author;