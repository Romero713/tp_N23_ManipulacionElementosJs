window.addEventListener('load',() =>{
    console.log('documento vinculado con exito')

    let $ = document.querySelector(e)

    let body = $('body')

    let h1 = $('h1')

    let darkMode = confirm('Desea modo oscuro?')

    if (darkMode) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    }
   
    h1.innerHTML = 'LISTADO DE PELÍCULAS'
    h1.style.color = "white"
    h1.style.backgroundColor = "teal"
    h1.style.padding = "20px"


})