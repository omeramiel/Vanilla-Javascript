class EasyHttp {

    async get(url) {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        } else {
            throw await response.status;
        }
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 201) {
            return await response.json();
        } else {
            throw await response.status;
        }
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            return await response.json();
        } else {
            throw await response.status;
        }
    }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (response.status === 200) {
            return await 'Resource deleted';
        } else {
            throw await response.status;
        }
    }
}

export const http = new EasyHttp;