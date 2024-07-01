import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';
import moment from 'moment'; // NPM module that converts date objects to strings

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