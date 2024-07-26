
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
    return (
        <div className='flex flex-col items-start mt-12 md:mt-12 md:m-auto md:w-1/3'>
            <label htmlFor="quickSelect" className="text-left text-primaryGreen font-semibold text-2xl ">Quick Add</label>
            <select name="quickSelect" id="quickSelect" className="h-16 mb-6 mt-2 w-full text-sm font-medium text-black bg-gray-50 border border-4 border-primaryGreen text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 rounded-lg" multiple>
                <option value="">Select an Issue</option>
                {quickList.map((item, index) => <option key={`${index}`} value={item}>{item}</option>)}
            </select>
            <button type="button" className="bg-primaryGreen hover:bg-primaryGreen/90 w-2/3 md:w-full m-auto text-white font-bold  py-2 px-4 rounded-full">Add Health Issue</button>
        </div>
    )
}

export default QuickAdd;