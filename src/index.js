// Globals
const url = 'http://localhost:3000/pups'
let selectedDog

// DOM Selectors
const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')

// Event Listeners

// Fetchers
function getAllDogs(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => iterateItems(data))
}

// Render Functions
function renderADog(dog){
    const dogNameSpan = document.createElement('span')
    dogNameSpan.textContent = dog.name
    dogBar.appendChild(dogNameSpan)
    dogNameSpan.addEventListener('click', () => {
        renderDogDetails(dog)
    })
}

function renderDogDetails(dog){
    selectedDog = dog
    const dogImage = document.createElement('img')
    const dogName = document.createElement('h2')
    const dogButton = document.createElement('button')
    dogImage.src = dog.image
    dogName.textContent = dog.name
    if (dog.isGoodDog){
        dogButton.textContent = 'Good Dog!'
    } else {
        dogButton.textContent = 'Bad Dog!'
    }
    dogInfo.replaceChildren(dogImage, dogName, dogButton)
}

function iterateItems(data){
    data.forEach(item => renderADog(item))
}

getAllDogs(url)

