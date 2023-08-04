console.log("welcome prakhar in spotify clone");
let songIndx=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItems'));
let audioElement=new Audio('D:/spotify clone/songs/0.mp3');
let songs=[
    {songName:'Khairiyat',filePath:'D:/spotify clone/songs/Khairiyat.mp3',coverpath:'D:/spotify clone/images/Khairiyat.jpg'},
    {songName:'Namo Namo',filePath:'D:/spotify clone/songs/Namo Namo.mp3',coverpath:'D:/spotify clone/images/Namo.jpg'},
    {songName:'Pachtaoge',filePath:'D:/spotify clone/songs/Pachtaoge.mp3',coverpath:'D:/spotify clone/images/Pachtaoge.jpg'},
    {songName:'Dekhte Dekhte',filePath:'D:/spotify clone/songs/Dekhte Dekhte.mp3',coverpath:'D:/spotify clone/images/dekhte.jpg'},
    {songName:'Kaun Tujhe',filePath:'D:/spotify clone/songs/Kaun.mp3', coverpath:'D:/spotify clone/images/kaun.jpg'},
    {songName:'Banjara',filePath:'D:/spotify clone/songs/Banjara.mp3',coverpath:'D:/spotify clone/images/Banjara.jpg'}
]
//add songs now
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove( 'fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove( 'fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//functions on progress bar
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
function makeAllplay (){
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',function(e){
        makeAllplay();
         songIndx=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src=`D:/spotify clone/songs/${songIndx}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove( 'fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById("backward").addEventListener('click',()=>{
    if(songIndx==0){
        songIndx=7;
    }else{
        songIndx=songIndx-1;
        
    }
    makeAllplay();
    audioElement.src=`D:/spotify clone/songs/${songIndx}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove( 'fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
 
})
document.getElementById("forward").addEventListener('click',()=>{
    if(songIndx==7){
        songIndx=0;
    }else{
        songIndx=songIndx+1;
        
    }
    makeAllplay();
    
    audioElement.src=`D:/spotify clone/songs/${songIndx}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove( 'fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
 
})

