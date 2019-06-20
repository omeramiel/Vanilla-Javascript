class EasyHttp {

    get = (url) => new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then((data) => resolve(data))
            .catch(err => reject(err))
    })

    post = (url, data) => new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

    put = (url, data) => new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

    delete = url => new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(() => resolve('User deleted'))
            .catch(err => reject(err))
    })
}


async function getAsync(url) {
    return await new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data =>  resolve(data))
            .catch(err => reject(err))
    });
} 

async function getAsync2(url) {
    return await (await fetch(url)).json();
} 