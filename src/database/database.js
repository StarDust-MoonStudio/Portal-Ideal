const db = firebase.database()
let nameInput = document.getElementById('nameInput')
let ageInput = document.getElementById('ageInput')
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    create(nameInput.value.toLowerCase(), ageInput.value)
})

let data = {}

function create(name, age) {
    data = {
        name: name,
        age: age
    }

    let childs = db.ref().child('users').push(data)
    return childs
}

console.log(data.name)

db.ref('users')

