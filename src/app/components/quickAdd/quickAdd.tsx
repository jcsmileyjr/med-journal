"use client"
import {v4 as uuidv4} from 'uuid'; // NPM module that creates a random ID number
import posthog from 'posthog-js';
import moment from 'moment'; // NPM module that converts date objects to strings
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import ContentType from '@/app/types/contentType';
import saveData from '@/app/utils/saveData'; // Encrypts and saves a journal entry to local storage. Afterward, redirects the user to the Logs page.

const quickList = [
"Headache",
"Minor Cold",
"Major Cold/Fever",
"Allergies",
"Minor body ache",
"Arthritis & chronic pain",
"Tired from exercise",
"Feel Tired",
"diarrhea"
]

const QuickAdd = () => {
    const router = useRouter() // Routes a user to another page
    let defaultData: ContentType = {"content": "", "summary": "", "tag": "", "date": "", "_id": ""};

    const [entry, setEntry] = useState(defaultData);

    const handleSubmit = () => {
        // Prevent the user from submitting an empty or incomplete entry
        if (entry.content === '' || entry.summary === '') {
            return;
        }

        console.log("Quick Add: ", entry);
        saveData(entry, router);
        posthog.capture('journal_entry_submitted');
    }

    const handleChange = (e: any) => {
        let test = Array.from(e.target.selectedOptions).map((option) => (option as HTMLOptionElement).value);
        console.log(test);
        setEntry({...entry, "content": e.target.value, "summary":"Health Issues", "tag": "Wellness Check-in", "date": moment().format('MM-DD-YYYY'), "_id": uuidv4()});
    }

    return (
        <div className='flex flex-col items-start mt-12 md:mt-12 md:m-auto md:w-1/3'>
            <label htmlFor="quickSelect" className="text-left text-primaryGreen font-semibold text-2xl ">Quick Add</label>
            <select onChange={(e) => handleChange(e)} name="quickSelect" id="quickSelect" className="h-18 mb-6 mt-2 w-full text-md font-medium text-black bg-gray-50 border border-4 border-primaryGreen text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 rounded-lg" multiple>
                <option value="">Select an Issue</option>
                {quickList.map((item, index) => <option key={`${index}`} value={item}>{item}</option>)}
            </select>
            <button type="button" className="bg-primaryGreen hover:bg-primaryGreen/90 w-2/3 md:w-full m-auto text-white font-bold  py-2 px-4 rounded-full">Add Health Issue</button>
        </div>
    )
}

export default QuickAdd;