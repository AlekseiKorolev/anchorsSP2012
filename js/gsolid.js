function gSolid(){
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
    tcon=50;
    //
    var canvas = document.getElementById('pict01');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=100;//координаты верхнего рисунка
    cY2=340.5;//координаты нижнего рисунка
    cY3=470;//координаты нижнего рисунка
    cX=250;//координата по Х
//ПЛАН
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
    context.fillStyle='white';
    context.arc(cX-lx/2,cY-bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX-lx/2,cY-bx/2-rb,lx-l,rb*2);
    context.beginPath();
    context.fillStyle='white';
    context.arc(cX-lx/2,cY+bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX-lx/2,cY+bx/2-rb,lx-l,rb*2);
    context.beginPath();
    context.fillStyle='white';
    context.arc(cX+lx/2,cY+bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX+lx/2,cY+bx/2-rb,l-lx,rb*2);
    context.beginPath();
    context.fillStyle='white';
    context.arc(cX+lx/2,cY-bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.fillRect(cX+lx/2,cY-bx/2-rb,l-lx,rb*2);
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
    context.arc(cX+lx/2,cY+bx/2,rb,Math.PI*1.5,Math.PI*0.5,true);
    context.stroke();
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.arc(cX+lx/2,cY-bx/2,rb,Math.PI*1.5,Math.PI*0.5,true);
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
    context.moveTo(cX+lx/2,cY-bx/2-rb);
    context.lineTo(cX+l/2,cY-bx/2-rb);
    context.moveTo(cX+lx/2,cY-bx/2+rb);
    context.lineTo(cX+l/2,cY-bx/2+rb);
    context.moveTo(cX+lx/2,cY+bx/2+rb);
    context.lineTo(cX+l/2,cY+bx/2+rb);
    context.moveTo(cX+lx/2,cY+bx/2-rb);
    context.lineTo(cX+l/2,cY+bx/2-rb);
    context.stroke();
//двутавр
    context.beginPath();//полка
    context.fillStyle=cDv;
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-ld/2,cY-bd/2,tp,bd);
    context.fill();
    context.stroke();
    context.beginPath();//полка справа
    context.fillStyle=cDv;
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX+ld/2,cY-bd/2,-tp,bd);
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
    context.beginPath();//убираем не нужное в местах закругления право верх
    context.fillStyle=cBase;
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра право верх верх
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI*0.5,Math.PI*2,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления право низ
    context.fillStyle=cBase;
    context.arc(cX+ld/2-tp-r,cY+ts/2+r,r,Math.PI,Math.PI*2,false);
    context.fill();
    context.beginPath();//закругления двутавра право низ
    context.arc(cX+ld/2-tp-r,cY+ts/2+r,r,Math.PI*2,Math.PI*1.5,true);
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
    context.beginPath();
    context.fillStyle=cB;
    context.lineWidth = 1;
    context.arc(cX+lx/2,cY+bx/2,rx,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.fillStyle=cB;
    context.lineWidth = 1;
    context.arc(cX+lx/2,cY-bx/2,rx,0,Math.PI*2,true);
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
    //
    context.moveTo(cX+lx/2-0.5,i);
    context.lineTo(cX+lx/2-0.5,i+20);
    context.moveTo(cX+lx/2-0.5,i+24);
    context.lineTo(cX+lx/2-0.5,i+25);
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
    for(i=25;i<180;i+=30){
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
    context.fillRect(cX-l/2-20,cY2+tb,l+40,tpod);
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
    context.fillStyle=cDv;
    context.fillRect(cX-ld/2,cY2,tp,-hd);
    context.fillRect(cX+ld/2,cY2,-tp,-hd);
    context.fillStyle=cDv2;
    context.fillRect(cX-ld/2+tp,cY2,ld-2*tp,-hd);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-l/2,cY2,l,tb);
    context.fill();
    context.stroke();
    //двутавр
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.moveTo(cX-ld/2,cY2);
    context.lineTo(cX-ld/2,cY2-hd);
    context.moveTo(cX-ld/2+tp,cY2);
    context.lineTo(cX-ld/2+tp,cY2-hd);
    //
    context.moveTo(cX+ld/2,cY2);
    context.lineTo(cX+ld/2,cY2-hd);
    context.moveTo(cX+ld/2-tp,cY2);
    context.lineTo(cX+ld/2-tp,cY2-hd);
    context.stroke();
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX-lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+30);
    context.fillRect(cX+lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+30);
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+30);
    context.rect(cX+lx/2-rb/2,cY2-30,rb,tb+tpod+tcon+30);
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX-lx/2-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX-lx/2-lsh/2,cY2-tsh,lsh,-tsh);
    context.fillRect(cX+lx/2-lsh/2,cY2,lsh,-tsh);
    context.fillRect(cX+lx/2-lsh/2,cY2-tsh,lsh,-tsh);
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd/2;i<(cY2+tb+tpod+tcon+15);i+=30){
    context.moveTo(cX-lx/2-0.5,i);
    context.lineTo(cX-lx/2-0.5,i+20);
    context.moveTo(cX-lx/2-0.5,i+24);
    context.lineTo(cX-lx/2-0.5,i+25);
    //
    context.moveTo(cX+lx/2-0.5,i);
    context.lineTo(cX+lx/2-0.5,i+20);
    context.moveTo(cX+lx/2-0.5,i+24);
    context.lineTo(cX+lx/2-0.5,i+25);
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
    context.moveTo(cX-l/2-40,cY+bx/2);
    context.lineTo(cX-l/2-70,cY+bx/2);
    context.moveTo(cX+l/2+40,cY+bx/2);
    context.lineTo(cX+l/2+70,cY+bx/2);
    context.stroke();
    uArrow('pict01',cX-l/2-60-0.5,cY+bx/2,30,cSh,2);
    uArrow('pict01',cX+l/2+60-0.5,cY+bx/2,30,cSh,2);
//усилия
    context.beginPath();
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.moveTo(cX-l/2,cY3);
    context.lineTo(cX+l/2,cY3);
    context.stroke();
    dsH('pict01',cX-l/2,cX+lx/2-0.5,cY3+0.5,5,65,'l','a',cSh,1,cX-5,cX);
    dsH('pict01',cX-l/2,cX-15-0.5,cY3+20.5,5,25,'x','',cSh,1,cX-l/3+10,cX);
    for(i=0;i<=(l/2-15);i+=17){uArrow('pict01',cX-l/2+i,cY3,20,cSh,1)}
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle=cSh;
    context.moveTo(cX-l/2,cY3+20-0.5);
    context.lineTo(cX-15,cY3+20-0.5);
    context.stroke();
    dArrow('pict01',cX+lx/2,cY3,30,cSh,2);

//стрелочки
    context.lineWidth = 2;
    drawM('pict01',cX,cY,23,cSh);//момент
    drawM('pict01',cX,cY2,23,cSh);//момент
    dArrow('pict01',cX-70,cY2-40,40,cSh,2);//нормальная сила
    uArrow('pict01',cX,cY+10,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-l/2-5,cY,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-l/2-5,cY2+0.5,40,cSh,2);//нормальная сила
    context.beginPath();
    context.fillStyle=cSh;//нормальная сила
    context.lineWidth = 1;
    context.arc(cX-70,cY,4,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.fillStyle=cSh;//горизонтальная сила
    context.lineWidth = 1;
    context.arc(cX,cY2,4,0,Math.PI*2,true);
    context.fill();
    context.stroke();
//буквы
    context.fillStyle=cSh;
    context.font='14pt Calibri'
    context.fillText('M',cX+20,cY-15);
    context.fillText('M',cX+20,cY2-15);
    context.fillText('N',cX-85,cY-10);
    context.fillText('N',cX-90,cY2-70);
    context.fillText('Q',cX+5,cY+50);context.fillText('y',cX+20,cY+55);
    context.fillText('Q',cX-10,cY2+20);context.fillText('y',cX+5,cY2+25);
    context.fillText('Q',cX-l/2-60,cY-10);context.fillText('x',cX-l/2-45,cY-5);
    context.fillText('Q',cX-l/2-60,cY2-10);context.fillText('x',cX-l/2-45,cY2-5);
    context.fillText('1 - 1',cX-18,cY+b/2+55);
    context.fillText('1',cX-l/2-75,cY+b/2+10);
    context.fillText('1',cX+l/2+65,cY+b/2+10);
    context.fillText('P',cX+lx/2+5,cY3-10);
    context.fillText('R',cX-l/2-25,cY3+15);context.fillText('b',cX-l/2-15,cY3+20);
//размеры
    dsV('pict01',cX+l/2,cY+b/2,cY-b/2,10,30,'b','s',cSh,-cY-20,-cY-10);
    dsH('pict01',cX-lx/2-0.5,cX-0.5,cY+b/2,10,20,'c','',cSh,1,cX-lx/4,0);
    dsH('pict01',cX-0.5,cX+lx/2-0.5,cY+b/2,10,20,'c','',cSh,1,cX+lx/4,0);
    dsHUp('pict01',cX-l/2,cX+l/2,cY-b/2,10,20,'l','s',cSh,1,cX-15,cX-10);
    dsHUp('pict01',cX-70-0.5,cX-0.5,cY2-80,10,30,'e','0',cSh,1,cX-40,cX-30);
}