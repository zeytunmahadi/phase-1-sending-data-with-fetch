function addmovie(movie){
    const row = document.getElementById("card")
    const div = document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${movie.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
      <a href="#" class="btn btn-danger">delete</a>
    </div>
  </div>`
  row.appendChild(div)
} 




function getmovies(){
    fetch("http://localhost:3000/movies")
    .then (Response => Response.json())
    .then (movies=>{
        movies.forEach(addmovie)})

}


document.addEventListener('DOMContentLoaded',function(){
    getmovies()

})