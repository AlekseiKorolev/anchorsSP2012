function gNoColon2(x1,x2,H0){
    //габариты базы
    l=211;
    rb=10.5;
    tb=11;
    cBase='#D3E29D';
    //габарит трубы
    ltr=141;
    ts=5;
    hd=100;
    cDv='#8AB446';
    cDv2='#ACC864';
    //траверса
    lt=34;
    tt=6;
    //болты
    lx=160;
    bx=70;
    rx=6;
    cB='#2D6B22';
    //шайба
    cSh='#072A16';
    tsh=10;
    lsh=25;
    //подливка
    cPod='#DDDDDD';
    tpod=20;
    //бетон
    cCon='#EEEEEE';
    tcon=100;
    //
    var canvas = document.getElementById('pict04');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=130;//координаты верхнего рисунка
    cY2=150.5;//координаты нижнего рисунка
    cY3=470;//координаты нижнего рисунка
    cX=200;
    cX1=450;//координата по Х
//ПЛАН
//фундамент
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cCon;
    context.strokeStyle='black';
    context.rect(cX-l/2-15,cY-l/2-15,l+30,l+30);
    context.fill();
    context.stroke();
//база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.arc(cX,cY,l/2,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    //траверсы
    angel=Math.PI/4
    context.translate(cX,cY);
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.strokeStyle='black';
    context.rotate(angel/2);
    for(var i=0;i<=7;i++){
        context.rotate(angel);
        context.rect(-ltr/2-lt+0.5,-tt/2-0.5,lt,tt);
    }
    context.fill();
    context.stroke();
    //болты
    context.fillStyle='white';
    context.lineWidth = 1;
    for(var i=0;i<=7;i++){
        context.rotate(angel);
        context.beginPath();
        context.arc(lx/2,bx/2,rb,0,Math.PI*2,true);
        context.fill();
        context.stroke();
    }
    //
    context.fillStyle=cB;
    context.lineWidth = 1;
    for(var i=0;i<=7;i++){
        context.rotate(angel);
        context.beginPath();
        context.arc(lx/2,bx/2,rx,0,Math.PI*2,true);
        context.fill();
        context.stroke();
    }
    context.rotate(-angel/2);
    //оси
    for(var i=0;i<=7;i++){
        context.rotate(angel);
        context.rect(lx/2-20,-0.5,40,0.5);
    }
    context.stroke();
    context.translate(-cX,-cY);
//труба
    context.beginPath();//наружняя
    context.fillStyle=cDv;
    context.lineWidth=1;
    context.strokeStyle='black';
    context.arc(cX,cY,ltr/2,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();//внутренняя
    context.fillStyle=cBase;
    context.lineWidth=1;
    context.strokeStyle='black';
    context.arc(cX,cY,ltr/2-ts,0,Math.PI*2,true);
    context.fill();
    context.stroke();
//оси болтов
    //горизонтальная ось
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.fillStyle=cSh;
    var zuza=0;
    for(var i=0;i<=Math.PI*2;i+=Math.PI/200){
        zuza++;
        if(zuza%50==0){
            i+=9*Math.PI/200;
            context.fillRect(cX-Math.cos(i)*(lx/2+rx+2)-0.5,cY-Math.sin(i)*(lx/2+rx+2)-0.5,1,1);
            i+=Math.PI/200;
            context.fillRect(cX-Math.cos(i)*(lx/2+rx+2)-0.5,cY-Math.sin(i)*(lx/2+rx+2)-0.5,1,1);
            i+=Math.PI/200;
            context.fillRect(cX-Math.cos(i)*(lx/2+rx+2)-0.5,cY-Math.sin(i)*(lx/2+rx+2)-0.5,1,1);
            i+=9*Math.PI/200
        }
        context.fillRect(cX-Math.cos(i)*(lx/2+rx+2)-0.5,cY-Math.sin(i)*(lx/2+rx+2)-0.5,1,1);

    }
    context.stroke();
    //горизонтальная ось
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    for(i=80;i<420;i+=30){
    context.moveTo(i,cY-0.5);
    context.lineTo(i+20,cY-0.5);
    context.moveTo(i+24,cY-0.5);
    context.lineTo(i+25,cY-0.5);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=10;i<215;i+=30){
    context.moveTo(cX-0.5,i);
    context.lineTo(cX-0.5,i+20);
    context.moveTo(cX-0.5,i+24);
    context.lineTo(cX-0.5,i+25);
    }
    context.stroke();
    //обрезание
    context.beginPath();
    context.fillStyle='white';
    context.fillRect(cX+10,0,l/2+100,300);
//РАЗРЕЗ
    //подливка
    context.beginPath();
    context.fillStyle=cPod;
    context.fillRect(cX1-l/2-20,cY2+tb+0.5,l+40,tpod);
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-l/2-20,cY2+tb,l+40,tpod);
    context.stroke();
    //фундамент
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-l/2-50,cY2+tb+tpod,l+100,tcon);
    context.stroke();
    context.beginPath();
    context.fillStyle=cCon;
    context.fillRect(cX1-l/2-49.5,cY2+tb+tpod+1,l+99,tcon);
    //заливка колонны
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-ltr/2,cY2,ltr,-hd);
    context.stroke();
    context.beginPath();
    context.fillStyle=cDv;
    context.fillRect(cX1-ltr/2+0.5,cY2,ltr-1,-hd-1);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX1-l/2,cY2,l,tb);
    context.fill();
    context.stroke();
    //траверсы
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX1-ltr/2+5,cY2);
    context.lineTo(cX1-ltr/2+5,cY2-60);
    context.lineTo(cX1-ltr/2-15+5,cY2-60);
    context.lineTo(cX1-l/2+5,cY2);
    context.lineTo(cX1-ltr/2+5,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX1+ltr/2-5,cY2);
    context.lineTo(cX1+ltr/2-5,cY2-60);
    context.lineTo(cX1+ltr/2+15-5,cY2-60);
    context.lineTo(cX1+l/2-5,cY2);
    context.lineTo(cX1+ltr/2-5,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX1-ltr/2+45,cY2);
    context.lineTo(cX1-ltr/2+45,cY2-60);
    context.lineTo(cX1-ltr/2-8+45,cY2-60);
    context.lineTo(cX1-l/2+55,cY2);
    context.lineTo(cX1-ltr/2+45,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX1+ltr/2-45,cY2);
    context.lineTo(cX1+ltr/2-45,cY2-60);
    context.lineTo(cX1+ltr/2+8-45,cY2-60);
    context.lineTo(cX1+l/2-55,cY2);
    context.lineTo(cX1+ltr/2-45,cY2);
    context.fill();
    context.stroke();//
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX1-lx/2-rb+20,cY2-30,rb,tb+tpod+tcon+15);
    context.fillRect(cX1-rb/2,cY2-30,rb,tb+tpod+tcon+15);//
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-lx/2-rb+20,cY2-30,rb,tb+tpod+tcon+15);
    context.rect(cX1-rb/2,cY2-30,rb,tb+tpod+tcon+15);
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX1-lx/2-rb/2-lsh/2+20,cY2,lsh,-tsh);
    context.fillRect(cX1-lx/2-rb/2-lsh/2+20,cY2-tsh,lsh,-tsh);
    context.fillRect(cX1+lx/2+rb/2-lsh/2-20,cY2,lsh,-tsh);
    context.fillRect(cX1+lx/2+rb/2-lsh/2-20,cY2-tsh,lsh,-tsh);
    context.fillRect(cX1-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX1-lsh/2,cY2-tsh,lsh,-tsh);
    //обрезаем
    context.beginPath();
    context.fillStyle='white';
    context.fillRect(cX+20,cY+80,250,20);
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd/2;i<(cY2+tb+tpod+tcon+15);i+=30){
    context.moveTo(cX1-lx/2-rb/2+20,i);
    context.lineTo(cX1-lx/2-rb/2+20,i+20);
    context.moveTo(cX1-lx/2-rb/2+20,i+24);
    context.lineTo(cX1-lx/2-rb/2+20,i+25);
    //
    context.moveTo(cX1+lx/2+rb/2-20,i);
    context.lineTo(cX1+lx/2+rb/2-20,i+20);
    context.moveTo(cX1+lx/2+rb/2-20,i+24);
    context.lineTo(cX1+lx/2+rb/2-20,i+25);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd-15;i<(cY2+tb+tpod+tcon);i+=30){
    context.moveTo(cX1-0.5,i);
    context.lineTo(cX1-0.5,i+20);
    context.moveTo(cX1-0.5,i+24);
    context.lineTo(cX1-0.5,i+25);
    }
    context.stroke();
