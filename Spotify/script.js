const songName = document.getElementById("music-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("imagem");
const play = document.getElementById("play");

const decida = { 
songName : "decida",
artista : "Zezo O principe dos teclados",
file: "decida",
};

const saudaderosa = { 
    songName : "saudaderosa",
    artista : "barto galego",
    file: "saudaderosa"
    };

    const sonholindo = { 
        songName : "sonholindo",
        artista : "Raquel dos teclados",
        file: "sonholindo"
        };
        
let isPlaying = false;
const playlist = [decida, saudaderosa, sonholindo];
let index = 0;

function playSong(){
play.querySelector(".bi").classList.remove("bi-play-circle-fill");
play.querySelector(".bi").classList.add("bi-pause-circle-fill");
song.play();
isPlaying = true;
}

function pauseSong(){
play.querySelector(".bi").classList.add("bi-play-circle-fill");
play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
song.pause();
isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializeSong(){
cover.src = `images/${playlist[index].file}.jpg`;
song.src = `songs/${playlist[index].file}.mp3`;
songName.innerHTML = playlist[index].songName;
bandName.innerHTML = playlist[index].artista;
}

initializeSong();

play.addEventListener("click", playPauseDecider);
