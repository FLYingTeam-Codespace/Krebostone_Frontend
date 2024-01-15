
const userTokenName = "krebostone:token";

function cacheToken(token) {
    localStorage.setItem(userTokenName, token);
}

function getCachedToken() {
    return localStorage.getItem(userTokenName);
}

function removeToken() {
    localStorage.removeItem(userTokenName);
}

export { cacheToken, getCachedToken, removeToken }