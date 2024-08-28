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

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/zorak.jpg')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()