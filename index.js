
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
    return character.find(character)
        return character.id ===id
    }


function getChatacterInfo(character){
    const image = document.querySelectorAll("#image")

}
