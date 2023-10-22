const baseURL = 'https://my-json-server.typicode.com/gabrielleoa/week-2-code-challenge/characters'

getCharacterList()
function getCharacterList(){
    fetch(baseURL) 
        .then((response) => response.json())
        .then(data => {
            displayCharacterNames(data),
        console.log(data);
 
        
        })
    
    }

function displayCharacterNames(characters) {
    const characterArea= document.getElementById("character-bar")
    for(const character of characters) {
        console.log(character)
        let animals = document.getElementById("name")
        let li = document.createElement('li')
        li.textContent= character.name
        li.addEventListener('click', () => getCharacterInfo(character));
        animals.appendChild(li)
    }}
    function getCharacterInfo(character){
        const characterDetails = document.getElementById('characterInfo');
        characterDetails.innerHTML = `<h2 id="data">${character.name}</h2>
        <img src="${character.image}" alt="${character.name} Image">
        <p>Votes: ${character.votes}</p>`;
        preventDefault()
    }
