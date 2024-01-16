
import axios from "axios";

function addBulletin(serverAddress, title, content) {
    return new Promise((resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('krebostone:token')
            },
            data : JSON.stringify({
                title: title,
                content: content
            })
        }
        axios.post(`${serverAddress}/bulletin/add`, config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

function getLatestBulletin() {
    return new Promise((resolve, reject) => {
        axios.get(`${localStorage.getItem('krebostone:serverAddress')}/bulletin/getLatest`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

function getAllBulletin() {
    return new Promise((resolve, reject) => {
        axios.post(`${localStorage.getItem('krebostone:serverAddress')}/bulletin/getAll`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

function removeBulletin(id) {
    return new Promise((resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('krebostone:token')
            },
            data : JSON.stringify({
                id: id
            })
        }
        axios.post(`${localStorage.getItem('krebostone:serverAddress')}/bulletin/remove`, config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export { addBulletin, getLatestBulletin, getAllBulletin, removeBulletin };