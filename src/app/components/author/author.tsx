"use client"
import {useState} from 'react';
import Image from 'next/image'
import SubmitIcon from '../../images/submit-icon.png';

const Author = () => {
    const [showSummary, setShowSummary] = useState(true);

    const toggleSummary = () => {
        console.log(showSummary);
        setShowSummary(!showSummary);
    }

    const showTitle = () => {
        console.log("showTitle rans")
        if(!showSummary) {
            return false;
        } else {
            return true;
        }
    }
    return(
        <section>
            <details open={true}>
                <summary className="appearance-none list-none mb-4 text-primaryGreen">
                    <h2 className="text-center text-pretty">Let's talk about your doctor/hospital visit</h2>
                    {!showSummary &&
                        <p className="text-base text-slate-400 text-center">Click to Open</p>
                    }
                </summary>
                <textarea className="w-full h-96 h-full border-2 border-black rounded-lg p-2 bg-secondaryGreen" placeholder="Recount your doctor's visit. What happened, in your own words..." />
            </details>
            <hr className="border-t border-gray-300 my-4" />

            <details open={false}>
                <summary className="appearance-none list-none mb-4 text-primaryGreen">
                    <h2 className="text-center text-pretty">Please provide a brief summary for the title</h2>
                    {showSummary &&
                        <p className="text-base text-slate-400 text-center">Click to Open</p>
                    }
                </summary>
                <textarea className="w-full h-96 h-full border-2 border-black rounded-lg p-2 bg-secondaryGreen" placeholder="Recount your doctor's visit. What happened, in your own words..." />
            </details>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-center">
                <label htmlFor="date" className="text-primaryGreen hidden">Date</label>
                <input id="date" type="date" className="appearance-none list-none mb-4 text-primaryGreen" />
            </div>
            <div className='flex justify-center mt-6'>
                <Image src={SubmitIcon} className='h-12' alt="" width={20} height={100} style={{width:'auto' }} />
            </div>
        </section>
    )
}   

export default Author;