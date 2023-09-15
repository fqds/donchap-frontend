export async function request(url, payload) {
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