let mv1 = document.getElementById('mv1'),
    mv2 = document.getElementById('mv2'),
    mv3 = document.getElementById('mv3'),
    mv4 = document.getElementById('mv4'),
    modelViewer = document.getElementById('modelViewer');

mv1.onclick = (e) =>{
    e.preventDefault();
    modelViewer.src = '/principal/prod/taza.glb';
}

mv2.onclick = (e) =>{
    e.preventDefault();
    modelViewer.src = '/principal/prod/card.glb';
}
mv3.onclick = (e) =>{
    e.preventDefault();
    modelViewer.src = '/principal/prod/book.glb';
}
mv4.onclick = (e) =>{
    e.preventDefault();
    modelViewer.src = '/principal/prod/pluma.glb';
}