
document.addEventListener("DOMContentLoaded", function(){

})
fetchAnimalData()


function fetchAnimalData(){
fetch("http://localhost:3000/characters",{
    method : "GET",
    headers : {
        "Content-Type": "application/json"
    }
})
.then(data => data.json())
.then (response => {
    characters = [...response]
    displayCharacters(response)
})
    }
function displayCharacterNames(characters) {
    characters.forEach((character) => {
        const characterBar = document.getElementById('character-bar');
        const detailedInfo = document.getElementById('detailed-info');
        const votesForm = document.getElementById('votes-form');
        const votesInput = document.getElementById('votes');
        const voteCount = document.getElementById('vote-count');
        const characterName = document.createElement('span');
            characterName.textContent = character.name;
    
              characterName.addEventListener('click', () => {
              });
    
              characterBar.appendChild(characterName);
          });
      }
    
      function displayCharacterDetails(character) {
      }
function fetchId (characters, id){
    const characterFound= characters.find((character)=> {
        return characters.id ===id
        

    })
    }


function getChatacterInfo(character){
    const image = document.querySelectorAll("#image")[0];
    image.setAttribute=('src', character.image);

}
