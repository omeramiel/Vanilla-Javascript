class EasyHttp {

    async get(url) {
        const response = await fetch(url);
        if (response.status === 200) {
            return response.json();
        } else {
            throw response.status;
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
            return response.json();
        } else {
            throw response.status;
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
            return response.json();
        } else {
            throw response.status;
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
            return 'Resource deleted';
        } else {
            throw response.status;
        }
    }
}