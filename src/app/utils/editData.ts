import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

/**
 * Encrypts and Edits data of the medical journal to local storage.
 *
 * @param {ContentType} data - The data to be saved.
 */
const editData = (data: ContentType, router: any) => {    
    let previousData = secureLocalStorage.getItem("medical-journal");
console.log("editData data", data);
    if (typeof previousData === "string") {
        let contentArray = JSON.parse(previousData);
        const index = contentArray.findIndex((item: ContentType) => item.id === data.id);
        contentArray[index] = data;
        secureLocalStorage.setItem("medical-journal", JSON.stringify(contentArray));
    } else {
        secureLocalStorage.setItem("medical-journal", JSON.stringify([data]));
    }
    router.push("/logs")
}

export default editData;