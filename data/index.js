const baseURL =  'http://localhost:3000/characters';
    fetchData();

const appendAnimalList = document.getElementById('animalList');
const animalImage =document.getElementById('placeholder-img')
const currentVotes= document.getElementById('currentVotes');
const voteForm = document.getElementById('inputVotes')
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
    const fetchAnimalData = (id) => {
        fetch(`http://localhost:3000/characters${id}`)
        .then(response => response.json())
        .then(data => {
            const { name, image, votes} = data;

            const detailsHTML = `
                <h2>${name}<h2>
                <img src= "${image}" alt="${name} Image"
                <p>currentVotes: ${currentVotes}</p>
                <button id = "voteButton">Vote</button>
            `;
            animalData.innerHTML= detailsHTML;

            const voteButton = document.getElementById('voteButton');
            voteButton.addEventListener('click', () => {
                alert("voted");
            });
         
        })
    };
    animals.forEach(animal => {
        const animalNameElement = document.createElement("li");
        animalNameElement.textContent = animal.name;
        animalNameElement.addEventListener("click", () => {
            fetchAnimalData(animal.id);
        });

        animalList.appendChild(animalNameElement);
    });
});
