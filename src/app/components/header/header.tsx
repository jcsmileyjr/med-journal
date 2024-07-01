import Image from 'next/image'
import Link from 'next/link';
import BookIcon from '../../images/book.png';
import ProfileIcon from '../../images/profile.jpg';

/**
 * Renders the header component.
 */
const Header = ({displayBack}: {displayBack: boolean}) => {
    return (
        <section className='flex flex-row items-center justify-between'>
            <Link href='/'>
                <Image src={BookIcon} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
            </Link>
            <h1 className='text-primaryGreen font-bold text-3xl'>Medical Journal</h1>
            {displayBack && <Link href='/'><p className='text-red-400 text-base'>Back</p></Link>}
            {!displayBack && 
                <Link href='/setting'>
                    <Image src={ProfileIcon} className='h-4' alt="Link to setting page" width={20} height={50} style={{width:'auto', height:'auto' }} />
                </Link>
            }
        </section>
    )
}

export default Header;
