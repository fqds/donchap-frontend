import { request } from "/js/request.js"
import { BACKEND_URL } from "/js/const.js"

const lobby_name = window.location.href.split("/")[window.location.href.split("/").length - 1].replace("%20", " ")

async function RenderLobby() {

    const url = BACKEND_URL + "/api/private/lobby/player/connect"

    let payload = {
        lobby_name: lobby_name
    }

    const response = await request(url, payload);
    let data = await response.json()
    if (data["error"] !== undefined) {
        console.log(data["error"])
    } else {
    }
    console.log(data)

    let parameters = data["parameters"].sort(function (a, b) {
        return parseFloat(a.position) - parseFloat(b.position);
    })


    const parameter_names = document.getElementById("parameters")
    for (let i in parameters) {
        let param = document.createElement("div")
        param.id = parameters[i]["id"]
        let param_name = document.createElement("div")
        param_name.textContent = parameters[i]["name"]
        param.appendChild(param_name)
        parameter_names.appendChild(param)
    }

    let parameter_values = data["player_parameters"]
    for (let i in parameter_values) {
        let parameter_id = parameter_values[i]["parameter_id"]
        let value = parameter_values[i]["value"]
        let param = document.getElementById(parameter_id)
        let input = document.createElement("input")
        input.value = value
        param.appendChild(input)
        input.onchange = updateParameter(parameter_values[i]["parameter_id"], input)
    }
}

async function updateParameter(parameter_id, self) {
    const url = BACKEND_URL + "/api/private/lobby/player/update"

    let payload = {
        lobby_name: lobby_name,
        parameter_id: parameter_id,
        parameter_value: self.value
    }

    const response = await request(url, payload);
    let data = await response.json()
    if (data["error"] !== undefined) {
        console.log(data["error"])
    } else {
    }
    console.log(data)
}

RenderLobby()
