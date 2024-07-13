import  secureLocalStorage  from  "react-secure-storage";
import moment from 'moment'; // NPM module that converts date objects to strings
import ContentType from '../types/contentType';
import PouchDB from 'pouchdb';
import DefaultLog from '../data/defaultLog.json';

// Returns an unencrypted sorted (by date) array of journal entries from local storage
const getData = async () => {
    const db = new PouchDB('medical-journal');
    // db.info().then(function (info:any) {
    //     if(info.doc_count === 0) {
    //         console.log('No stuff!', DefaultLog);
    //         return DefaultLog;
    //     } else {
    //         console.log('It has stuff!');
    //     }
    // })

    try {
        const result = await db.allDocs({
            include_docs: true
        });

        if (result.total_rows === 0) {
            return [DefaultLog];
        } else {
            console.log("result.rows", result.rows);
            console.log("test 1: ", result.rows[0]);
            let data: ContentType[] = result.rows.map((row: any) => row.doc);
            console.log("test the data: ", data);
            let sortedLogs = data.sort((a, b) => moment(b.date, 'MM-DD-YYYY').diff(moment(a.date, 'MM-DD-YYYY')));
            return sortedLogs;
        }

    } catch (err) {
        console.log(err);
    }

    // db.allDocs({
    //     include_docs: true
    // }).then(function (result) {
    //     // console.log("allDocs", result);
    //     if (result.total_rows === 0) {
    //         return DefaultLog;
    //     } else {
    //         console.log("result.rows", result.rows);
    //         console.log("test 1: ", result.rows[0]);
    //         let data: ContentType[] = result.rows.map((row: any) => row.doc);
    //         console.log("test the data: ", data);
    //         let sortedLogs = data.sort((a, b) => moment(b.date, 'MM-DD-YYYY').diff(moment(a.date, 'MM-DD-YYYY')));
    //         return sortedLogs;
    //     }
        
    // }).catch(function (err) {
    //     console.log(err);
    // });    


    //OLD CODE BELOW
    let previousData = secureLocalStorage.getItem("medical-journal");
    if (typeof(previousData) === "string") {
        let contentArray: ContentType[] = JSON.parse(previousData);
 console.log("contentArray", contentArray);        
        let sortedLogs = contentArray.sort((a, b) => moment(b.date, 'MM-DD-YYYY').diff(moment(a.date, 'MM-DD-YYYY')));
        return sortedLogs;
    } else {
        return [];
    }
}

export default getData;