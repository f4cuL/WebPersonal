let about = document.querySelector(".about-me")
let btn = document.querySelector("#boton")
btn.addEventListener('click', function () {
  
    if (about.classList.contains('oculto')) {
      
      about.classList.remove('oculto')
      
    }
    else
    {
        about.classList.add('oculto');
    }
    
  });

let media = document.querySelector(".content-media")
let btn2 = document.querySelector("#boton2")
btn2.addEventListener('click', function () {
  
    if (media.classList.contains('oculto')) {
      media.classList.remove('oculto')
    }
    else
    {
        media.classList.add('oculto');
    }
    
  });

let edu = document.querySelector(".educacion")
let btn3 = document.querySelector("#boton3")
btn3.addEventListener('click', function () {
  
    if (edu.classList.contains('oculto')) {
      edu.classList.remove('oculto')
    }
    else
    {
        edu.classList.add('oculto');
    }
    
  });

let cursos = document.querySelector(".cursos")
let btn4 = document.querySelector("#boton4")
btn4.addEventListener('click', function () {
  
    if (cursos.classList.contains('oculto')) {
      cursos.classList.remove('oculto')
    }
    else
    {
        cursos.classList.add('oculto');
    }
    
  });
  