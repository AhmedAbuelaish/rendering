
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder

    var pokerHandHTML = pokerHand.map(function (card){
        var pokerHandHTML = `
            <img src="cards/${card.value}${card.suit}.png" alt="Single Card" height=200px style="box-shadow:2px 2px 2px rgba(99,99,99,0.3)">
        `
        console.log(pokerHandHTML)
        return pokerHandHTML
    })

    return pokerHandHTML.join('')

}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}