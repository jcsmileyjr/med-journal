import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

/**
 * Encrypts and Saves data of the medical journal to local storage.
 *
 * @param {ContentType} data - The data to be saved.
 */
const saveData = (data: ContentType) => {
    let previousData = secureLocalStorage.getItem("medical-journal");

    if (typeof previousData === "string") {
        let contentArray = JSON.parse(previousData);
        contentArray.push(data);
        secureLocalStorage.setItem("medical-journal", JSON.stringify(contentArray));
    } else {
        secureLocalStorage.setItem("medical-journal", JSON.stringify([data]));
    }
}

export default saveData;