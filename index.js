
// updating the dom
function addmovie(movie){
    const row = document.getElementById("card")
    const div = document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${movie.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
      <button><a href="#" class="btn btn-danger">delete</a></button>
    </div>
  </div>`
  row.appendChild(div)
 
div.querySelector('button').addEventListener('click' ,function(){
  div.remove()
  deleteData(movie.id);
})
function deleteData(){
  fetch(`http://localhost:3000/movies/${movie.id}`,{
    method: 'DELETE',
    header: {
      'content-Type':'application/JSON'
    },

  })
}
        

  
}



//fetching the data from db.json

function getmovies(){
    fetch("http://localhost:3000/movies")
    .then (Response => Response.json())
    .then (movies=>{
        movies.forEach(addmovie)})

}

//loading other content bfre js

document.addEventListener('DOMContentLoaded',function(){
    getmovies()

})

//posting a new data
document.querySelector('form').addEventListener("submit",function(e){
  createmovie()
  e.preventDefault()

})

function createmovie(){
  let title = document.getElementById("title")
  let plot = document.getElementById('plot')
  let poster =document.getElementById("poster")

const object ={
  Title:title.value,
  Plot:plot.value,
  Poster:poster.value

}
fetch('http://localhost:3000/movies',{
  method: 'POST',
  header: {
    'content-Type':'application/JSON'
  },
  body:JSON.stringify(object)
})
}

