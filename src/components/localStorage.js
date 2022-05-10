const STORAGE_KEY = 'addedUsers'

export let getUsers = () => {
    let usersJSON = localStorage.getItem(STORAGE_KEY)
    if (usersJSON) {
        return JSON.parse(usersJSON)
    } else {
        return []
    }
}

export let addUser = (user) => {
    let currentUsers = getUsers();
    let updatedUsers = [user, ...currentUsers]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers))
}