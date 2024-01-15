
import axios from "axios";

function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log(localStorage.getItem("krebostone:serverAddress"))
        axios.post(localStorage.getItem("krebostone:serverAddress") + "/users/login", {
            username: username,
            password: password
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

function loginWithToken(serverAddress, token) {
    return new Promise((resolve, reject) => {
        axios.post(`${serverAddress}/users/loginWithToken`, {
            token: token
        }, {
            headers: {
                "Authorization": token
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

export { login, loginWithToken }