function gSolid2(x1,x2,H0){
    //габариты базы
    l=201;
    b=111;
    rb=10.5;
    tb=11;
    cBase='#D3E29D';
    //габарит двутавра
    ld=121;
    bd=81;
    tp=10;
    ts=5;
    r=8;
    hd=100;
    cDv='#8AB446';
    cDv2='#ACC864';
    //болты
    lx=170;
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
    var canvas = document.getElementById('pict02');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=130;//координаты верхнего рисунка
    cY2=150.5;//координаты нижнего рисунка
    cX=220;//координата по Х
    cX1=440;
//ПЛАН
//фундамент
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cCon;
    context.strokeStyle='black';
    context.rect(cX-l/2-20,cY-b/2-35,l+30,b+70);
    context.fill();
    context.stroke();
//база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-l/2,cY-b/2,l,b);
    context.fill();
    context.stroke();
    //вырезы
    context.beginPath();
    context.fillStyle=cCon;
    context.arc(cX-lx/2,cY-bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX-lx/2,cY-bx/2-rb,lx-l,rb*2);
    context.beginPath();
    context.fillStyle=cCon;
    context.arc(cX-lx/2,cY+bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX-lx/2,cY+bx/2-rb,lx-l,rb*2);
    //обводим вырезы
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.arc(cX-lx/2,cY-bx/2,rb,Math.PI*0.5,Math.PI*1.5,true);
    context.stroke();
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.arc(cX-lx/2,cY+bx/2,rb,Math.PI*0.5,Math.PI*1.5,true);
    context.stroke();
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.moveTo(cX-lx/2,cY-bx/2-rb);
    context.lineTo(cX-l/2,cY-bx/2-rb);
    context.moveTo(cX-lx/2,cY-bx/2+rb);
    context.lineTo(cX-l/2,cY-bx/2+rb);
    context.moveTo(cX-lx/2,cY+bx/2+rb);
    context.lineTo(cX-l/2,cY+bx/2+rb);
    context.moveTo(cX-lx/2,cY+bx/2-rb);
    context.lineTo(cX-l/2,cY+bx/2-rb);
    context.stroke();
//двутавр
    context.beginPath();//полка
    context.fillStyle=cDv;
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-ld/2,cY-bd/2,tp,bd);
    context.fill();
    context.stroke();
    context.beginPath();//стенка
    context.fillStyle=cDv;//заливаем
    context.rect(cX-ld/2+1,cY-ts/2-r+2,ld-2,ts+2*r-2);
    context.fill();
    context.beginPath(); //убираем ненужное
    context.fillStyle=cBase;
    context.rect(cX-ld/2+tp+r,cY-ts/2-r,ld-2*tp-2*r,r);
    context.rect(cX-ld/2+tp+r,cY+ts/2+r+1,ld-2*tp-2*r,-r);
    context.fill();
    context.beginPath();//вычерчиваем контур стенки
    context.lineWidth=1;
    context.strokeStyle='black';
    context.moveTo(cX-ld/2+tp+r-1,cY-ts/2);
    context.lineTo(cX+ld/2-tp-r+1,cY-ts/2);
    context.moveTo(cX-ld/2+tp+r-1,cY+ts/2);
    context.lineTo(cX+ld/2-tp-r+1,cY+ts/2);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления лево верх
    context.fillStyle=cBase;
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра лево верх
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*0.5,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления лево низ
    context.fillStyle=cBase;
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*2,false);
    context.fill();
    context.beginPath();//закругления двутавра лево низ
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*1.5,false);
    context.stroke();
