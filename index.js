const imgList = [
    {
        id : 0,
        imgSrc: "./songFolder/images/arjit-song.jpg",
        title: "/songFolder/song/arjit-song.mp3",
        song : "Arjit Sign"
    },
    {
        id : 1,
        imgSrc: "./songFolder/images/har-har-shambhu.jpg",
        title: "/songFolder/song/har-har-shambhu.mp3",
        song : "Har Har Shambhu"
    },
    {
        id : 2,
        imgSrc: "./songFolder/images/Kesariya.jpg",
        title: "/songFolder/song/kesariya.mp3",
        song : "Kesariya"
    },
    {
        id : 3,
        imgSrc: "./songFolder/images/KGF-Chapter-2.jpg",
        title: "/songFolder/song/Kgf-Chapter.mp3",
        song : "KGF Chapter"
    },
    {
        id : 4,
        imgSrc: "./songFolder/images/pushpa.jpg",
        title: "/songFolder/song/saami.mp3",
        song : "Pushpa"
    },
];

let index = 0;
let songPlay = false;


const body_img = document.querySelector(".container");
const roundedImg = document.querySelector("#roundedImg");
const titleName = document.querySelector("#title");
const leftIconName = document.querySelector("#leftIcon");
const playIconName = document.querySelector("#playIcon");
const rightIconName = document.querySelector("#rightIcon");
let musicSong = new Audio();

window.addEventListener("DOMContentLoaded", function(){
    muicePlay();
})

const muicePlay = () => {
    let showMusicList = imgList[index];
    roundedImg.src = showMusicList?.imgSrc;
    titleName.innerHTML = showMusicList?.song;
    musicSong.src = showMusicList.title

    const createImg = document.createElement("img");
    createImg.classList = "img_container"

    createImg.src = showMusicList?.imgSrc;

    console.log(createImg);
    
body_img.appendChild(createImg)


    
}

leftIconName.addEventListener("click", () => {
    index++;
    if(index > imgList.lengt - 1){
        
        index = 0
        muicePlay();
        // musicSong();
        musicSong.play();
    }else{
        
        muicePlay();
        musicSong.play();
        
    }
    
    
})

rightIconName.addEventListener("click", () => {
    index--;
    if(index < 0){
        index = imgList.lengt - 1;
        muicePlay();
        musicSong.play();
    }else{
        muicePlay();
        musicSong.play();
    }
})

playIconName.addEventListener("click" , justPlay);

function justPlay(){
    if(songPlay == false){
        playMusice();
    }else{
        stopMusice();
    }

    console.log("Done")
}

function playMusice(){
    playIcon.innerHTML =   `<i class="fa-solid fa-circle-stop"></i>`;
    condtion = true;
    musicSong.play();
}

function stopMusice(){
    playIcon.innerHTML =   `<i class="fa-solid fa-circle-paly"></i>`;
    condtion = false;
    musicSong.pause();
}
