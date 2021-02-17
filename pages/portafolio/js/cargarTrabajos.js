
//cargar team
/*agregar*/
//cargar trabajos
var galeryJobs = document.getElementById('sec3-galery');
var jobHTML ="";
datos_job.forEach(job => {
    jobHTML += `<div onclick="wininfoOpen(${job.num})" class="sec3-galery-item" style="background-image: url(${job.imagenes[0]});">
                        <div class="sec3-galery-item-des">
                            <h3>${job.titulo}</h3>
                            <p>${job.fecha}</p>
                        </div>
                    </div>`;
});
galeryJobs.innerHTML = jobHTML;