//болты
    context.beginPath();
    context.fillStyle=cB;
    context.lineWidth = 1;
    context.arc(cX-lx/2,cY-bx/2,rx,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.fillStyle=cB;
    context.lineWidth = 1;
    context.arc(cX-lx/2,cY+bx/2,rx,0,Math.PI*2,true);
    context.fill();
    context.stroke();
//оси болтов
    //горизонтальная ось
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    for(i=cX-lx/2-30;i<(cX+lx/2+30);i+=30){
    context.moveTo(i,cY+bx/2-0.5);
    context.lineTo(i+20,cY+bx/2-0.5);
    context.moveTo(i+24,cY+bx/2-0.5);
    context.lineTo(i+25,cY+bx/2-0.5);
    //
    context.moveTo(i,cY-bx/2-0.5);
    context.lineTo(i+20,cY-bx/2-0.5);
    context.moveTo(i+24,cY-bx/2-0.5);
    context.lineTo(i+25,cY-bx/2-0.5);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY-bx/2-30;i<(cY+bx/2+30);i+=30){
    context.moveTo(cX-lx/2-0.5,i);
    context.lineTo(cX-lx/2-0.5,i+20);
    context.moveTo(cX-lx/2-0.5,i+24);
    context.lineTo(cX-lx/2-0.5,i+25);
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
    for(i=25;i<220;i+=30){
    context.moveTo(cX-0.5,i);
    context.lineTo(cX-0.5,i+20);
    context.moveTo(cX-0.5,i+24);
    context.lineTo(cX-0.5,i+25);
    }
    context.stroke();
    //обрезание
    context.beginPath();
    context.fillStyle='white';
    context.fillRect(cX+10,cY-b/2-40,l/2+100,b+80);
//РАЗРЕЗ
    //подливка
    context.beginPath();
    context.fillStyle=cPod;
    context.fillRect(cX1-l/2-20,cY2+tb,l+40,tpod);
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
    context.fillStyle=cDv;
    context.fillRect(cX1-ld/2,cY2,tp,-hd);
    context.fillRect(cX1+ld/2,cY2,-tp,-hd);
    context.fillStyle=cDv2;
    context.fillRect(cX1-ld/2+tp,cY2,ld-2*tp,-hd);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX1-l/2,cY2,l,tb);
    context.fill();
    context.stroke();
    //двутавр
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.moveTo(cX1-ld/2,cY2);
    context.lineTo(cX1-ld/2,cY2-hd);
    context.moveTo(cX1-ld/2+tp,cY2);
    context.lineTo(cX1-ld/2+tp,cY2-hd);
    //
    context.moveTo(cX1+ld/2,cY2);
    context.lineTo(cX1+ld/2,cY2-hd);
    context.moveTo(cX1+ld/2-tp,cY2);
    context.lineTo(cX1+ld/2-tp,cY2-hd);
    context.stroke();
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX1-lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+10);
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+10);
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX1-lx/2-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX1-lx/2-lsh/2,cY2-tsh,lsh,-tsh);
    context.fillRect(cX1+lx/2-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX1+lx/2-lsh/2,cY2-tsh,lsh,-tsh);
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd/2;i<(cY2+tb+tpod+tcon-30);i+=30){
    context.moveTo(cX1-lx/2-0.5,i);
    context.lineTo(cX1-lx/2-0.5,i+20);
    context.moveTo(cX1-lx/2-0.5,i+24);
    context.lineTo(cX1-lx/2-0.5,i+25);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd-15;i<(cY2+tb+tpod+tcon-10);i+=30){
    context.moveTo(cX1-0.5,i);
    context.lineTo(cX1-0.5,i+20);
    context.moveTo(cX1-0.5,i+24);
    context.lineTo(cX1-0.5,i+25);
    }
    context.stroke();
    //обрезание
    context.beginPath();
    context.fillStyle='white';
    context.fillRect(cX+10,cY+b/2+20,l/2+150,30);
//разрез
    context.beginPath();
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.fillStyle=cSh;
    context.moveTo(cX-l/2-60,cY-bx/2);
    context.lineTo(cX-l/2-90,cY-bx/2);
    context.moveTo(cX+30,cY-bx/2);
    context.lineTo(cX+60,cY-bx/2);
    context.stroke();
    uArrow('pict02',cX-l/2-80-0.5,cY-bx/2,30,cSh,2);
    uArrow('pict02',cX+50-0.5,cY-bx/2,30,cSh,2);

//буквы
    context.fillStyle=cSh;
    context.font='14pt Calibri'
    context.fillText('1 - 1',cX1-50,cY-100);
    context.fillText('1',cX-l/2-95,cY-b/2+50);
    context.fillText('1',cX+55,cY-b/2+50);
//размеры
    dsH('pict02',cX-lx/2-35-0.5,cX-lx/2-0.5,cY+b/2,40,30,x2.toFixed(0),'',cSh,1,cX-lx/2-35/2-15,0);
    dsVL('pict02',cX-lx/2-35-0.5,cY+b/2+35,cY+bx/2-0.5,10,20,x2.toFixed(0),'',cSh,-cY-70,0)
    dsVL('pict02',cX-lx/2-35-0.5,cY+bx/2-0.5,cY-bx/2-0.5,10,20,x1.toFixed(0),'',cSh,-cY,0)
    dsVL('pict02',cX1-l/2+10,cY2+tb+tpod+tcon-20,cY2+tp+tpod+1.0,10,80,H0.toFixed(0),'',cSh,-cY2-80,0)
}