const searchForm = document.querySelector('#search')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#movie-name')
    fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
      .then(resp => resp.json())
      .then(data => {
            const image = document.querySelector('#image-container')
            const img = document.createElement('img')
            img.src = data[0].show.image.medium
            image.appendChild(img)
            const movieName = document.querySelector('#show-name')
            movieName.innerText = data[0].show.name
            const summary = document.querySelector('#summary')
            summary.innerHTML = data[0].show.summary
            const watchlist = document.querySelector('#listWatch')
            const addWatchlist = document.querySelector('#addWatchlist')
            addWatchlist.addEventListener('click', () => {
                const li = document.createElement('li')
                li.innerHTML = `<button class="remove">X</button>${data[0].show.name}`
                watchlist.appendChild(li)
                const remove = document.querySelector('.remove')
                remove.addEventListener('click', () => {
                const li = document.querySelector('li')
                li.remove()
            })
            const rated = document.querySelector('#ratedList')
            const like = document.querySelector('#like')
            like.addEventListener('click', () => {
                like.style.backgroundColor = "red"
                const li = document.createElement('li')
                li.innerHTML = `<button class="remove">X</button>${data[0].show.name}`
                rated.appendChild(li)
                const remove = document.querySelector('.remove')
                remove.addEventListener('click', () => {
                const li = document.querySelector('li')
                li.remove()
                })
            })
            })
        })
})

const showForm = document.querySelector('#show-form')
showForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const showName = document.querySelector('.show-name')
    const listWatch = document.querySelector('#listWatch')
    const li = document.createElement('li')
    li.textContent = showName.value
    listWatch.appendChild(li)
})
