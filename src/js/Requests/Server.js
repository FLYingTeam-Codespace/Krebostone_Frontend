
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

export { getServerStatus };