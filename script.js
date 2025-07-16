var arr = [
    {songName:"Waapsi",url:"./songs/Waapis.mp3",img:"./images/Waapis.jpeg",artist:"AFKAP",duration:"3:14"},
    {songName:"Mera Parichay",url:"./songs/Uniyal.mp3",img:"./images/uniyal.jpg",artist:"Uniyal",duration:"2:26"},
    {songName:"Maharani",url:"./songs/Maharani.mp3",img:"./images/Maharani.jpeg",artist:"Karun, Arpit Bala",duration:"6:30"},
    {songName:"tv off",url:"./songs/tv off.mp3",img:"./images/tv-off.jpeg",artist:"Kendrick Lamar",duration:"3:40"},
]

var allsongs = document.querySelector("#all-songs")

var audio = new Audio();

var selectedSong = 0;

var poster = document.querySelector("#left") 

var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")

function mainFunction(){
    var clutter="";

arr.forEach(function(element,index){
    clutter += `<div class="song-card" id="${index}" >
                    <div class="Part-1">
                        <div class="item">
                            <div class="info">
                                <div class="song-count"><p>${index+1}</p></div>
                                <img src=${element.img} alt="">
                                <div class="details">
                                    <h5>${element.songName}</h5>
                                    <p>${element.artist}</p>
                                </div>
                                <div class="actions">
                                    <p>${element.duration}</p>
                                    <div class="icons">
                                    <i class="ri-play-circle-fill"></i>
                                    </div>
                                    <i class="ri-add-circle-fill"></i>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>`;
})

allsongs.innerHTML = clutter; 

audio.src=arr[selectedSong].url;

poster.style.backgroundImage=`url(${arr[selectedSong].img})`;
}
mainFunction();

allsongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
    mainFunction();
    audio.play();

})
var flag = 0;
play.addEventListener("click",function(){
    
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        mainFunction();
        audio.play();
        flag = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        mainFunction();
        audio.pause();
        flag = 0;   

    }
})

forward.addEventListener("click",function(){
    
    if(selectedSong < arr.length-1){
        selectedSong++;
        mainFunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
    }
    else{
        forward.style.opacity = 0.4;
    }
})

backward.addEventListener("click",function(){
    
    if(selectedSong > 0){
        selectedSong--;
        mainFunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
    }
    else{
        backward.style.opacity = 0.4;
    }
})
const menuOpen = document.getElementById('menu-open');
const menuClose= document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click',() =>sidebar.style.left='0');
menuClose.addEventListener('click',() =>sidebar.style.left='-100%');

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    
    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";  
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input",function(){
        const query = input.value.toLowerCase();
        const filteredArray = arr.filter(obj => obj.songName.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj){
            clutter+=`<li class="search-item">
                        <i class="ri-search-2-line"></i>
                        <span>${obj.songName}</span></li>`
        })
    document.querySelector("#search-results").style.display="block";
        document.querySelector("#search-results").innerHTML=clutter;
    })

    input.addEventListener("blur", function(){
        document.querySelector("#search-results").style.display = "none";
    })
}

handleSearchFunctionality();
