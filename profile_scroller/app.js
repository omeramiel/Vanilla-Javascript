const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name: 'Jane Smith',
        age: 26,
        gender: 'femal',
        lookingFor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/15.jpg'
    },
    {
        name: 'Jakie Dave',
        age: 37,
        gender: 'female',
        lookingFor: 'female',
        location: 'Colorado MA',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'Mark Green',
        age: 22,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    }
];

const profiles = profileGenerator(data);
document.addEventListener('DOMContentLoaded', nextProfile);
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const profile = profiles.next().value;
    if (profile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${profile.name}</li>
            <li class="list-group-item">Age: ${profile.age}</li>
            <li class="list-group-item">Location: ${profile.location}</li>
            <li class="list-group-item">Preference: ${profile.gender} looking for ${profile.lookingFor}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${profile.image}">`;
    } else {
        window.location.reload();
    }
}

// Generator
function* profileGenerator(profiles) {
    let nextIndex = 0;
    while (true) {
        yield profiles[nextIndex++];
    }
}

// Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return (nextIndex < profiles.length) ?
                { done: false, value: profiles[nextIndex++] } :
                { done: true }
        }
    };
}