import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

/**
 * Encrypts and edits a journal entry to local storage. Afterward, redirects the user to the Logs page.
 * @param {ContentType} data - The data to be edited and saved.
 * @param {any} router - The router object.
 */
const editData = (data: ContentType, router: any) => {    
    let previousData = secureLocalStorage.getItem("medical-journal");
console.log("editData data", data);
    if (typeof previousData === "string") {
        let contentArray = JSON.parse(previousData);
        const index = contentArray.findIndex((item: ContentType) => item._id === data._id);
        contentArray[index] = data;
        secureLocalStorage.setItem("medical-journal", JSON.stringify(contentArray));
    } else {
        secureLocalStorage.setItem("medical-journal", JSON.stringify([data]));
    }
    router.push("/logs")
}

export default editData;