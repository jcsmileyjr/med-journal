import Link from 'next/link';
import Image from 'next/image'
import Hand from '../../images/right-hand.png';

/**
 * Component that renders a link with a prompt (tag) to the Journal page.
 * @param {string} content - The tag of the prompt.
 */
const DashboardPrompt = ({content}: {content: string}) => {
    return (
        <div className='mt-6 flex justify-center items-center'>
            <Link className='flex justify-center items-start gap-4 text-xl text-primaryBlue' href={{pathname: '/journal', query: { tag: content }}}>
                <Image src={Hand} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
                {content}
            </Link>
        </div>
    )
}

export default DashboardPrompt;