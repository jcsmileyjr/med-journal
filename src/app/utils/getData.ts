import  secureLocalStorage  from  "react-secure-storage";
import ContentType from '../types/contentType';

const getData = () => {
    let previousData = secureLocalStorage.getItem("medical-journal");
    if (typeof(previousData) === "string") {
        let contentArray = JSON.parse(previousData);
        return contentArray;
    } else {
        return [];
    }
}

export default getData;