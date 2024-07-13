import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

/**
 * Delete a journal entry from local storage. Afterward, redirects the user to the Logs page.
 * @param {string} _id - ID of the entry to be deleted
 * @param {any} router - The router object.
 */
const deleteData = (_id: string, router: any) => {    
    let previousData = secureLocalStorage.getItem("medical-journal");
console.log("deleteData data");
    if (typeof previousData === "string") {
        let contentArray = JSON.parse(previousData);
        const index = contentArray.findIndex((item: ContentType) => item._id === _id);
        contentArray.splice(index, 1);
        secureLocalStorage.setItem("medical-journal", JSON.stringify(contentArray));
    } 
    router.push("/logs")
}

export default deleteData;