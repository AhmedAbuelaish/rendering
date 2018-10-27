
function renderStudents(students) {
  
    var studentsHTML = students.map(function (student){
        var present = 'Absent'
        var color = 'pink'
        if(student.isPresent){
            present = 'Present'
            color = 'lightgreen'
        }
        var studentsHTML = `
            <div class="card" style="width: 18rem; margin:20px; box-shadow: 5px 5px 5px rgba(99,99,99,0.3)">
                <div class="card-body"; style="text-align: center; background-color:${color}">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text">${present}</p>
                </div>
            </div>
            `
        return studentsHTML
    })
    
    return studentsHTML.join('')

}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}