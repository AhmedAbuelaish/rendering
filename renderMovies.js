
function renderMovies (movies) {
  var moviesHTML = movies.map(function (currentMovie) {
    var rotTomatoPercentage = currentMovie.rottenTomatoesRating * 100
    var moviesHTML = `
        <div class="card" style="height: 18rem;">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="${currentMovie.poster}" alt="${currentMovie.title}" class="img-fluid" style="height:100%">
            </div>
            <div class="col-auto">
                <div class="card-block px-2">
                <h5 class="card-title">${currentMovie.title}</h5>
                <p class="card-text">${currentMovie.year}</p>
                <p class="card-text">IMDB:</p>
                <p class="card-text">${currentMovie.imdbRating} / 10</p>
                <p class="card-text">Rotten Tomatoes:</p>
                <p class="card-text">${rotTomatoPercentage}%</p>
                </div>
            </div>
        </div>
        </div>
        `
    return moviesHTML
  })

  return moviesHTML.join('')
}

function movies () {
  var content = document.getElementById('content')

  var moviesAbstraction = [
    {
      title: 'The Dark Knight',
      year: 2008,
      imdbID: 'tt0468569',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.94
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      imdbID: 'tt1345836',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
      imdbRating: 8,
      rottenTomatoesRating: 0.82
    },
    {
      title: 'The Incredibles',
      year: 2004,
      imdbID: 'tt0317705',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.91
    }
  ]

  content.innerHTML = renderMovies(moviesAbstraction)
}
