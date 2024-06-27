import Link from 'next/link';
import Image from 'next/image'
import Hand from '../../images/right-hand.png';

const DashboardPrompt = ({content}: {content: string}) => {
    return (
        <div className='mt-6 flex justify-center items-center'>
            <Link className='flex justify-center items-center gap-4 text-xl text-primaryBlue ' href='/journal'>
                <Image src={Hand} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
                {content}
            </Link>
        </div>
    )
}

export default DashboardPrompt;