//разрез
    context.beginPath();
    context.fillStyle=cSh;
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.moveTo(cX-l/2-40,cY+l/2-20+0.5);
    context.lineTo(cX-l/2-70,cY+l/2-20+0.5);
    context.moveTo(cX+20,cY+l/2-20+0.5);
    context.lineTo(cX+50,cY+l/2-20+0.5);
    context.stroke();
    uArrow('pict04',cX-l/2-60-0.5,cY+l/2-20,30,cSh,2);
    uArrow('pict04',cX+40-0.5,cY+l/2-20,30,cSh,2);

//буквы
    context.fillStyle=cSh;
    context.font='14pt Calibri'
    context.fillText('1 - 1',cX1+100,cY2);
    context.fillText('1',cX-l/2-75,cY+l/2+10);
    context.fillText('1',cX+45,cY+l/2+10);
//размеры
    dsH('pict04',cX-l/2-15,cX-lx/2-rx-2+0.5,cY+0.5,10,150,x1.toFixed(0),'',cSh,1,cX-l/2-15,0);
    dsVL('pict04',cX-lx/2-0.5,cY-0.5,cY-lx/2+15-0.5,5,55,x2.toFixed(0),'',cSh,-cY+25,0)
    dsVL('pict04',cX-lx/2-0.5,cY-lx/2+15-0.5,cY-l/2-15,5,55,x1.toFixed(0),'',cSh,-cY+75,0)
    dsVL('pict04',cX1-100+0.5,cY2+tb+tpod+tcon-15,cY2+tb+tpod,10,70,H0.toFixed(0),'',cSh,-cY2-90,0)
}