const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input#searchMovie')
    fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`).then(
        response.json()).then(
        data => {
            const movie = document.createElement('li')
            movie.className = 'listing'
            movie.innerHTML = `
                img src="${data[0].show.image.medium}"
                <h3>${data[0].show.name}</h3>
                <p>${data[0].show.summary}</p>
                `
            document.querySelector('div.container').appendChild(movie)
        })
    })