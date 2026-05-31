window.onload = function() {
    
    let canciones = [
        {
            titulo: "A Pearl",
            descripcion: "Una de mi canciones favoritas de Mitski por su increíble fuerza instrumental y su letra.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/_lYA3i3QkWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Lost",
            descripcion: "Un clásico del R&B con un ritmo increíble de Frank Ocean.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/pY_j8bby7S0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Disillusioned",
            descripcion: "La voz de Daniel Caesar y la atmósfera de este tema son de otro mundo.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/uQDf_k_F7pY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Kill You To Try",
            descripcion: "Un temazo con esa vibra setentera nostálgica espectacular.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/m9u8d00yS4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Butterflies",
            descripcion: "R&B suave y con mucho estilo, Brent Faiyaz nunca falla.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/kYgV8gXp2eA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Brakelights",
            descripcion: "El toque indie pop perfecto de Omar Apollo para la playlist.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/NnLid79b1wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Crystal Ship",
            descripcion: "Ese sonido oscuro, lento y melancólico que solo ellos saben lograr.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/kI8XasEXm94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "My Mistakes Were Made for You",
            descripcion: "Alex Turner y Miles Kane con una pieza con arreglos orquestales brutales.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/9cQlioiNidQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Standing on the Shore",
            descripcion: "Un viaje de sintetizadores épicos e indie pop espectacular de Empire of the Sun.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/H9Y78bA-pFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Bleed",
            descripcion: "La dosis perfecta de R&B indie contemporáneo con el estilo único de Malcolm Todd.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/gW9wSgB0i8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Door",
            descripcion: "Una balada pop con una carga emotiva y guitarras acústicas profundas de Conan Gray.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/7Vf8mshH_vE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            titulo: "Bored",
            descripcion: "Un toque de jazz moderno impecable con la voz suave y melódica de Laufey.",
            videoEmbed: '<iframe width="100%" height="200" src="https://www.youtube.com/embed/yvscvQeMshI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        }
    ];

    let htmlContenido = "";

    for (let i = 0; i < canciones.length; i++) {
        htmlContenido += `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-truncate text-dark">${canciones[i].titulo}</h5>
                        <p class="card-text text-muted small mb-3">${canciones[i].descripcion}</p>
                        <div class="ratio ratio-16x9">
                            ${canciones[i].videoEmbed}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("grilla-canciones").innerHTML = htmlContenido;
};