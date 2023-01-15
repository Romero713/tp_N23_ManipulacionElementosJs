window.addEventListener('load',() =>{
    console.log('documento vinculado con exito')

    let $ = document.querySelector(e)

    let section = $('section')

    let h1 = $('h1')

    let article = $('article')

   
   
    h1.innerHTML += 'AGREGAR PELÍCULAS'
    h1.classList.add('titulo')

    article.classList.add('fondoTransparente')
    
    section.classList.add('fondoCRUD')

   


})