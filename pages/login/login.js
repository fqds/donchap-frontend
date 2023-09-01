
import { backend_domen } from "/js/const.js"

function CreateSession() {
    const login_val = document.getElementById("login").value
    const password_val = document.getElementById("password").value
    const url = backend_domen + "/api/createSession"
    let payload = {
        name: login_val,
        password: password_val,
    }
    let post = JSON.stringify(payload)
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(post)
    xhr.onload = function () {
        console.log(xhr.response, JSON.parse(xhr.response)["error"])
        if (!JSON.parse(xhr.response)["error"]) {
            location.href = "/pages/main/main.html"
        }
    }
}

window.CreateSession = CreateSession