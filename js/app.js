
console.log('hello')
document.addEventListener("DOMContentLoaded", function(){

})
getCharacterList()
const baseURL='http://localhost:3000/characters'

function displayCharacterNames(characters) {
    characters.forEach((character) => {
        const characterName = document.createElement('span');
        characterName.textContent = character.name;

        characterName.addEventListener('click', () => {
        });

        characterBar.appendChild(characterName);
    });
}

function displayCharacterDetails(character) {
}

function getCharacterList(){
    fetch(baseURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
.then(response => response.json())
.then(data=> {
    const characterList = document.getElementById('character-list');

    data.characters.forEach(character=> {
        const li = document.createAttribute('li');
        li.innerText= character.name;
        characterList.appendChild(li);


        

    })
})

}

function displayCharacterNames(characters) {
    const characterArea= document.getElementById("character-bar")
    for(const character of characters) {
        console.log(character.name);
        const span = document.createElement("span");
        span.innerText= character.name;
        characterArea.appendChild(span);
        span.addEventListener('click', (event)=>{

        })
    }
      function displayCharacterDetails(character) {
      }
function fetchId (characters, id){
    const characterFound= characters.find(character => character.id===id);
    return characterFound;
    {
function getChatacterInfo(character){
    const image = document.querySelectorAll("#image")[0];
    image.setAttribute=('src', character.image);
        

    }
}

}}
