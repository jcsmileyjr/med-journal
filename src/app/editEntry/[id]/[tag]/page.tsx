"use client"
import Author from '../../../components/author/author';
import Header from '../../../components/header/header';

/**
 * Page that allows the user to edit an existing journal entry.
 * @param {any} params
 * @param {string} params.id - The id of the journal entry to be edited. Can be 'none' (meaning not an previous entry)
 * @param {string} params.tag - The tag of the journal entry to be edited
 * @returns 
 */
const EditEntry = ({ params }: { params: { id: string, tag: string } }) => {
    const { id, tag } = params;
    
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={"none"} id={id} />   
        </main>
    )
}

export default EditEntry;