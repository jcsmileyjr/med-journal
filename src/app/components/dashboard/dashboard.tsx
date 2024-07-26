"use client"
import Link from 'next/link';
import Image from 'next/image'
import DashboardPrompt from '../dashboardPrompt/DashboardPrompt';
import QuickAdd from '../quickAdd/quickAdd';
import Diary from '../../images/diary.png';
import Leaf from '../../images/leaf.png';

/**
 * Component that renders the dashboard prompts and view logs button within the landing page.
 */
const Dashboard = () => {
    return (
        <section className='flex flex-col'>   
            {/* List of Dashboard prompts */}
            <div className='flex flex-col items-start mx-auto'>
                <h3 className='text-left text-primaryGreen font-semibold text-2xl mt-12'>Click a writing prompt below</h3>    
                <DashboardPrompt content="What&apos;s on your mind"/>
                <DashboardPrompt content="Doctor or Hospital Visit"/> 
                <DashboardPrompt content="Wellness Check-in"/>
                <DashboardPrompt content="What hurts (body sore/injury)"/>
                <DashboardPrompt content="Unexplained Medical issue"/>
                <DashboardPrompt content="Prescription medicine"/> 
            </div>

            <QuickAdd />

            {/* View logs button */}
            <div className="mt-12">
                <Link className=' flex justify-center items-center w-2/3 md:w-1/3 m-auto'  href='/logs'>
                    <button type="button" className="bg-primaryGreen hover:bg-primaryGreen/90 w-full text-white font-bold  py-2 px-4 rounded-full">View Logs</button>
                </Link>                    
            </div>  

            {/* Why Journal section */}
            <div className='flex justify-center flex-col-reverse md:flex-row lg:w-2/3 md:mx-auto'>
                <Image src={Diary} className='h-40/' alt="" width={200} height={200} style={{width:'auto', height:'20rem' }} />
                <div>
                    <h3 className='text-primaryGreen font-semibold text-2xl mt-12 text-center md:text-start'>Why Journal</h3>
                    <ul className='flex gap-4 flex-col mt-6'>
                        <li className='flex gap-4 flex-row'>
                            <Image src={Leaf} className='h-4 mt-2' alt="" width={20} height={50} style={{width:'auto' }} />
                            Struggling to remember and communicate all your health episodes to a doctor?
                        </li>
                        <li className='flex gap-4 flex-row'>
                        <Image src={Leaf} className='h-4 mt-2' alt="" width={20} height={50} style={{width:'auto' }} />
                            Writing can help you process the emotional toll and provide a genuine account of what&apos;s truly going on with you.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;