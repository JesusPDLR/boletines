/* let links = document.querySelectorAll("a");
links.forEach(function(link) {
console.log(link);
});
*/

let links = document.querySelectorAll(".cerrar");

links. forEach(function(link) {
  link.addEventListener("click",function(ev){
    ev.preventDefault();

          let content = document.querySelector('.content');
            content.classList.remove("animate__backInDown");
            content.classList.remove("animate__animated");

            content.classList.add("animate__backOutUp");
            content.classList.add("animate__animated");

            setTimeout(function(){
              location.href ="/boletiness";
            },600);
    //return false;
  });
});

/* let iconos = document.querySelectorAll("i")
 iconos.forEach(function(icono){
   icono.classList.remove("fa-star");
   icono.classList.add("fa-star"); })*/
