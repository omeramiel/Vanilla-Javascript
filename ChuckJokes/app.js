document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();
  let numOfJokes = document.getElementById('number').value;
  console.log(numOfJokes);
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numOfJokes}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output;
      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output = '<li>Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}