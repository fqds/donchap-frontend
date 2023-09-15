import { request } from "/js/request.js"
import { BACKEND_URL } from "/js/const.js"

async function CreateSession() {
    const url = BACKEND_URL + "/api/createSession"

    const login_val = document.getElementById("login").value
    const password_val = document.getElementById("password").value

    let payload = {
        name: login_val,
        password: password_val,
    }

    const response = await request(url, payload);
    let data = await response.json()
    console.log(data, data["error"])
    if (data["is"] === true) {
        location.href = "/main"
    } else {
        console.log("incorrect login or password")
    }
}

window.CreateSession = CreateSession