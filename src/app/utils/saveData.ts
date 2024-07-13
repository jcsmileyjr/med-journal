import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';
import PouchDB from 'pouchdb';
/**
 * Encrypts and saves a journal entry to local storage. Afterward, redirects the user to the Logs page.
 * @param {ContentType} data - The data to be saved.
 * @param {any} router - The router object.
 */
const saveData = async (data: ContentType, router: any) => {    
    const db = new PouchDB('medical-journal');
    try {
        const response = await db.put(data);
        console.log("PourchDB response", response);
    } catch (err) {
        console.log("Error saving data to PouchDB ", err);
    }

    // OLD CODE BELOW
    let previousData = secureLocalStorage.getItem("medical-journal");
console.log("saveData ran", data);
    if (typeof previousData === "string") {
        let contentArray = JSON.parse(previousData);
        contentArray.push(data);
        secureLocalStorage.setItem("medical-journal", JSON.stringify(contentArray));
    } else {
        secureLocalStorage.setItem("medical-journal", JSON.stringify([data]));
    }
    router.push("/logs")
}

export default saveData;