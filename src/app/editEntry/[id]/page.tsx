"use client"
import Author from '../../components/author/author';
import Header from '../../components/header/header';

/**
 * Page that allows the user to edit an existing journal entry.
 * @param {any} params
 * @param {string} params._id - The _id of the journal entry to be edited. Can be 'none' (meaning not an previous entry)
 */
const EditEntry = ({ params }: { params: { _id: string} }) => {
    const { _id} = params;
    
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={"none"} _id={_id} />   
        </main>
    )
}

export default EditEntry;