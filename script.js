let about = document.querySelector(".about-me")
let btn = document.querySelector("#boton")

btn.addEventListener('click', function () {
  
    if (about.classList.contains('oculto')) {
      
      about.classList.remove('oculto')
      about.classList.replace("animate__fadeOut","animate__fadeIn")
    }
    else
    {   about.classList.replace("animate__fadeIn","animate__fadeOut")
        setTimeout(function(){about.classList.add('oculto');},1000)
    }
    
  });

let media = document.querySelector(".content-media")
let btn2 = document.querySelector("#boton2")
btn2.addEventListener('click', function () {
  
    if (media.classList.contains('oculto')) {
      media.classList.remove('oculto')
      media.classList.replace("animate__backOutRight","animate__bounceInRight")
    }
    else
    {
      media.classList.replace("animate__bounceInRight","animate__backOutRight")
        setTimeout(function(){media.classList.add('oculto');},1000)
    }
    
  });

let edu = document.querySelector(".educacion")
let btn3 = document.querySelector("#boton3")
btn3.addEventListener('click', function () {
  
    if (edu.classList.contains('oculto')) {
      edu.classList.remove('oculto')
      edu.classList.replace("animate__zoomOutLeft","animate__zoomInLeft")
    }
    else
    {
      edu.classList.replace("animate__zoomInLeft","animate__zoomOutLeft")
      setTimeout(function(){edu.classList.add('oculto');},1000)
    }
    
  });

let cursos = document.querySelector(".cursos")
let btn4 = document.querySelector("#boton4")
btn4.addEventListener('click', function () {
  
    if (cursos.classList.contains('oculto')) {
      cursos.classList.remove('oculto')
      cursos.classList.replace("animate__bounceOutDown","animate__bounceInDown")
    }
    else
    {
      cursos.classList.replace("animate__bounceInDown","animate__bounceOutDown")
      setTimeout(function(){cursos.classList.add('oculto');},1000)
    }
    
  });
  
let portal = document.querySelector(".portal");
portal.addEventListener("click",function(){
  portal.classList.add("animate__wobble");
})