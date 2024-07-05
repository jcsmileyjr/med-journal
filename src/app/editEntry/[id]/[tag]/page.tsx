"use client"

import Author from '../../../components/author/author';
import Header from '../../../components/header/header';
// {params: id}: {params: string}
const EditEntry = ({ params }: { params: { id: string, tag: string } }) => {
    const { id, tag } = params;
    
    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 md:pt-8">
            <Header displayBack={true} />
            <Author content={"none"} id={id} tag={tag} />   
        </main>
    )
}

export default EditEntry;