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
    console.log('voted!')
    const animalList = document.getElementById('animalList');
            const voteButton = document.getElementById('voteButton');
            voteButton.addEventListener('click', () => {
                alert("voted");
            });
         
        })
animals.forEach(animal => {
    const animalNameElement = document.createElement("li");
    animalNameElement.textContent = animal.name;
    animalNameElement.addEventListener("click", () => {
        fetchAnimalData(animal.id);
    });

    animalList.appendChild(animalNameElement);
});