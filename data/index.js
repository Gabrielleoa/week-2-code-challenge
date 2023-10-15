
const baseURL= 'http://localhost:3000/characters'
fetch('baseURL')
    .then(res => res.json())
    .then(data => console.log(data))