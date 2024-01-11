
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

export { login }