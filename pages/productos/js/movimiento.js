let cir = document.getElementById('art4-circulo');

const contScroll = document.getElementById('content-panel');

contScroll.addEventListener('scroll', function (event) {
    const value = contScroll.scrollTop;

    if(value>1500){
        cir.style.r=(value-1500)*0.5+'%';
    }

    event.preventDefault();
});