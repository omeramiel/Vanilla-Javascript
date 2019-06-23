import { http } from "./http";
import { ui } from "./ui";

const baseUrl = 'http://localhost:3000/posts';

document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('.card-form').addEventListener('click', cancelUpdate);
document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', editPost);

function getPosts() {
	http.get(baseUrl)
		.then(posts => ui.showPosts(posts))
		.catch(err => console.log(err));
}

function submitPost() {
	let post = {
		title: ui.titleInput.value,
		body: ui.bodyInput.value
	};
	if (!post.title || !post.body) {
		ui.showAlert('Please fill in all fields', 'alert alert-danger')
		return;
	}
	const id = ui.idInput.value;
	if (id) {
		post = { ...post, id }
		http.put(`${baseUrl}/${id}`, post)
			.then(post => {
				ui.showAlert('Post updated', 'alert alert-success');
				ui.changeFormState('add');
				ui.clearFields();
				getPosts();
			})
			.catch(err => console.log(err));
	} else {
		http.post(baseUrl, post)
			.then(_ => {
				ui.showAlert('Post added', 'alert alert-success');
				ui.clearFields();
				getPosts();
			})
			.catch(err => console.log(err));
	}
}

function deletePost(e) {
	if (e.target.parentElement.classList.contains('delete')) {
		const id = e.target.parentElement.dataset.id;
		if (confirm('Are you sure?')) {
			http.delete(`${baseUrl}/${id}`)
				.then(_ => {
					ui.showAlert('Post Deleted', 'alert alert-success');
					getPosts();
				})
				.catch(err => console.log(err));
		}
	}
	e.preventDefault();
}

function editPost(e) {
	if (e.target.parentElement.classList.contains('edit')) {
		const id = e.target.parentElement.dataset.id;
		const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
		const body = e.target.parentElement.previousElementSibling.textContent;
		ui.fillFields(id, title, body);
	}
	e.preventDefault();
}

function cancelUpdate(e) {
	if (e.target.classList.contains('post-cancel')) {
		ui.changeFormState('add');
	}
	e.preventDefault();
}



