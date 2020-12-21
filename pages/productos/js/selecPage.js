let prev = document.getElementById("art6-prev"),
    next = document.getElementById("art6-next");
var frame = document.getElementById("art6-pagesType-page");

const pages = ["catalogo/pag1/pag1.html", "catalogo/pag2/pag2.html","catalogo/pag3/pag3.html", "catalogo/pag4/pag4.html","catalogo/pag5/pag5.html"];
var i=0;

prev.onclick = () =>{
    i--;
    if(i<=-1){
        i=pages.length-1;
    }
    frame.src = pages[i];
}

next.onclick = () =>{
    i++;
    if(i>=pages.length){
        i=0;
    }
    frame.src = pages[i];
}