
import axios from 'axios';

function getServerStatus(serverAddress, serverPort) {
    console.log(`${serverAddress}:${serverPort}/getServerStatus`);
    return new Promise((resolve, reject) => {
        axios.get(`${serverAddress}:${serverPort}/getServerStatus`)
            .then((response) => {
                resolve(response.data);
                localStorage.setItem('krebostone:serverAddress', `${serverAddress}:${serverPort}`);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

function getKrebostoneServerInfo() {
    return new Promise((resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('krebostone:token')
            },
        }
        axios.post(`${localStorage.getItem('krebostone:serverAddress')}/server/getAll`, {}, config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export { getServerStatus, getKrebostoneServerInfo };