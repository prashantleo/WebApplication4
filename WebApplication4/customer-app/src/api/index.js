import axios from "axios";

const BASE_URL = 'https://customermgmtapii.azurewebsites.ne/api/';

export const ENDPIONTS = {
    CUSTOMER: 'Customers'
}

export  const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}