function easyHttp() {
    this.http = new XMLHttpRequest();
}

// GET
easyHttp.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback(`Error: ${this.http.status}`);
        }
    }
    this.http.send();
}

// POST
easyHttp.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        if (this.http.status === 201) {
            callback(null, this.http.responseText);
        } else {
            callback(`Error: ${this.http.status}`);
        }
    }
    this.http.send(JSON.stringify(data));
}

// PUT
easyHttp.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback(`Error: ${this.http.status}`);
        }
    }
    this.http.send(JSON.stringify(data));
}

// DELETE
easyHttp.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, 'Post deleted');
        } else {
            callback(`Error: ${this.http.status}`);
        }
    }
    this.http.send();
}