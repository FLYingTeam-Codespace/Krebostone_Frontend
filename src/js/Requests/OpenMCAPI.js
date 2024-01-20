import axios from "axios";

const BASE_URL = "https://api.mcsrvstat.us/3/"


function getMCServerStatus(serverAddress) {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}${serverAddress}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        
        })
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export { getMCServerStatus };