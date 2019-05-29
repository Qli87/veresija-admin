import axios from 'axios';

const instance = axios.create({
    baseURL: "http://www.mocky.io/v2"
});

export function api_getAdmins() {
    return axios.get(instance.baseURL+'/');
}

export function api_getTranslations() {
    return axios.get('http://www.mocky.io/v2/5cee691f30000095786e9b75');
    // return axios.get('http://www.mocky.io/v2/5cd40a2a35000089007a52ab');
}

export function api_login(action) {
    console.log('api action: ', action)
}