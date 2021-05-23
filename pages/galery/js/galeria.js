let datos_galeria = [
    {
        id: "0",
        titulo: "trabajo 1",
        fecha: "02-02-2021",
        descripcion: [
            "lorem ip su odoro",
            "lorem ip su dorros"],
        detallesTitulo :[
            "detalle 1",
            "detalle 2",
            "detalle 3"
        ],
        detallesDescr:[
            "lorem detalle 1",
            "lorem detalle 2",
            "lorem detalle 3"
        ],
        imagenes:[
            "img/trabajos/t1/f1.jpg",
            "img/trabajos/t1/f2.jpg"
        ]
    },
    {
        id: "1",
        titulo: "trabajo 2",
        fecha: "02-02-2021",
        descripcion: [
            "lorem ip su odoro",
            "lorem ip su dorros"],
        detallesTitulo :[
            "detalle 1",
            "detalle 2",
            "detalle 3"
        ],
        detallesDescr:[
            "lorem detalle 1",
            "lorem detalle 2",
            "lorem detalle 3"
        ],
        imagenes:[
            "img/trabajos/t2/f1.png",
            "img/trabajos/t2/f2.jpg"
        ]
    },
    {
        id: "2",
        titulo: "trabajo 3",
        fecha: "02-02-2021",
        descripcion: [
            "lorem ip su odoro",
            "lorem ip su dorros"],
        detallesTitulo :[
            "detalle 1",
            "detalle 2",
            "detalle 3"
        ],
        detallesDescr:[
            "lorem detalle 1",
            "lorem detalle 2",
            "lorem detalle 3"
        ],
        imagenes:[
            "img/trabajos/t3/f1.png",
            "img/trabajos/t3/f2.jpg"
        ]
    }
];


//cargar galeria
var galeria_item_info = document.getElementById('sec2-gallery-item');

var componenteItemInfo = `
<div class="sec2-gallery-item-container-bg" style="background-image: url(${datos_galeria[0].imagenes[0]});">
</div>

<div class="sec2-gallery-item-container-info">
    <div class="sec2-gallery-item-title">
        <h1>${datos_galeria[0].titulo}</h1>
    </div>
    <div class="sec2-gallery-item-actions">
        <a id="item-actions-ver" href="#" value="${datos_galeria[0].id}"><svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path
                        d="M508.745 246.041C504.171 239.784 395.188 92.835 255.997 92.835C116.806 92.835 7.818 239.784 3.249 246.035C-1.083 251.971 -1.083 260.022 3.249 265.958C7.818 272.215 116.806 419.164 255.997 419.164C395.188 419.164 504.171 272.214 508.745 265.963C513.083 260.028 513.083 251.971 508.745 246.041ZM255.997 385.406C153.468 385.406 64.667 287.873 38.38 255.988C64.633 224.075 153.248 126.593 255.997 126.593C358.521 126.593 447.316 224.109 473.614 256.011C447.361 287.923 358.746 385.406 255.997 385.406Z"
                        fill="black" />
                    <path
                        d="M255.997 154.725C200.155 154.725 154.722 200.158 154.722 256C154.722 311.842 200.155 357.275 255.997 357.275C311.839 357.275 357.272 311.842 357.272 256C357.272 200.158 311.839 154.725 255.997 154.725ZM255.997 323.516C218.767 323.516 188.481 293.229 188.481 256C188.481 218.771 218.768 188.484 255.997 188.484C293.226 188.484 323.513 218.771 323.513 256C323.513 293.229 293.227 323.516 255.997 323.516Z"
                        fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="511.999" height="511.999" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span class="title">Ver</span>
        </a>
        <a id="item-actions-cuadricula" href="#"><svg viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);">
                <path
                    d="M20,2H8C6.897,2,6,2.897,6,4v12c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M8,16V4h12 l0.002,12H8z">
                </path>
                <path d="M4,8H2v12c0,1.103,0.897,2,2,2h12v-2H4V8z"></path>
                <path d="M12 12L11 11 9 14 19 14 15 8z"></path>
            </svg>
            <span class="title">Cuadricula</span>
        </a>
        <a id="item-actions-ante" href="#"><svg viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);">
                <path d="M15 19L15 5 7 12z"></path>
            </svg>
            <span class="title">Anterior</span>
        </a>
        <a id="item-actions-sig" href="#"><svg viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);">
                <path d="M9 19L17 12 9 5z"></path>
            </svg>
            <span class="title">Siguiente</span>
        </a>
    </div>
</div>`;

galeria_item_info.innerHTML=componenteItemInfo;

//interfaces
var presentacion = document.getElementById('sec1'),
    galeria = document.getElementById('sec2'),
    info = document.getElementById('sec2-gallery-item-info');

//botones acciones de cada item galeria
var inicio = document.getElementById('sec1-vergallery'),
    ver = document.getElementById('item-actions-ver'),
    cuadricula = document.getElementById('item-actions-cuadricula'),
    anterior = document.getElementById('item-actions-ante'),
    sig = document.getElementById('item-actions-sig');

//botones de la ventana de informacion de cada item de galeria
var arrowl = document.getElementById('sec2-img-arrowl'),
    arrowr = document.getElementById('sec2-img-arrowr');

//funciones
//funcion transicion del inicio a la galeria
inicio.onclick = (e)=>{
    e.preventDefault();
    presentacion.animate([
        {opacity: '0%'}
    ],{
        duration: 1000,
        iterations: 1,
        easing: "ease",
        fill:"forwards"
    });
    galeria.style.display = 'block';
    galeria.animate([
        {opacity:'0%'},
        {opacity: '100%'}
    ],{
        duration:1000,
        iterations: 1,
        easing: "ease",
        fill: "forwards"
    });
}
//mostrar informacion del trabajo
ver.onclick = (e)=>{
    e.preventDefault();

    //cargar informacion
    item_index = ver.getAttribute('value');

    //acomodar parrafos
    var parrafos = '';
    datos_galeria[item_index].descripcion.forEach(p => {
        parrafos += '<p>'+p+'<p><br>'
    });
    var componenteInfo = `
    <div class="info">
        <button id="sec2-gallery-item-info-close" onclick="closeWinfo()">X</button>
        <h1>${datos_galeria[item_index].titulo}</h1>
        <h4>${datos_galeria[item_index].fecha}</h4><br>
        ${parrafos}
    </div>
    <div class="imagenes">
        <a id="sec2-img-arrowl" href="#"><svg class="sec2-img-arrowl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"></path>
        </a>
        <a id="sec2-img-arrowr" href="#"><svg class="sec2-img-arrowr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"></path>
        </a>
        <img src="img/trabajos/t1/t1.jpg" alt="">
    </div>`
    info.innerHTML = componenteInfo;

    info.style.display = 'flex';
}
//funcion cambiar info galeria anterior
anterior.onclick = (e)=>{
    e.preventDefault();
}
//funcion cambiar info de galeria sig
sig.onclick = (e)=>{
    e.preventDefault();
}
//cerrar ventana
function closeWinfo(){
    info.style.display = 'none';
}
//mostrar cuadricula
cuadricula.onclick = (e)=>{
    e.preventDefault();
}