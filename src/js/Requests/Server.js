
import axios from 'axios';

function getServerStatus(serverAddress, serverPort) {
    return new Promise((resolve, reject) => {
        axios.get(`http://${serverAddress}:${serverPort}/status`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export { getServerStatus };