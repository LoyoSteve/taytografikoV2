//datos de team
let datos_team = [
    {
        nombre: "Siria",
        profesion: "Diseñador grafico",
        descripcion: "siria, ipsum dolor sit amet consectetur adipisicing elit. Totam, a voluptates at atque sint ducimus dolor nobis voluptatum commodi, ut minima accusamus expedita laboriosam. Quae inventore saepe beatae tenetur suscipit?",
        fb: "wwww.facebook.com",
        ln: "mx.linkedin.com",
        tw: "www.twitter.com",
        imgPerfil: "img/p1.jpg",
        imgProfe: "img/desigicon.png"
    },
    {
        nombre: "Ernesto",
        profesion: "Representante de ventas",
        descripcion: "ernesto, ipsum dolor sit amet consectetur adipisicing elit. Totam, a voluptates at atque sint ducimus dolor nobis voluptatum commodi, ut minima accusamus expedita laboriosam. Quae inventore saepe beatae tenetur suscipit?",
        fb: "wwww.facebook.com",
        ln: "mx.linkedin.com",
        tw: "www.twitter.com",
        imgPerfil: "img/p2.jpg",
        imgProfe: "img/ventasicon.png"
    },
    {
        nombre: "Esther",
        profesion: "Representante de marketing",
        descripcion: "ester, ipsum dolor sit amet consectetur adipisicing elit. Totam, a voluptates at atque sint ducimus dolor nobis voluptatum commodi, ut minima accusamus expedita laboriosam. Quae inventore saepe beatae tenetur suscipit?",
        fb: "wwww.facebook.com",
        ln: "mx.linkedin.com",
        tw: "www.twitter.com",
        imgPerfil: "img/p3.jpg",
        imgProfe: "img/markicon.png"
    },
    {
        nombre: "Alejandra",
        profesion: "Diseñador grafico",
        descripcion: "ale, ipsum dolor sit amet consectetur adipisicing elit. Totam, a voluptates at atque sint ducimus dolor nobis voluptatum commodi, ut minima accusamus expedita laboriosam. Quae inventore saepe beatae tenetur suscipit?",
        fb: "wwww.facebook.com",
        ln: "mx.linkedin.com",
        tw: "www.twitter.com",
        imgPerfil: "img/p4.jpg",
        imgProfe: "img/desigicon.png"
    },{
        nombre: "Miguel Angel Mendez Loyo",
        profesion: "Programador",
        descripcion: "Miguel, ipsum dolor sit amet consectetur adipisicing elit. Totam, a voluptates at atque sint ducimus dolor nobis voluptatum commodi, ut minima accusamus expedita laboriosam. Quae inventore saepe beatae tenetur suscipit?",
        fb: "https://www.facebook.com",
        ln: "https://mx.linkedin.com",
        tw: "https://www.twitter.com",
        imgPerfil: "img/p5.jpg",
        imgProfe: "img/iconp1.png"
    }
]

//declaracion de contenedores de team
var nombre = document.getElementById('sec2-descrip-nombre'),
    profesion = document.getElementById('sec2-descrip-profesion'),
    descripcion = document.getElementById('sec2-descrip-descripcion'),
    fb = document.getElementById('sec2-descrip-fb'),
    ln = document.getElementById('sec2-descrip-ln'),
    tw = document.getElementById('sec2-descrip-tw'),
    imgPerfil = document.getElementById('sec2-descrip-imgPerfil'),
    imgBack = document.getElementById('sec2-descrip-imgBack'),
    imgProfe = document.getElementById('sec2-descrip-imgProfe');

//animaciones
var cir = document.getElementById('sec2-bgPhoto-perfil-cir'),
    info = document.getElementById('sec2-descripcion-info'),
    redes =document.getElementById('sec2-descripcion-redes');

function photoPerfil(num) {
    cir.animate([
        //keyframes
        { transform: 'rotateZ(-360deg)',
        opacity:'0'},
        {opacity:'1'}
    ], {
        // timing options
        duration: 500,
        iterations: 1,
        easing: "ease"
    });
    nombre.innerHTML = datos_team[num].nombre;
    profesion.innerHTML = datos_team[num].profesion;
    descripcion.innerHTML = datos_team[num].descripcion;
    fb.href = datos_team[num].fb;
    ln.href = datos_team[num].ln;
    tw.href = datos_team[num].tw;
    imgPerfil.src = datos_team[num].imgPerfil;
    imgBack.src = datos_team[num].imgPerfil;
    imgProfe.src = datos_team[num].imgProfe;
    imgBack.animate([
        //keyframes
        {opacity:'0%'},
        {opacity:'100%'}
    ], {
        //timing options
        duration: 500,
        iterations: 1,
        easing: "ease"
    });
    info.animate([
        //keyframes
        {opacity:'0%'},
        { transform: 'translateY(200px)' },
        {opacity:'0%'},
        { transform: 'translateY(0px)' }
    ], {
        //timing options
        duration: 1000,
        iterations: 1,
        easing: "ease"
    });
    redes.animate([
        //keyframes
        {opacity:'0%'},
        { transform: 'translateX(-200px)' },
        {opacity:'0%'},
        { transform: 'translateX(0px)' }
    ], {
        //timing options
        duration: 1500,
        iterations: 1,
        easing: "ease"
    });
    imgProfe.animate([
        //keyframes
        {opacity:'0%'},
        { transform: 'translateY(200px)' },
        {opacity:'0%'},
        { transform: 'translateY(0px)' }
    ], {
        //timing options
        duration: 1000,
        iterations: 1,
        easing: "ease"
    });
}