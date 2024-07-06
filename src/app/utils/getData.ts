import  secureLocalStorage  from  "react-secure-storage";
import moment from 'moment'; // NPM module that converts date objects to strings
import ContentType from '../types/contentType';

// Returns an unenncrypted sorted (by date) array of journal entries from local storage
const getData = () => {
    let previousData = secureLocalStorage.getItem("medical-journal");
    if (typeof(previousData) === "string") {
        let contentArray: ContentType[] = JSON.parse(previousData);
        let sortedLogs = contentArray.sort((a, b) => moment(b.date, 'MM-DD-YYYY').diff(moment(a.date, 'MM-DD-YYYY')));
        return sortedLogs;
    } else {
        return [];
    }
}

export default getData;