import Header from '../components/header/header';

/**
 * Renders the Setting wrapper.
 * 
 * TODO: Add setting client component
 */
const Setting = () => {
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24">
            <Header displayBack={true} />
            <p className='text-3xl text-center  mt-8 text-red-600'>Work In Progress</p>
        </main>
    )
}

export default Setting;