const baseURL =  'http://localhost:3000/characters';
fetch(baseURL)
    .then(response => {
        if (!response.ok){
            throw new Error('not ok')
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.error('error with fetch', error);
    });
document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById('animalList');
    //const animalData = document.getElementById('animalData');
    const fetchAnimalData = (animalId) => {
        fetch(1)
    }
})