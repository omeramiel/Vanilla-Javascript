document.addEventListener('submit', validateForm);

function validateForm(e) {
    const name = document.getElementById('name');
    const zip = document.getElementById('zip');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    const validName = /^\D{2,10}$/;
    const validZip = /^[0-9]{5}(-[0-9]{4})?$/;
    const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const validPhone = /^(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!validName.test(name.value)) {
        console.log('invalid name');
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
    }

    if (!validZip.test(zip.value)) {
        console.log('invalid zip');
        zip.classList.add('is-invalid')
    } else {
        zip.classList.remove('is-invalid')
    }

    if (!validEmail.test(email.value)) {
        console.log('invalid email');
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }

    if (!validPhone.test(phone.value)) {
        console.log('invalid phone');
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
    e.preventDefault();
}

