const container = document.getElementById('content-panel');

var m1 = document.getElementById('m1'),
    m2 = document.getElementById('m2'),
    m3 = document.getElementById('m3'),
    m4 = document.getElementById('m4'),
    m5 = document.getElementById('m5'),
    m6 = document.getElementById('m6'),
    m7 = document.getElementById('m7');

    const hover = '#497291';
    const trans = 'transparent';

container.addEventListener('scroll', function (e) {
    var value = container.scrollTop;
    //console.log(value);
    if(value >= 3762){
        m7.style.background = hover;
        m1.style.background=m2.style.background=m3.style.background=m4.style.background =m5.style.background=m6.style.background = '';
    }else if(value >= 3135){
        m6.style.background = hover;
        m1.style.background=m2.style.background=m3.style.background=m4.style.background=m5.style.background =m7.style.background = '';
    }else if(value >= 2508){
        m5.style.background = hover;
        m1.style.background=m2.style.background=m3.style.background=m4.style.background =m6.style.background=m7.style.background = '';
    }else if(value >= 1881){
        m4.style.background = hover;
        m1.style.background=m2.style.background=m3.style.background=m5.style.background =m6.style.background=m7.style.background = '';
    }
    else if(value >= 1254){
        m3.style.background = hover;
        m1.style.background=m2.style.background=m4.style.background=m5.style.background =m6.style.background=m7.style.background = '';
    }
    else if(value >= 627){
        m2.style.background = hover;
        m1.style.background=m3.style.background=m4.style.background=m5.style.background=m6.style.background=m7.style.background = '';
    }else if(value == 0){
        m1.style.background = hover;
        m2.style.background=m3.style.background=m4.style.background=m5.style.background=m6.style.background=m7.style.background = '';
    }
    
    e.preventDefault();
});