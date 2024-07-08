import Image from 'next/image'
import Link from 'next/link';
import BookIcon from '../../images/book.png';
import ProfileIcon from '../../images/profile.jpg';

/**
 * Component that renders the header component.
 * @param {boolean} displayBack - Whether to display the back button.
 */
const Header = ({displayBack}: {displayBack: boolean}) => {
    return (
        <header className='flex flex-row items-center justify-between'>
            {/* App icon that returns to the home page */}
            <Link aria-label="Home page" href='/'>
                <Image src={BookIcon} className='h-4' alt="" width={20} height={50} style={{width:'auto', height:'auto' }} />
            </Link>
            <h1 className='text-primaryGreen font-bold text-3xl text-center'>Medical Journal</h1>

            {/* Profile icon that returns to the setting page or back to the home page */}
            {displayBack && <Link aria-label="Home page" href='/'><p className='text-red-800 text-base'>Back</p></Link>}
            {!displayBack && 
                <Link aria-label="Settingpage" href='/setting'>
                    <Image src={ProfileIcon} className='h-4' alt="Link to setting page" width={20} height={50} style={{width:'auto', height:'auto' }} />
                </Link>
            }
        </header>
    )
}

export default Header;
