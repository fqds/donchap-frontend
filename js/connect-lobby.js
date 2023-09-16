import { request } from "/js/request.js"
import { BACKEND_URL } from "/js/const.js"

async function ConnectLobby() {
    const url = BACKEND_URL + "/api/private/lobby/master/is"

    const lobby_name = document.getElementById("lobby_name").value

    let payload = {
        lobby_name: lobby_name,
        auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTQ5MTM3Mzh9.Nk_QhiE9759nMJFjUpsydzP4MZ3ug0uizcaqlJiotxU",
    }

    let response = await request(url, payload);
    let data = await response.json()
    if (data["is"] === true) {
        location.href = "/master/" + lobby_name
    } else if (data["error"] == "NoAccess") {
        location.href = "/player/" + lobby_name
    } else {
        console.log(data["error"])
    }
}

window.ConnectLobby = ConnectLobby