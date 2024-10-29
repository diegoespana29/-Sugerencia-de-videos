const VideoModule = (() => {
    const setVideo = (url, id) => {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute("src", url);
        }
    };
    return {
        play: (url, id) => setVideo(url, id)
    };
})();
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    
    setInicio() {
        console.log("Este método es para realizar un cambio en la URL del video");
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    
    playMultimedia() {
        VideoModule.play(this.getUrl(), this.id);
    }
    
    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        VideoModule.play(urlConTiempo, this.id);
    }
}
const musica = new Reproductor("https://www.youtube.com/embed/tAGnKpE4NCI", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/N2zDRzNN_xg", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/6nf8M-xkILk", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();


musica.setInicio(60);
