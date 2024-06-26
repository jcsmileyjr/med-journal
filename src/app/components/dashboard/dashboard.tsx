"use client"
import Link from 'next/link';
import DashboardPrompt from '../dashboardPrompt/DashboardPrompt';

/**
 * A function that renders the dashboard component within the landing page.
 *
 */
const Dashboard = () => {
    return (
        <section className='flex flex-col'>            
                <Link className="flex justify-center items-center mt-8" href='/logs'>
                    <button type="button" className="bg-primaryGreen hover:bg-primaryGreen/90 text-white font-bold w-2/3 md:w-1/3 m-auto py-2 px-4 rounded-full">View Logs</button>
                </Link>
                <h3 className='text-center text-primaryGreen font-semibold text-2xl mt-12'>Click a writing prompt below</h3>    
                <DashboardPrompt content="FreeStyle"/>
                <DashboardPrompt content="Doctor/Hospital Visit"/> 
                <DashboardPrompt content="Wellness Check-in"/>
                <DashboardPrompt content="What hurts (body sore/injury)"/>
                <DashboardPrompt content="Unexplained Medical issue"/>
                <DashboardPrompt content="Prescription medicine"/>     
        </section>
    )
}

export default Dashboard;