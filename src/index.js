document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    const btn = document.querySelector('button.btns')
    const remove = document.querySelector('button.remove')
    const like = document.querySelector('button.like')

    //prevents the form on the page from reloading
    form.addEventListener('submit', handleForm)

    //adds a show name to the watchlist once the add to watchlist button is clicked.
    btn.addEventListener('click', watchList)

    //removes the show from watch list
    remove.addEventListener('click', (e) => {
        const item = document.querySelector('li')
        item.remove()
    })

    //changes the color of the button when clicked
    like.addEventListener('click', (e) => {
        like.style.backgroundColor = 'red'
    })


    function handleForm(e) {
            e.preventDefault()
            const input = document.querySelector('input#searchMovie')
            fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
            .then(response => response.json())
            .then(data => {
                    const movie = document.querySelector('div.container')
                    const poster = document.createElement('div')
                    poster.innerHTML = `
                        <img src=${data[0].show.image.medium}>
                        <div class="details">
                        <p>${data[0].show.name}</p>
                        <p>${data[0].show.summary}</p>
                        </div>
                        <div class="buttons">
                        <button class="towatch">Add to Watch</button>
                        <button class="like">Like</button>
                        </div> 
                        `
                    movie.appendChild(poster)
                })
    }


    function watchList() {
        const watchlist = document.querySelector('div.watch')
        const item = document.createElement('li')
        const input = document.querySelector('input#searchMovie')
        fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
        .then(response => response.json())
        .then(data => {
            item.innerHTML = `
                <button class="remove">X</button> ${data[0].show.name}
                `
        watchlist.appendChild(item)
        })
    }
})