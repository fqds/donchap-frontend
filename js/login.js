import { backend_domen } from "/js/const.js"

async function CreateSession() {
  async function login() {
    const login_val = document.getElementById("login").value
    const password_val = document.getElementById("password").value
    let payload = {
      name: login_val,
      password: password_val,
    }
    const url = backend_domen + "/api/createSession"
    return await fetch(url, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  (async () => {
    const response = await login();
    console.log(document.cookie)
  })();
}

window.CreateSession = CreateSession