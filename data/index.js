const baseURL =  'http://localhost:3000';
fetch(baseURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
       
    });
document.addEventListener("DOMContentLoaded", () => {
    console.log('after DOM loaded')
})
    console.log('Before DOM Loads')
    console.log(document.querySelector('div')) 

    addEventListener('submit', (event) => {});
    onsubmit = (event) => {};
    event.preventDefault();
       
animals.forEach(animal => {
    const animalNameElement = document.createElement("li");
    animalNameElement.textContent = animal.name;
    animalNameElement.addEventListener("click", () => {
        fetchAnimalData(animal.id);
    });

    animalList.appendChild(animalNameElement);
});