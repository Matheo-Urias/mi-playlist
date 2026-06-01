window.onload = function() {
    
    let canciones = [
        {
            titulo: "A Pearl",
            descripcion: "De las mejores canciones de Mitski por su letra y significados.",
            idVideo: "_lYA3i3QkWM",
            urlImagen: "https://f4.bcbits.com/img/a2337835939_10.jpg"
        },
        {
            titulo: "Lost",
            descripcion: "Un clásico del R&B con un ritmo increíble de Frank Ocean.",
            idVideo: "J3DWAJGaf7o",
            urlImagen: "https://i.scdn.co/image/ab67616d0000b273f11f1c4ad183b7fa625f8534"
        },
        {
            titulo: "Disillusioned",
            descripcion: "La voz de Daniel Caesar y la atmósfera es de otro mundo.",
            idVideo: "DloZ1xZHCmo",
            urlImagen: "https://i1.sndcdn.com/artworks-e86yoMbvPWNx-0-t1080x1080.jpg"
        },
        {
            titulo: "Kill You To Try",
            descripcion: "Vibra setentera espectacular que da Daisy Jones & The Six.",
            idVideo: "0m_DYxdITjs",
            urlImagen: "https://i.scdn.co/image/ab67616d0000b27331e78717bfdccaebbab1eadb"
        },
        {
            titulo: "Butterflies",
            descripcion: "R&B suave y con mucho estilo, Brent Faiyaz nunca me ha fallado.",
            idVideo: "ndrlynZUP-g",
            urlImagen: "https://i.scdn.co/image/ab67616d00001e026a463f436bbf07f3c9e8c62a"
        },
        {
            titulo: "Brakelights",
            descripcion: "El toque indie pop y suave perfecto de Omar Apollo.",
            idVideo: "wvHakwI2Xqw",
            urlImagen: "https://i1.sndcdn.com/artworks-000237720010-17clyv-t500x500.jpg"
        },
        {
            titulo: "The Crystal Ship",
            descripcion: "Ese sonido oscuro que solo tiene Cigarettes After Sex.",
            idVideo: "65XQOnh20jg",
            urlImagen: "https://cdn.prod.website-files.com/64cb5f36172f60e17c655f5f/68f6b976b2860d9b54f3dcd8_CAS%20Anna%20Karenina.jpg"
        },
        {
            titulo: "Calm Like You",
            descripcion: "Enérgico y brillante de Alex Turner y Miles Kane con guitarras increíbles.",
            idVideo: "j7qmADw2Q0w",
            urlImagen: "https://cdn-images.dzcdn.net/images/cover/f2abdd49acc5b9e91f103fb7e3e30df1/1900x1900-000000-80-0-0.jpg"
        },
        {
            titulo: "Standing on the Shore",
            descripcion: "Una canción que se siente familiar de Empire of the Sun.",
            idVideo: "0EXekYahE24",
            urlImagen: "https://upload.wikimedia.org/wikipedia/en/6/6d/Standing_on_the_Shore_-_%28Single_cover_artwork%29.JPG"
        },
        {
            titulo: "Bleed",
            descripcion: "La dosis perfecta de R&B indie contémporaneo de Malcolm Todd.",
            idVideo: "ww-OM_5kPYY",
            urlImagen: "https://i.scdn.co/image/ab67616d0000b27387607b2c8f5f52f1f057be0d"
        },
        {
            titulo: "Door",
            descripcion: "Un pop con una carga emotiva y acústicos profundos de Conan Gray.",
            idVideo: "DgoHUxxrgH8",
            urlImagen: "https://i.scdn.co/image/ab67616d00001e02c439f41d7eca82a31b3e21d1"
        },
        {
            titulo: "Bored",
            descripcion: "Un toque de jazz moderno con la voz suave y melódica de Laufey.",
            idVideo: "0AEi7Rg7nS0",
            urlImagen: "https://i.scdn.co/image/ab67616d0000b27313832cc69a78c53b18a8bc10"
        }
    ];

    let htmlContenido = "";

    for (let i = 0; i < canciones.length; i++) {
        htmlContenido += `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm border-0 py-3">
                    <div class="card-body d-flex flex-column justify-content-between text-center">
                        <div>
                            <h5 class="card-title fw-bold text-dark text-truncate">${canciones[i].titulo}</h5>
                            <p class="card-text text-muted small mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${canciones[i].descripcion}</p>
                        </div>
                        <div class="mt-2 d-flex justify-content-center align-items-center bg-transparent" style="min-height: 200px;">
                            <a href="https://www.youtube.com/watch?v=${canciones[i].idVideo}" target="_blank" class="position-relative d-block overflow-hidden rounded shadow-sm" style="width: 200px; height: 200px; transition: transform 0.2s ease;">
                                <img src="${canciones[i].urlImagen}" class="w-100 h-100" style="object-fit: cover;" alt="Portada">
                                <div class="position-absolute top-0 start-0 w-100 h-100" style="background: transparent; cursor: pointer;" title="Reproducir en YouTube"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("grilla-canciones").innerHTML = htmlContenido;
};