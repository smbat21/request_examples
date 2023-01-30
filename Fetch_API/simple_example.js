// get

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
    
// get  AsyncAwait (ES8)

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
}
getResource('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data));

// post

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Content-type': 'application/json'
    }
}).then(response => response.json())
  .then(json => console.log(json))
  .catch(console.log('Что-то пошло не так...'));

