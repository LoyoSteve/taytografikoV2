$(document).ready(function () {

    var altura = $(window).height();
    $('#presentacion').height(altura);
    $('#uno').height(altura);
    $('#dos').height(altura);
    $('#tres').height(altura);

    var scrollanterior = 0;
    var secc = ["#presentacion", "#uno", "#dos", "#tres"];
    var pos = 0;
    var contador = 0;

    $('#espacio').height(altura*(secc.length-1));

    window.onscroll = function () {
        var scrollactual = document.documentElement.scrollTop;
        console.log(scrollactual);
        contador += 1;
        console.log(contador);

        if(scrollactual == 0){
            contador = 0;
            pos = 0;
            $(secc[pos]).animate({
                height: altura,
                top: 0
            }, 1000);
        }else if (contador == 3) {
            if(scrollactual == 0){
                pos = 0;
                $(secc[pos]).animate({
                    height: altura,
                    top: 0
                }, 1000);
                pos+=1;
            }else if(scrollactual > scrollanterior) {
                if (pos == secc.length - 1) {
                    pos == secc.length - 1;
                } else {
                    $(secc[pos]).animate({
                        height: '0',
                        top: altura * -1,
                        opacity:'0'
                    }, 1000);
                    pos += 1;
                    console.log('pos: '+pos);
                }
            } else{
                if (pos == 0) {
                    pos = 0;
                } else {
                    

                    pos -= 1;
                    console.log('pos: '+pos);

                    $(secc[pos]).animate({
                        height: altura,
                        top: '0',
                        opacity:'1'
                    }, 1000);
                    
                }

            }

            scrollanterior = scrollactual;
            contador=0;
        }

    }
});