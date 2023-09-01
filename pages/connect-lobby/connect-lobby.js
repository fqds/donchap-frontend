
import { backend_domen } from "/js/const.js"

function ConnectLobby() {
    const lobby_name = document.getElementById("lobby_name").value
    const url = backend_domen + "/api/private/lobby/player/connect"
    let payload = {
        lobby_name: lobby_name,
        auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTQ5MTM3Mzh9.Nk_QhiE9759nMJFjUpsydzP4MZ3ug0uizcaqlJiotxU",
    }
    let post = JSON.stringify(payload)
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(post);
    xhr.onload = function () {
        console.log(xhr.response, JSON.parse(xhr.response)["error"])
        if (!JSON.parse(xhr.response)["error"]) {
            // location.href = "/pages/main/main.html";
        }
    }
}

window.ConnectLobby = ConnectLobby