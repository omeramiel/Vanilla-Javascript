const http = new EasyHttp;
const data = {
    name: 'Custom user',
    username: 'This is a custom user'
}

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(users => console.log(users))
//     .catch(err => console.log(`Error: ${err}`));

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(users => console.log(users))
//     .catch(err => console.log(`Error: ${err}`));

http.put('https://jsonplaceholder.typicode.com/users2/1', data)
    .then(users => console.log(users))
    .catch(err => console.log(`Error: ${err}`));

http.delete('https://jsonplaceholder.typicode.com/user2s/1')
    .then(res => console.log(res))
    .catch(err => console.log(`Error: ${err}`));
