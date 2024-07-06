import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

/**
 * Encrypts and saves a journal entry to local storage. Afterward, redirects the user to the Logs page.
 * @param {ContentType} data - The data to be saved.
 * @param {any} router - The router object.
 */
const saveData = (data: ContentType, router: any) => {    
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