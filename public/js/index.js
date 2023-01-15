window.addEventListener('load',() =>{
    console.log('documento vinculado con exito')

    let $ = document.querySelector(e)

    let main = $('main')
    let h2 = $('h2')
    let a = $('a')
    let p = document.querySelectorAll('p')

    let respuesta = prompt('Ingrese su nombre')

/*     console.log(respuesta); */

    main.style.display = 'block'

    if (respuesta === "") {
        h2.innerHTML += "invitado"
    } else {
        h2.innerHTML += respuesta
    }

    h2.style.textTransform = "uppercase"

    a.style.color = "#E51B3E"

    let fondo = confirm('Desea colocar un fondo?')
    /* console.log(fondo); */

    if (fondo) {
        $('body').classList.add('fondo')
    } else {
        
    }
    
    console.log(p);

    for (let i = 0; i < p.length; i++) {
        if (i % 2 === 0 ) {
            p[i].classList.add('destacadoPar')
        } else {
            p[i].classList.add('destacadoImpar')
        }
        
    }
    /* en las etiquetas p debe ser seleccionadas todas,(queryselectorAll),por consola nos devuelve un array,con el for podemos recorrer este array de p,'p' sera el array a recorrer, poniendo la condicion que si el elemento 'i' es modulo de 2 resultante 0 adheriremos el destacadoPar ,caso contrario será impar. */
})






