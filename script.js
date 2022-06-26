let countries = ['USA', 'France', 'Italy', 'Brazil', 'Colombia', 'Belize', 'Venezuela'];

const input = document.querySelector('#mySelect');

for (let i = 0; i < countries.length; i++) {
  input.innerHTML += `<option value="${i}">${countries[i]}</option>`;
}
