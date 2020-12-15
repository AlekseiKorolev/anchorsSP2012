function gNoColon(){
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
    tcon=50;
    //
    var canvas = document.getElementById('pict01');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=120;//координаты верхнего рисунка
    cY2=420.5;//координаты нижнего рисунка
    cY3=470;//координаты нижнего рисунка
    cX=250;//координата по Х
//ПЛАН
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
    //context.rotate(angel/2);
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
//РАЗРЕЗ
    //подливка
    context.beginPath();
    context.fillStyle=cPod;
    context.fillRect(cX-l/2-20,cY2+tb+0.5,l+40,tpod);
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-l/2-20,cY2+tb,l+40,tpod);
    context.stroke();
    //фундамент
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-l/2-50,cY2+tb+tpod,l+100,tcon);
    context.stroke();
    context.beginPath();
    context.fillStyle=cCon;
    context.fillRect(cX-l/2-49.5,cY2+tb+tpod+1,l+99,tcon);
    //заливка колонны
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-ltr/2,cY2,ltr,-hd);
    context.stroke();
    context.beginPath();
    context.fillStyle=cDv;
    context.fillRect(cX-ltr/2+0.5,cY2,ltr-1,-hd-1);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-l/2,cY2,l,tb);
    context.fill();
    context.stroke();
    //траверсы
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX-ltr/2+5,cY2);
    context.lineTo(cX-ltr/2+5,cY2-60);
    context.lineTo(cX-ltr/2-15+5,cY2-60);
    context.lineTo(cX-l/2+5,cY2);
    context.lineTo(cX-ltr/2+5,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX+ltr/2-5,cY2);
    context.lineTo(cX+ltr/2-5,cY2-60);
    context.lineTo(cX+ltr/2+15-5,cY2-60);
    context.lineTo(cX+l/2-5,cY2);
    context.lineTo(cX+ltr/2-5,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX-ltr/2+45,cY2);
    context.lineTo(cX-ltr/2+45,cY2-60);
    context.lineTo(cX-ltr/2-8+45,cY2-60);
    context.lineTo(cX-l/2+55,cY2);
    context.lineTo(cX-ltr/2+45,cY2);
    context.fill();
    context.stroke();//
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.moveTo(cX+ltr/2-45,cY2);
    context.lineTo(cX+ltr/2-45,cY2-60);
    context.lineTo(cX+ltr/2+8-45,cY2-60);
    context.lineTo(cX+l/2-55,cY2);
    context.lineTo(cX+ltr/2-45,cY2);
    context.fill();
    context.stroke();//
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX-lx/2-rb+20,cY2-30,rb,tb+tpod+tcon+30);
    context.fillRect(cX+lx/2-20,cY2-30,rb,tb+tpod+tcon+30);//
    context.fillRect(cX-rb/2,cY2-30,rb,tb+tpod+tcon+30);//
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-lx/2-rb+20,cY2-30,rb,tb+tpod+tcon+30);
    context.rect(cX+lx/2-20,cY2-30,rb,tb+tpod+tcon+30);
    context.rect(cX-rb/2,cY2-30,rb,tb+tpod+tcon+30);
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX-lx/2-rb/2-lsh/2+20,cY2,lsh,-tsh);
    context.fillRect(cX-lx/2-rb/2-lsh/2+20,cY2-tsh,lsh,-tsh);
    context.fillRect(cX+lx/2+rb/2-lsh/2-20,cY2,lsh,-tsh);
    context.fillRect(cX+lx/2+rb/2-lsh/2-20,cY2-tsh,lsh,-tsh);
    context.fillRect(cX-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX-lsh/2,cY2-tsh,lsh,-tsh);
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd/2;i<(cY2+tb+tpod+tcon+15);i+=30){
    context.moveTo(cX-lx/2-rb/2+20,i);
    context.lineTo(cX-lx/2-rb/2+20,i+20);
    context.moveTo(cX-lx/2-rb/2+20,i+24);
    context.lineTo(cX-lx/2-rb/2+20,i+25);
    //
    context.moveTo(cX+lx/2+rb/2-20,i);
    context.lineTo(cX+lx/2+rb/2-20,i+20);
    context.moveTo(cX+lx/2+rb/2-20,i+24);
    context.lineTo(cX+lx/2+rb/2-20,i+25);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd-15;i<(cY2+tb+tpod+tcon);i+=30){
    context.moveTo(cX-0.5,i);
    context.lineTo(cX-0.5,i+20);
    context.moveTo(cX-0.5,i+24);
    context.lineTo(cX-0.5,i+25);
    }
    context.stroke();
//разрез
    context.beginPath();
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.moveTo(cX-l/2-40,cY+l/2-20+0.5);
    context.lineTo(cX-l/2-70,cY+l/2-20+0.5);
    context.moveTo(cX+l/2+40,cY+l/2-20+0.5);
    context.lineTo(cX+l/2+70,cY+l/2-20+0.5);
    context.stroke();
    uArrow('pict01',cX-l/2-60-0.5,cY+l/2-20,30,cSh,2);
    uArrow('pict01',cX+l/2+60-0.5,cY+l/2-20,30,cSh,2);

//стрелочки
    context.lineWidth = 2;
    drawM('pict01',cX,cY,23,cSh);//момент
    drawM('pict01',cX,cY2,23,cSh);//момент
    dArrow('pict01',cX,cY2-40,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-l/2-5,cY,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-l/2-5,cY2+0.5,40,cSh,2);//нормальная сила
    context.beginPath();
    context.fillStyle=cSh;//нормальная сила
    context.lineWidth = 1;
    context.arc(cX,cY,4,0,Math.PI*2,true);
    context.fill();
    context.stroke();
//буквы
    context.fillStyle=cSh;
    context.font='14pt Calibri'
    context.fillText('M',cX+20,cY-15);
    context.fillText('M',cX+20,cY2-15);
    context.fillText('N',cX,cY-5);
    context.fillText('N',cX-20,cY2-70);
    context.fillText('Q',cX-l/2-60,cY-10);
    context.fillText('Q',cX-l/2-60,cY2-10);
    context.fillText('1 - 1',cX-18,cY+l/2+75);
    context.fillText('1',cX-l/2-75,cY+l/2+10);
    context.fillText('1',cX+l/2+65,cY+l/2+10);
//размеры
    dsH('pict01',cX-lx/2-rx-2-0.5,cX-0.5,cY+5,10,l/2+40,'y','1',cSh,1,cX-l/4,cX-l/4+5);
    dsH('pict01',cX-lx/2-2+20-0.5,cX-0.5,cY+55,10,l/2-35,'y','i',cSh,1,cX-l/5,cX-l/5+5);
}