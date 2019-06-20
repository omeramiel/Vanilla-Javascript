document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => console.log('Error: ' + err))
}

function getJSON() {
    fetch('post.json')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `<ul>
                <li type='square'>${post.title}</li>
                <li>${post.body}</li>
                </ul>
                `
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log('Error: ' + err))
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `<ul>
                <li type='square'>ID: ${post.id}</li>
                <li>Login: ${post.login}</li>
                </ul>
                `
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log('Error: ' + err))
}