
function initializeSavedServerManager() {
    if (localStorage.getItem("savedServers") == null) {
        localStorage.setItem("savedServers", JSON.stringify([]))
    }
}

function getSavedServers() {
    return JSON.parse(localStorage.getItem("savedServers"))
}

function createServerInstance(name, address, port) {
    return {
        name: name,
        address: address,
        port: port
    }
}

function addSavedServer(name, address, port) {
    let servers = getSavedServers()
    servers.push(createServerInstance(name, address, port))
    localStorage.setItem("savedServers", JSON.stringify(servers))
}

function removeSavedServer(server) {
    let servers = getSavedServers()
    servers = servers.filter(s => s.name != server.name)
    localStorage.setItem("savedServers", JSON.stringify(servers))
}

module.exports = {
    initializeSavedServerManager: initializeSavedServerManager,
    getSavedServers: getSavedServers,
    createServerInstance: createServerInstance,
    addSavedServer: addSavedServer,
    removeSavedServer: removeSavedServer
}