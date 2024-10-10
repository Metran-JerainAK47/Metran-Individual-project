let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');

let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');

let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');

let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0 ;

let index_no = 0 ;
let playing_song = false ;

//create audio element

let track = document.createElement('audio');

//All songs list 
let All_song = [
      {
        name: "Sunflower ",
        path: "sunflower.mp3",
        img: "miles.jpg",
        singer: "By: Post Malone"

      },
      {
        name: "Suzume",
        path: "suzume.mp3",
        img: "crowsdoor.jpg",
        singer: "by: Radwimps"

      },
      {
        name: "One voice",
        path: "Onevoice.mp3",
        img: "rokudenashi.jpg",
        singer: "By: Rokudenashi"

      },
      {
        name: "W.I.T.L",
        path: "where is the love.mp3",
        img: "where.jpg",
        singer: "By: Black eyed Peas"

      },
      {
        name: "Enemy ",
        path: "enemy.mp3",
        img: "arcane.jpg",
        singer: "By: Imagine dragons x JID"

      },
      {
        name: "Long live  ",
        path: "long live.mp3",
        img: "taylor.jpg",
        singer: "By: Taylor Swift"

      },
      {
        name: "Unravel",
        path: "unravel.mp3",
        img: "kaneki.jpg",
        singer: "By: TK"

      },
      {
        name: " Yoru ni kakeru ",
        path: "racing.mp3",
        img: "yorunikakeru.jpg",
        singer: "By: YOASOBI"

      },
      {
        name: " ADAMAS ",
        path: "adamas.mp3",
        img: "SAO.jpg",
        singer: "By: LiSA"

      },
      {
        name: " Compared Child ",
        path: "tuyu.mp3",
        img: "COMPARED.jpg",
        singer: "By: Tuyu"

      },
      {
        name: " Rising Hope ",
        path: "Risinghope.mp3",
        img: "lisahope.jpg",
        singer: "By: LiSA"

      },
      {
        name: "Grateful ",
        path: "grateful.mp3",
        img: "neffex.jpg",
        singer: "By: NEFFEX "

      },
      {
        name: "Gurenge ",
        path: "gurenge.mp3",
        img: "gurengelisa.jpg",
        singer: "By: LiSA"

      },
];


//ALL FUNCTION 


//FUNCTION LOAD THE TRACK 
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();


    // max number of tracks
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1 ;
    timer = setInterval(range_slider , 1000);


}
load_track(index_no);

//mute sound 
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0 ;


}


//will reset the slider when switching to the other songs
function reset_slider(){
    slider.value = 0 ;



}


//checking the song if its playing or not

function justplay(){
       if(playing_song == false){
        playsong();
       }else {
        pausesong();
       }
}

//play song 
function playsong(){
    track.play();
    playing_song = true ;
    play.innerHTML = '<i class="fa fa-pause"></i>';

} 

//pausesong 
function pausesong(){
    track.pause();
    playing_song = false ;
    play.innerHTML = '<i class="fa fa-play"></i>';
    
}

//next song 
function next_song(){
       if (index_no < All_song.length - 1){
        index_no += 1 ;
        load_track(index_no);
        playsong();
       }else {
        index_no = 0 ;
        load_track(index_no);
        playsong();
       }
}

//previous song
function previous_song(){
    if(index_no > 0) {
        index_no -= 1 ;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

//change volume 

function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100 ;

}


//the circle will move according to the current time of the song

function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position ;
}

//autoplay function
function autoplay_switch(){
    if(autoplay == 1){
        autoplay=0;
        auto_play.style.background = "rgba(255,255,255,0.2)";

    }else{
        autoplay = 1 ;
        auto_play.style.background = "#ad8536" ;
    }


}

function range_slider(){
    let position = 0 ;

    //update slider position 
    if (!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position ;
    }

//function will run when the song is over
if (track.ended){
    play.innerHTML = '<i class="fa fa-play"></i>' ; 
    if (autoplay==1){
        index_no += 1 ;
        load_track(index_no);
        playsong();
    }

}else {

}

}
