const api = 'https://opentdb.com/api.php?amount=10&type=multiple'

const headers = {
    'Accept' : 'Application/json',
}

export const get = () => fetch(api, {
    method: 'GET',
    headers
}).then(res => res.json())
.then(data => data.results)