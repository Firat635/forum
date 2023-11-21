const firstname=document.getElementById('name')
const surname=document.getElementById('surname')
const age=document.getElementById('age')
const id=document.getElementById('id')
const btn=document.getElementById('btn')

btn.addEventListener("submit", function (event) {
    event.preventDefault();

fetch("https://655c3300ab37729791aa0bf5.mockapi.io/students/students",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
        name:firstname.value,
        surname: surname.value,
        age: age.value,
        studentID:id.value,
    }),
    
})
.then((response) =>response.json())
.then(data=>{
    console.log(
        data
      );
})
});