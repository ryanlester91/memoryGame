const cardArray = [
    {
        name: 'Spade',
        img: 'images/spade.png'
    }, 
    {
        name: 'Club',
        img: 'images/club.png'
    },
    {
        name: 'Star',
        img: 'images/star.png'
    },
    {
        name: 'Heart',
        img: 'images/heart.png'
    },
    {
        name: 'Diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'Circle',
        img: 'images/circle.png'
        
    }, 
    {
        name: 'Club',
        img: 'images/club.png'
    },
    {
        name: 'Star',
        img: 'images/star.png'
    },
    {
        name: 'Heart',
        img: 'images/heart.png'
    },
    {
        name: 'Diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'Circle',
        img: 'images/circle.png'
    },
    {   name: 'Spade',
        img: 'images/spade.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/zorak.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        //cards[cardsChosenIds[0]].setAttribute('src', images/white.png)]
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}