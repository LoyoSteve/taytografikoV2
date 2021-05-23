var contentCargar = document.getElementById('cabecera-menuPaginaCompleta');

//cargar menu
contentCargar.innerHTML = `<div id="head-icon-bars" class="head-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:rgb(255, 255, 255);">
    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path>
</svg>
</div>

<menu id="head-icon-menu-desplegado" class="head-icon-menu-desplegado">
<button id="head-icon-menu-desplegado-close" href="#">x</button>
<a href="/index.html">Inicio</a>
<a href="./pages/productos/Productos.html">Productos</a>
<a href="./pages/portafolio/porta.html">Portafolio</a>
</menu>
<style>
.cabecera-menuPaginaCompleta{
    position: fixed;
    width: 10%;
    height: 10%;
    top: 3%;
    right: 0;
    z-index: 10000;
}
.head-icon {
    width: 50%;
    cursor: pointer;
}
.head-icon :hover{
    background: rgba(0, 0, 0, 0.719);
    border-radius: 10px;
}

.head-icon-menu-desplegado {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    display: none;
    padding: 5%;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.842);
}

.head-icon-menu-desplegado a,
.head-icon-menu-desplegado button {
    color: white;
    text-decoration: none;
    font-family: var(--fontLeague);
    font-size: 3em;
    border: none;
    text-align: center;
    background: transparent;
    padding: 5%;
    cursor: pointer;
}

.head-icon-menu-desplegado a:hover {
    background: rgba(255, 255, 255, 0.322);
}

.head-icon-menu-desplegado button {
    position: absolute;
    top: 0;
    right: 5%;
}

.head-icon-menu-desplegado button:focus {
    outline: none;
}
</style>`;

var menuBar = document.getElementById('head-icon-bars'),
    menu = document.getElementById('head-icon-menu-desplegado'),
    menuBarClose = document.getElementById('head-icon-menu-desplegado-close');

menuBar.onclick = (e) =>{
    e.preventDefault();
    menu.style.display = 'flex';
    menu.animate([
        //keyframes
        {transform:"translate(600px)"},
        {transform:"translate(0px)"}
    ],{
        duration: 1000,
        iterations:1,
        fill:"forwards",
        easing: "ease"
    });
}

menuBarClose.onclick = (e) =>{
    e.preventDefault();
    menu.animate([
        //keyframes
        {transform:"translate(0px)"},
        {transform:"translate(600px)"}
    ],{
        duration: 1000,
        iterations:1,
        fill: "forwards",
        easing: "ease"
    });
}