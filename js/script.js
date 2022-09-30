$(document).ready(function(){

    //aplica uma função click dos botões comprar
    $(".card-buy").click(function(){
        alert("Produto Indisponível");
    });

});




function showNavbarMobile() {
    //alterar o css da navbar
    const navbar = document.getElementById('menu');
    navbar.classList.toggle("showNavbar")
}