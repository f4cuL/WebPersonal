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