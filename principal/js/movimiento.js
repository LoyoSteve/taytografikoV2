let owlfly = document.getElementById("owlfly"),
    arbol1 = document.getElementById("arbol1"),
    arbol2 = document.getElementById("arbol2"),
    owlfly2 = document.getElementById("owlfly2");

const contScroll = document.getElementById('scroll');

contScroll.addEventListener('scroll', function (event) {
    const value = contScroll.scrollLeft;

    owlfly.style.left = (-value + 900) * 0.5 + 'px';
    arbol1.style.left = (-value) * 1.5 + 'px';
    arbol2.style.right = (value) * 1.2 + 'px';
    if (value > 300) {
        owlfly2.style.display = 'block';
    }
    owlfly2.style.left = (value-200) * 0.3 + 'px';
    owlfly2.style.top = (value-2500) * 0.4 + 'px';

    event.preventDefault();
});