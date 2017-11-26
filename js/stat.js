'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.arc(110,125, 35, 0, Math.PI*2, false); 
  ctx.arc(110,55, 35, 0, Math.PI*2, false);
  ctx.arc(110,195, 35, 0, Math.PI*2, false);
  ctx.arc(110,265, 35, 0, Math.PI*2, false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(530,55, 35, 0, Math.PI*2, false); 
  ctx.arc(530,125, 35, 0, Math.PI*2, false); 
  ctx.arc(530,195, 35, 0, Math.PI*2, false);
  ctx.arc(530,265, 35, 0, Math.PI*2, false);
  ctx.fill();
    
  ctx.beginPath();
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.arc(100,115, 35, 0, Math.PI*2, false); 
  ctx.arc(100,45, 35, 0, Math.PI*2, false);
  ctx.arc(100,185, 35, 0, Math.PI*2, false);
  ctx.arc(100,255, 35, 0, Math.PI*2, false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(520,45, 35, 0, Math.PI*2, false); 
  ctx.arc(520,115, 35, 0, Math.PI*2, false); 
  ctx.arc(520,185, 35, 0, Math.PI*2, false);
  ctx.arc(520,255, 35, 0, Math.PI*2, false);
  ctx.fill();
   
  
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
    
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  
  var histogramWidth = 150;              // px;
  var step = histogramWidth / (0 - max); // px;
  
  
  var barHeigth = 40; // px; 
  var indent = 90;    // px;
  var initialX = 270; // px;
  var initialY = 130;  // px;
  var lineHeight = 15;// px;
    
   
   
      
  
  
  for(var i = 0; i < times.length; i++) {
  ctx.fillStyle =names[i]==='Вы'?
          'rgba(255, 0, 0, 1)':'rgba(0, 0, 255,'+Math.random()+')';
  ctx.fillRect(initialY + indent * i, initialX-lineHeight, barHeigth,times[i] * step);
  ctx.fillStyle = '#000';
  ctx.fillText(times[i].toFixed(0) , initialY +indent *  i ,initialX - histogramWidth - 2*lineHeight);
  ctx.fillText(names[i] , initialY +indent *  i ,initialX  );  
  }

};



