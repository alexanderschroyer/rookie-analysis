export const getAllRookies = () => {
    return fetch(`http://localhost:8088/rookies`)
        .then(res => res.json())
}

export const getAllNotes = () => {
    return fetch(`http://localhost:8088/notes`)
        .then(res => res.json())
}

export const getCurrentUser = () => {
    return localStorage.getItem("rookie_user")
}

