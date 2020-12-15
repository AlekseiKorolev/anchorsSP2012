//рисуем момент X
function drawMR(canvaId,x,y,rad,color){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.strokeStyle=color;
    context.fillStyle=color;
    context.beginPath();
    context.arc(x,y,rad,Math.PI*0.7,Math.PI*2.2,false);
    context.stroke();
    context.beginPath();
    context.moveTo(x+rad-5,y+14+4);
    context.lineTo(x+rad-1.5-5+2,y-6+14-4);
    context.lineTo(x+rad+1.5-5+5,y-6+14);
    context.lineTo(x+rad-5,y+14+4);
    context.closePath();
    context.fill();
    context.stroke();
}
//Рисуем вертикальный слева
function dsVL(canvaId,leftX,downY,upY,offset1,offset2,lit1,lit2,color,repText,repText2){
    //var offset1=10;
    //var offset2=70;
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.beginPath();
    context.moveTo(leftX-offset1,upY);
    context.lineTo(leftX-offset1-offset2,upY);//
    context.moveTo(leftX-offset1,downY);
    context.lineTo(leftX-offset1-offset2,downY);//
    context.moveTo(leftX-offset1-(offset2-5),upY-5);
    context.lineTo(leftX-offset1-(offset2-5),downY+5);//
    context.moveTo(leftX-offset1-(offset2-10),upY+5);
    context.lineTo(leftX-offset1-offset2,upY-5);//засечка
    context.moveTo(leftX-offset1-(offset2-10),downY+5);
    context.lineTo(leftX-offset1-offset2,downY-5);// засечка
    context.lineWidth = 1.0;
    context.strokeStyle = color;
    context.stroke();
    context.fillStyle=color;
    context.rotate(Math.PI*1.5);//повернул
    context.font='12pt Calibri';
    context.fillText(lit1,repText,leftX-offset1-offset2+0);
    context.font='10pt Calibri';
    context.fillText(lit2,repText2,leftX-offset1-offset2+3);
    context.rotate(Math.PI/2);//обратно повернул
}
//Рисует горизонтальный размер сверху
function dsHUp(canvaId,leftX,rightX,downY,offset1,offset2,lit1,lit2,color,direct,repText,repText2){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.moveTo(leftX,downY-offset1*direct);
    context.lineTo(leftX,downY-offset1-offset2*direct);//верт
    context.moveTo(rightX,downY-offset1*direct);
    context.lineTo(rightX,downY-offset1-offset2*direct);//верт
    context.moveTo(rightX+5,downY-offset1-offset2*direct+5*direct);
    context.lineTo(leftX-5,downY-offset1-offset2*direct+5*direct);//гор
    context.moveTo(leftX-5*direct,downY-offset1-offset2*direct+10*direct);
    context.lineTo(leftX+5*direct,downY-offset1-offset2*direct);
    context.moveTo(rightX-5*direct,downY-offset1-offset2*direct+10*direct);
    context.lineTo(rightX+5*direct,downY-offset1-offset2*direct);
    context.stroke();
    context.fillStyle=color;
    context.font='12pt Calibri';
    //if(direct<0){context.fillText(lit1,leftX+(rightX-leftX)/2-repText,downY+offset1+offset2*direct)}
    context.fillText(lit1,repText,downY-(offset1+offset2)*direct-0*direct)
    context.font='10pt Calibri';
    context.fillText(lit2,repText2,downY-(offset1+offset2)*direct+3*direct);
}
//Рисует горизонтальный размер снизу
function dsH(canvaId,leftX,rightX,downY,offset1,offset2,lit1,lit2,color,direct,repText,repText2){
    //var offset1=10;
    //var offset2=60;
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.moveTo(leftX,downY+offset1*direct);
    context.lineTo(leftX,downY+offset1+offset2*direct);
    context.moveTo(rightX,downY+offset1*direct);
    context.lineTo(rightX,downY+offset1+offset2*direct);
    context.moveTo(rightX+5,downY+offset1+offset2*direct-5*direct);
    context.lineTo(leftX-5,downY+offset1+offset2*direct-5*direct);
    context.moveTo(leftX+5*direct,downY+offset1+offset2*direct-10*direct);
    context.lineTo(leftX-5*direct,downY+offset1+offset2*direct);
    context.moveTo(rightX+5*direct,downY+offset1+offset2*direct-10*direct);
    context.lineTo(rightX-5*direct,downY+offset1+offset2*direct);
    context.stroke();
    context.fillStyle=color;
    context.font='12pt Calibri';
    //if(direct<0){context.fillText(lit1,leftX+(rightX-leftX)/2-repText,downY+offset1+offset2*direct)}
    context.fillText(lit1,repText,downY+(offset1+offset2)*direct-13*direct)
    context.font='10pt Calibri';
    context.fillText(lit2,repText2,downY+(offset1+offset2)*direct-8*direct);
}
//Рисует вертикальный размер справа
function dsV(canvaId,leftX,downY,upY,offset1,offset2,lit1,lit2,color,repText,repText2){
    //var offset1=10;
    //var offset2=70;
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.beginPath();
    context.moveTo(leftX+offset1,upY);
    context.lineTo(leftX+offset1+offset2,upY);//
    context.moveTo(leftX+offset1,downY);
    context.lineTo(leftX+offset1+offset2,downY);//
    context.moveTo(leftX+offset1+(offset2-5),upY-5);
    context.lineTo(leftX+offset1+(offset2-5),downY+5);//
    context.moveTo(leftX+offset1+(offset2-10),upY-5);
    context.lineTo(leftX+offset1+offset2,upY+5);//засечка
    context.moveTo(leftX+offset1+(offset2-10),downY-5);
    context.lineTo(leftX+offset1+offset2,downY+5);// засечка
    context.lineWidth = 1.0;
    context.strokeStyle = color;
    context.stroke();
    context.fillStyle=color;
    context.rotate(Math.PI*1.5);//повернул
    context.font='13pt Calibri';
    context.fillText(lit1,repText,leftX+offset1+offset2-10);
    context.font='11pt Calibri';
    context.fillText(lit2,repText2,leftX+offset1+offset2-7);
    context.rotate(Math.PI/2);//обратно повернул
}
//рисуем момент X
function drawM(canvaId,x,y,rad,color){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.strokeStyle=color;
    context.fillStyle=color;
    context.beginPath();
    context.arc(x,y,rad,Math.PI*0.8,Math.PI*2.2,false);
    context.stroke();
    context.beginPath();
    context.moveTo(x-rad+5,y+14+4);
    context.lineTo(x-rad+1.5+3,y-6+14-4);
    context.lineTo(x-rad-1.5,y-6+14);
    context.lineTo(x-rad+5,y+14+4);
    context.closePath();
    context.fill();
    context.stroke();
}
//стрелка вниз
function dArrow(canvaId,x,y,l,color,lw){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.strokeStyle=color;
    context.lineWidth=lw;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x,y-l);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-3,y-13);
    context.lineTo(x+3,y-13);
    context.lineTo(x,y);
    context.closePath();
    context.fill();
}
//стрелка вверх
function uArrow(canvaId,x,y,l,color,lw){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.strokeStyle=color;
    context.lineWidth=lw;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x,y+l);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-3,y+13);
    context.lineTo(x+3,y+13);
    context.lineTo(x,y);
    context.closePath();
    context.fill();
}
//стрелка вправо
function rArrow(canvaId,x,y,l,color,lw){
    var canvas=document.getElementById(canvaId);
    var context=canvas.getContext("2d");
    context.strokeStyle=color;
    context.lineWidth=lw;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-l,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-13,y-3);
    context.lineTo(x-13,y+3);
    context.lineTo(x,y);
    context.closePath();
    context.fill();
}