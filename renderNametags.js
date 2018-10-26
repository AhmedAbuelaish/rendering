
function renderNametags(nametags) {
  
    var nametagsHTML = nametags.map(function (name){
        var nametagsHTML = `
            <div class="card" style="width: 18rem; margin:20px; box-shadow: 5px 5px rgba(99,99,99,0.3)">
                <div style="background-color:blue; color:white; text-align: center;">
                    <h3>Hello, my name is:</h3>
                </div>
                <div class="card-body"; style="text-align: center;">
                    <h3>${name}</h3>
                </div>
            </div>
            `
        return nametagsHTML
    })
    
    return nametagsHTML.join('')

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}