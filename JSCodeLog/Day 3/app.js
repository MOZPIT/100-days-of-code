/*jslint devel: true */

const cardArray = [
    {
        name: 'fries',
        img:  'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img:  'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

//This is a trick to sort the array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
//empty array to push items into the array
let cardsChosen = []
let cardsChosenIds = [] 
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }else if(cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        //if not a match then flip them back
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again :-(')    
    }
    
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    
    //if all the pairs are chosen without err
    if(cardsWon.length === (cardArray.length/2)){
        const fireworksDisplay = document.querySelector('#fireworksDisplay')
        const fireworksDisplay2 = document.querySelector('#fireworksDisplay2')
        var fireworks1 = document.createElement('div')
        var one = document.createElement('div')
        var fireworks2 = document.createElement('div')
        var two = document.createElement('div')
        var fireworks3 = document.createElement('div')
        var fireworks4 = document.createElement('div')
        
        fireworks1.setAttribute('class', 'fireworks')
        fireworks2.setAttribute('class', 'fireworks-2')
        fireworks3.setAttribute('class', 'fireworks-3')
        fireworks4.setAttribute('class', 'fireworks-4')
        
        one.setAttribute('class', 'one')
        two.setAttribute('class', 'two')
        
        fireworksDisplay.appendChild(fireworks1)
        fireworksDisplay.appendChild(one)
        resultDisplay.appendChild(fireworks2)
        resultDisplay.appendChild(two)
        fireworksDisplay2.appendChild(fireworks3)
        fireworksDisplay2.appendChild(two)
//        fireworksDisplay.appendChild(fireworks4)
//        fireworksDisplay.appendChild(one)
        
        resultDisplay.textContent = 'Congrats you found them all!!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        //timing event to call a function after certain amount of time has passed
        setTimeout(checkMatch, 500)
        
    }
}







