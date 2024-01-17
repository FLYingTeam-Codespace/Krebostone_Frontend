
import axios from "axios";

function addBulletin(title, content) {
    console.log("Token:" + localStorage.getItem('krebostone:token'))
    return new Promise((resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('krebostone:token')
            },
        }
        let data = JSON.stringify({
            title: title,
            content: content
        })
        console.log(config);
        axios.post(`${localStorage.getItem("krebostone:serverAddress")}/bulletin/add`, data, config)
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
        axios.post(`${localStorage.getItem('krebostone:serverAddress')}/bulletin/getLatest`)
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
        }
        let data = JSON.stringify({
            id: id
        })
        axios.post(`${localStorage.getItem('krebostone:serverAddress')}/bulletin/remove`, data, config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export { addBulletin, getLatestBulletin, getAllBulletin, removeBulletin };