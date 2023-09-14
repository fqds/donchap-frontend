import { backend_domen } from "/js/const.js"

async function ConnectLobby() {
    const lobby_name = document.getElementById("lobby_name").value
    const url = backend_domen + "/api/private/lobby/player/connect"
    let payload = {
        lobby_name: lobby_name,
        auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTQ5MTM3Mzh9.Nk_QhiE9759nMJFjUpsydzP4MZ3ug0uizcaqlJiotxU",
    }
    await fetch(url, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

window.ConnectLobby = ConnectLobby