
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    
    // var circlesHTML = circles.map(function (circle) {
    //     var circlesHTML = `
    //      <div class="circle" style="border-radius:${circle.radius}px; border:2px solid black"></div>
    //     `
    //     return circlesHTML;
    // })
    // var finalHTML += circlesHTML.join('');

    // return finalHTML;

    var circlesHTML = circles.map(function (circle){
        var circlesHTML = `
            <div class="text-center mt-5" style="width:${circle.radius*2}px;height:${circle.radius*2}px;background-color:${circle.color};border-radius:50%"></div>
            `
        return circlesHTML
    })
    
    return circlesHTML.join('')

}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}