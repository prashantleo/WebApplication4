  
import axios from "axios";

const baseUrl = "https://customermgmtapii.azurewebsites.net/api/"



export default {

    SALES(url = baseUrl + 'Sales/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
        
    }
}