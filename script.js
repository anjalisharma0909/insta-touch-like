 /*var cards = document.querySelectorAll('.card');

cards.forEach(function(card){
 var img = document.querySelector('img')
  var love = document.querySelector('#love')
 img.addEventListener('dblclick',function(){
   
    love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg) '

     setTimeout(()=>{ 
        love.style.transform = 'translate(-50%,-300%) scale(0) rotate(60deg) '
    },800)
     setTimeout(()=>{
love.style.opacity = 0
            
    },1000)
      setTimeout(()=>{
 
            love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg) '
    },1200)
     
 })
})*/

var cards = document.querySelectorAll('.card');

cards.forEach(function(card){
  var video = card.querySelector('video');
  var love = card.querySelector('i');

  video.addEventListener('dblclick', function(){
    love.style.opacity = 1;
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(()=>{
      love.style.transform = 'translate(-50%,-300%) scale(0) rotate(60deg)';
    },800);

    setTimeout(()=>{
      love.style.opacity = 0;
    },1000);

    setTimeout(()=>{
      love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    },1200);
  });
});
    