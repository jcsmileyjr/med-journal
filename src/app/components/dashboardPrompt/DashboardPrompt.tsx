import Link from 'next/link';
import Image from 'next/image'
import Hand from '../../images/left-hand.png';

const DashboardPrompt = ({content}: {content: string}) => {
    return (
        
            <Link className='flex justify-center items-center gap-4 text-xl text-primaryBlue mt-6' href='/content'>
                {content}
                <Image src={Hand} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
            </Link>
        
    )
}

export default DashboardPrompt;