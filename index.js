
function fetchAnimalData(){
fetch("http://localhost:3000/characters",{
    method : "GET",
    headers : {
        "Content-Type": "application/json"
    }
})
//.then(data => data.json())
.then( response => {
    //displayCharacters(response)
   // console.log(displayCharacters)
   return response.json();

})
.then(data => {
    console.log('recieved', data);
})
}
function getDisplay(){
    const characterArea = document.getElementById("character-bar")
    for(character of characters){
        console.log(characters.name)
        const span = document.createElement("span");
        span.innerText = characters.name;
        characterArea.appendChild(span)
        span.setAttribute('id', characters.id)

        span.addEventListener('click', (event)=> {
            displayCharacterDetails(characterById)

        });
        characterArea.appendChild(span)
    }
}
function fetchId (characters, id){
    console.log(id)
    return characters.find(character)
        return characters.id ===id
    }


function getChatacterInfo(character){
    const image = document.querySelectorAll("#image")

}
