/*
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
*/
function fetchAnimalData(){
fetch("http://localhost:3000/characters",{
    method : "GET",
    headers : {
        "Content-Type": "application/json"
    }
}).then(data => data.json())
.then( response => {
    displayCharacters(response)
    console.log(displayCharacters)
})
}
function getDisplay(){
    const characterbar = document.getElementById("character-bar")
    for(character of characters){
        console.log(character.name)
        const span = document.createElement("span");
        span.innerText = character.name;
        characterbar.appendChild(span)
        span.setAttribute('id', character.id)

        span.addEventListener('click', (event)=> {
            displayCharacterDetails(characterById)

        });
        characterbar.appendChild(span)
    }
}
function fetchId (character, id){
    console.log(id)
    return character.find(character)=> {
        return character.id ===id
    }

}