import ContentType from '../types/contentType';
import PouchDB from 'pouchdb';

/**
 * Encrypts and edits a journal entry to local storage. Afterward, redirects the user to the Logs page.
 * @param {ContentType} data - The data to be edited and saved.
 * @param {any} router - The router object.
 */
const editData = async (data: ContentType, router: any) => {
    const db = new PouchDB('medical-journal');

    try {
        const doc = await db.get(data._id);
        const response = await db.put({
            _id: data._id,
            _rev: doc._rev,
            content: data.content,
            summary: data.summary,
            tag: data.tag,
            date: data.date,
        });

        console.log("PourchDB response", response);
    } catch (err) {
        console.log(err);
    }  
    router.push("/logs")
}

export default editData;