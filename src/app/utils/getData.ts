import dayjs from 'dayjs'; // NPM module that converts date objects to strings
import ContentType from '../types/contentType';
import PouchDB from 'pouchdb';
//import PouchDB from 'pouchdb-browser';
import DefaultLog from '../data/defaultLog.json';

// Returns an unencrypted sorted (by date) array of journal entries from local storage
const getData = async () => {
    const db = new PouchDB('medical-journal');
    try {
        const result = await db.allDocs({
            include_docs: true
        });

        if (result.total_rows === 0) {
            return [DefaultLog];
        } else {
            let data: ContentType[] = result.rows.map((row: any) => row.doc);
            //console.log("getData() - Database data: ", data);
            let sortedLogs = data.sort((a, b) => dayjs(b.date, 'MM-DD-YYYY').diff(dayjs(a.date, 'MM-DD-YYYY')));
            return sortedLogs;
        }

    } catch (err) {
        console.log(err);
    }
}

export default getData;