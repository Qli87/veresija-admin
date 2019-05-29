import axios from 'axios';

// const instance = axios.create({
//     baseURL: "http://www.mocky.io/v2"
// });

export function api_getUsers() {
    // console.log(instance);
    return axios.get('http://www.mocky.io/v2/5cd689b33000004b00606159');
    // return axios.get('http://www.mocky.io/v2/5cd522662e0000cd075274a9');
}

//napraviti upit koja vraca poslednjih 5 ,aktivnih, korisnika
export function api_getUsersHP() {
    return axios.get('http://www.mocky.io/v2/5ce152f0320000901c2f62cc');
    // return axios.get('http://www.mocky.io/v2/5cd051813200009b4400fc2e');
}

//napraviti upit koji vraca 10 usera kojima istice licence za 10ak dana
export function api_getLicencesHP() {
    return axios.get('http://www.mocky.io/v2/5cd69a363000006400606179');
}

//napraviti upit koji vraca samo neaktivne korisnike
export function api_getInactiveUsers() {
    return axios.get('http://www.mocky.io/v2/5cd547d92e00001c1852759f')
}

export function api_getExpiredLicences() {
    return axios.get('http://www.mocky.io/v2/5cd3f41b350000de307a51c5');
}

export function api_getLicencesExpSoon() {
    return axios.get('http://www.mocky.io/v2/5ce152f0320000901c2f62cc')
}

//dodati api za delete user
export function api_deleteUser(action) {
    return axios.post();
}

export function api_addUser(action) {
    console.log(action);
    return axios.post();
}

export function api_activateUser(action) {
    return axios.post();
}

export function api_blockUser(action) {
    return axios.post();
}

export function api_userDetails(action) {
    return axios.get(''+action.id);
}

export function api_editUser(action) {
    return axios.post('', action)
}