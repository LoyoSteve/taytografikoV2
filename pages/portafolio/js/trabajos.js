//datos
const datos_job =[
    {
        num: "0",
        titulo: "Administracion de anuncio empresa Tayto",
        fecha: "14-02-2021",
        descrip: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga commodi amet quam praesentium accusamus molestiae, voluptate culpa sint ullam ducimus ut quia ex quidem, voluptatem eaque iure dolorem autem.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium beatae ea necessitatibus, voluptatum quasi aut ipsum enim minima est ut similique at quae eligendi. Labore, odio? Officia, laudantium repudiandae."],
        imagenes: ["img/jobs/j1/f1.jpg",
                    "img/jobs/j1/f2.png",
                    "img/jobs/j1/f3.jpg",
                    "img/jobs/j1/f4.jpeg"]
    },
    {
        num: "1",
        titulo: "Edicion de videos de la empresa Tayto",
        fecha: "01-10-2021",
        descrip: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga commodi amet quam praesentium accusamus molestiae, voluptate culpa sint ullam ducimus ut quia ex quidem, voluptatem eaque iure dolorem autem.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium beatae ea necessitatibus, voluptatum quasi aut ipsum enim minima est ut similique at quae eligendi. Labore, odio? Officia, laudantium repudiandae."],
        imagenes: ["img/jobs/j2/f1.jpg",
                "img/jobs/j2/f2.jpg",
                "img/jobs/j2/f3.jpg"]
    },
    {
        num: "2",
        titulo: "Creacion de pagina web de la empresa Tayto",
        fecha: "23-07-2021",
        descrip: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga commodi amet quam praesentium accusamus molestiae, voluptate culpa sint ullam ducimus ut quia ex quidem, voluptatem eaque iure dolorem autem.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium beatae ea necessitatibus, voluptatum quasi aut ipsum enim minima est ut similique at quae eligendi. Labore, odio? Officia, laudantium repudiandae."],
        imagenes: ["img/jobs/j3/f1.jpg",
                    "img/jobs/j3/f2.webp",
                    "img/jobs/j3/f3.jpg"]
    }
]
//declarar contenedores
var wininfo = document.getElementById('sec3-galery-wininfo'),
    titulo = document.getElementById('sec3-wininfo-titulo'),
    fecha = document.getElementById('sec3-wininfo-fecha'),
    descrip = document.getElementById('sec3-wininfo-descrip'),
    wininfoClose = document.getElementById('sec3-galery-wininfo-close'),
    arrowl = document.getElementById('sec3-gal-wininfo-arrowl'),
    arrowr = document.getElementById('sec3-gal-wininfo-arrowr'),
    wininfoImgConten = document.getElementById('sec3-galery-wininfo-imagenes');

//funciones para abrir y cerrar la ventana de informacion
function wininfoOpen(num){
    titulo.innerHTML = datos_job[num].titulo;
    fecha.innerHTML = datos_job[num].fecha;
    var desHTML = "";
    datos_job[num].descrip.forEach(p => {
        desHTML += '<p>'+p+'</p><br>'
    });
    descrip.innerHTML = desHTML;
    wininfoImgConten.style.backgroundImage = "url('"+datos_job[num].imagenes[0]+"')";
    arrowl.setAttribute("onclick", "arrowlImg("+num+",0)");
    arrowr.setAttribute("onclick", "arrowrImg("+num+",0)");
    wininfo.style.display = 'flex';
    wininfo.animate([
        //keyframes
        {opacity: '0%'},
        {transform: 'translate(-50%, 100%)'},
        {opacity: '0%'},
        {opacity: '100%'}
    ],{
        //timing
        duration: 1000,
        iterations: 1,
        easing: "ease"
    })
}

wininfoClose.onclick = (e) =>{
    e.preventDefault();
    wininfo.style.display = 'none';
}

//funciones para cambiar las imagenes
function arrowlImg(num, i){
    //console.log("izq "+i);
    //actualizar index
    i--;
    //comprobar que si haya imagen
    if(i>=0){
        //poner imagen
        wininfoImgConten.style.backgroundImage = `url('${datos_job[num].imagenes[i]}')`;
    }else{
        i = datos_job[num].imagenes.length-1;
        wininfoImgConten.style.backgroundImage = `url('${datos_job[num].imagenes[i]}')`;
    }
    arrowl.setAttribute("onclick", "arrowlImg("+num+","+i+")");
    arrowr.setAttribute("onclick", "arrowrImg("+num+","+i+")");
}

function arrowrImg(num, i){
    //console.log("der "+i);
    //actualizar index
    i++;
    //comprobar que si haya imagen
    if(i<=(datos_job[num].imagenes.length-1)){
        //poner imagen
        wininfoImgConten.style.backgroundImage = `url('${datos_job[num].imagenes[i]}')`;
    }else{
        i = 0;
        wininfoImgConten.style.backgroundImage = `url('${datos_job[num].imagenes[i]}')`;
    }
    arrowl.setAttribute("onclick", "arrowlImg("+num+","+i+")");
    arrowr.setAttribute("onclick", "arrowrImg("+num+","+i+")");
}