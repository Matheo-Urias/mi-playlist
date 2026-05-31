window.onload = function() {
    
    let canciones = [
        {
            titulo: "A Pearl",
            descripcion: "Una de mi canciones favoritas de Mitski por su increíble fuerza instrumental y su letra.",
            idVideo: "_lYA3i3QkWM",
            esIframe: true // Dejamos el iframe de Mitski porque es el único que sí da permiso
        },
        {
            titulo: "Lost",
            descripcion: "Un clásico del R&B con un ritmo increíble de Frank Ocean.",
            idVideo: "pY_j8bby7S0"
        },
        {
            titulo: "Disillusioned",
            descripcion: "La voz de Daniel Caesar y la atmósfera de este tema son de otro mundo.",
            idVideo: "uQDf_k_F7pY"
        },
        {
            titulo: "Kill You To Try",
            descripcion: "Un temazo con esa vibra setentera nostálgica espectacular.",
            idVideo: "m9u8d00yS4Q"
        },
        {
            titulo: "Butterflies",
            descripcion: "R&B suave y con mucho estilo, Brent Faiyaz nunca falla.",
            idVideo: "kYgV8gXp2eA"
        },
        {
            titulo: "Brakelights",
            descripcion: "El toque indie pop perfecto de Omar Apollo para la playlist.",
            idVideo: "NnLid79b1wA"
        },
        {
            titulo: "Crystal Ship",
            descripcion: "Ese sonido oscuro, lento y melancólico que solo ellos saben lograr.",
            idVideo: "kI8XasEXm94"
        },
        {
            titulo: "My Mistakes Were Made for You",
            descripcion: "Alex Turner y Miles Kane con una pieza con arreglos orquestales brutales.",
            idVideo: "9cQlioiNidQ"
        },
        {
            titulo: "Standing on the Shore",
            descripcion: "Un viaje de sintetizadores épicos e indie pop espectacular de Empire of the Sun.",
            idVideo: "H9Y78bA-pFM"
        },
        {
            titulo: "Bleed",
            descripcion: "La dosis perfecta de R&B indie contemporáneo con el estilo único de Malcolm Todd.",
            idVideo: "gW9wSgB0i8U"
        },
        {
            titulo: "Door",
            descripcion: "Una balada pop con una carga emotiva y guitarras acústicas profundas de Conan Gray.",
            idVideo: "7Vf8mshH_vE"
        },
        {
            titulo: "Bored",
            descripcion: "Un toque de jazz moderno impecable con la voz suave y melódica de Laufey.",
            idVideo: "yvscvQeMshI"
        }
    ];

    let htmlContenido = "";

    for (let i = 0; i < canciones.length; i++) {
        let contenidoMultimedia = "";

        // Si el video permite iframe (Mitski), lo renderizamos directo
        if (canciones[i].esIframe) {
            contenidoMultimedia = `
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${canciones[i].idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;
        } else {
            // Para los videos bloqueados, generamos una tarjeta interactiva hermosa con su portada oficial en HD
            contenidoMultimedia = `
                <div class="position-relative w-100 h-100 rounded overflow-hidden" style="background: url('https://img.youtube.com/vi/${canciones[i].idVideo}/hqdefault.jpg') center/cover; min-height: 180px;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,0.4); transition: background 0.3s;">
                        <a href="https://www.youtube.com/watch?v=${canciones[i].idVideo}" target="_blank" class="btn btn-danger rounded-pill px-4 py-2 fw-bold shadow d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                            Reproducir Audio
                        </a>
                    </div>
                </div>
            `;
        }

        htmlContenido += `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title fw-bold text-dark text-truncate">${canciones[i].titulo}</h5>
                            <p class="card-text text-muted small mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${canciones[i].descripcion}</p>
                        </div>
                        <div class="ratio ratio-16x9 mt-2">
                            ${contenidoMultimedia}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("grilla-canciones").innerHTML = htmlContenido;
};
