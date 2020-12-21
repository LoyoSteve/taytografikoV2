let video1 = document.getElementById("art5-videoUno"),
    video2 = document.getElementById("art5-videoDos"),
    video3 = document.getElementById("art5-videoTres");
var videoPlay = document.getElementById("videoPlay");

video1.onclick = () => {
    videoPlay.src = "../video/animacion.mp4";
    videoPlay.autoplay = "true";
}
video2.onclick = () => {
    videoPlay.src = "../video/anuncio.mp4";
    videoPlay.autoplay = "true";
}
video3.onclick = () => {
    videoPlay.src = "../video/intro.mp4";
    videoPlay.autoplay = "true";
}