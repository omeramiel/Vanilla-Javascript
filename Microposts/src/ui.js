class UI {
    constructor() {
        this.posts = document.querySelector('#posts');
        this.container = document.querySelector('.post-container');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.cardForm = document.querySelector('.card-form');
        this.endForm = document.querySelector('.end-form');
        this.forState = 'add';
    }

    changeFormState(type) {
        if (type === 'add') {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.classList.replace('btn-warning', 'btn-primary');
            document.querySelector('.post-cancel').remove();
            this.clearFields();
        } else if (type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.classList.replace('btn-primary', 'btn-warning');
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'post-cancel btn btn-outline-secondary btn-block';
            cancelBtn.appendChild(document.createTextNode('Cancel'));
            this.cardForm.insertBefore(cancelBtn, this.endForm);
        }
    }

    showPosts(posts) {
        let output = '';
        posts.forEach(({ id, title, body }) => {
            output += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-body">${body}</p>
                    <a href="#" class="edit card-link" data-id="${id}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${id}">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>
            `
        });
        this.posts.innerHTML = output;
    }

    fillFields(id, title, body) {
        this.idInput.value = id;
        this.titleInput.value = title;
        this.bodyInput.value = body;
        this.changeFormState('edit');
    }

    clearFields() {
        this.idInput.value = '';
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    showAlert(msg, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        this.container.insertBefore(div, this.posts);
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    clearAlert(msg, classes) {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

}

export const ui = new UI;