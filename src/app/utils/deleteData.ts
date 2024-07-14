import PouchDB from 'pouchdb';

/**
 * Delete a journal entry from local storage. Afterward, redirects the user to the Logs page.
 * @param {string} _id - ID of the entry to be deleted
 * @param {any} router - The router object.
 */
const deleteData = async (_id: string, router: any) => {    
    const db = new PouchDB('medical-journal');

    try {
        const doc = await db.get(_id);
        const response = await db.remove(doc);

        console.log("PourchDB response", response);
    } catch (err) {
        console.log(err);
    }

    router.push("/logs")
}

export default deleteData;