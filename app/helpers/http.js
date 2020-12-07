export default async function HttpRequest(props) {
    let { url, method, body, headers, cbSuccess, cbError } = props

    let options = {}

    if (method == 'GET' || method == 'HEAD')
        options = { method, headers }
    else
        options = { method, body, headers }
    await fetch(url, options)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => cbError(err))
}