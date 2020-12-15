function gNoSolid(){
        //габариты базы
    l=41;
    b=81;
    rb=10/1.5;
    tb=11;
    tt=6;
    ht=65;
    cBase='#D3E29D';
    //габарит двутавра
    kdv=1.456;
    dvplus=0.0;
    ld=Math.round(121/kdv)+dvplus;
    bd=Math.round(80/kdv)+dvplus;
    tp=Math.round(10/kdv);
    ts=Math.round(5/kdv)+dvplus;
    r=Math.round(8/kdv)+dvplus;
    hd=100;
    cDv='#8AB446';
    cDv2='#ACC864';
    //болты
    lx=150;
    bx=40;
    rx=6/1.5;
    cB='#2D6B22';
    //шайба
    cSh='#072A16';
    tsh=7;
    lsh=25;
    //подливка
    cPod='#DDDDDD';
    tpod=20/1.666;
    //бетон
    cCon='#EEEEEE';
    tcon=50/1.5;
    //
    var canvas = document.getElementById('pict01');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=100;//координаты верхнего рисунка
    cY2=400.5;//координаты нижнего рисунка
    cY3=510;//координаты нижнего рисунка
    cX=250;//координата по Х

//ПЛАН
    angel=Math.PI/2
    def=75;
    context.translate(cX-def,cY);
    context.rotate(angel);
    basePlan(0,0);
    basePlan(0,-def*2);
    context.rotate(-angel);
    context.translate(-cX+def,-cY);
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
    for(i=25;i<180;i+=30){
        context.moveTo(cX-75+0.5,i);
        context.lineTo(cX-75+0.5,i+20);
        context.moveTo(cX-75+0.5,i+24);
        context.lineTo(cX-75+0.5,i+25);
    }
    for(i=25;i<180;i+=30){
        context.moveTo(cX+75-0.5,i);
        context.lineTo(cX+75-0.5,i+20);
        context.moveTo(cX+75-0.5,i+24);
        context.lineTo(cX+75-0.5,i+25);
    }
    context.stroke();

//РАЗРЕЗ
    //подливка
    context.beginPath();
    context.fillStyle=cPod;
    context.strokeStyle='black';
    context.lineWidth=1;
    context.rect(cX-def-bd/2-20,cY2+tb,bd+40,tpod);
    context.rect(cX+def-bd/2-20,cY2+tb,bd+40,tpod);
    context.fill();
    context.stroke();
    //фундамент
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-def-bd/2-50,cY2+tb+tpod,def*2+bd+100,tcon);
    context.stroke();
    context.beginPath();
    context.fillStyle=cCon;
    context.fillRect(cX-def-bd/2-50+0.5,cY2+tb+tpod+0.5,def*2+bd+99,tcon+1);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-def-b/2+5,cY2,b-10,tb);
    context.rect(cX+def-b/2+5,cY2,b-10,tb);
    context.fill();
    context.stroke();
    //двутавр
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-bd/2-def,cY2,bd,-hd);
    context.rect(cX-bd/2+def,cY2,bd,-hd);
    context.stroke();
    context.beginPath();
    context.fillStyle=cDv;
    context.fillRect(cX-bd/2-def+0.5,cY2-0.5,bd-1,-hd-1);
    context.fillRect(cX-bd/2+def+0.5,cY2-0.5,bd-1,-hd-1);
    //траверсы
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.strokeStyle='black';
    context.rect(cX-bd/2-def,cY2,-tt,-ht);
    context.rect(cX-bd/2+def,cY2,-tt,-ht);
    context.rect(cX+bd/2-def,cY2,tt,-ht);
    context.rect(cX+bd/2+def,cY2,tt,-ht);
    context.fill();
    context.stroke();
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-def-b/2,cY2-ht,b,tb);
    context.rect(cX+def-b/2,cY2-ht,b,tb);
    context.fill();
    context.stroke();
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX-def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+20);
    context.fillRect(cX-def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+20);//
    context.fillRect(cX+def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+20);
    context.fillRect(cX+def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+20);
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX-def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+20);
    context.rect(cX-def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+20);//
    context.rect(cX+def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+20);
    context.rect(cX+def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+20);
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX-def-lsh/2-bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX-def-lsh/2-bx/2,cY2-ht-2*tsh,lsh,tsh);
    context.fillRect(cX-def-lsh/2+bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX-def-lsh/2+bx/2,cY2-ht-2*tsh,lsh,tsh);//
    context.fillRect(cX+def-lsh/2-bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX+def-lsh/2-bx/2,cY2-ht-2*tsh,lsh,tsh);
    context.fillRect(cX+def-lsh/2+bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX+def-lsh/2+bx/2,cY2-ht-2*tsh,lsh,tsh);
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd+10;i<(cY2+tb+tpod+35);i+=30){
    context.moveTo(cX-def-bx/2-0.5,i);
    context.lineTo(cX-def-bx/2-0.5,i+20);
    context.moveTo(cX-def-bx/2-0.5,i+24);
    context.lineTo(cX-def-bx/2-0.5,i+25);
    //
    context.moveTo(cX-def+bx/2-0.5,i);
    context.lineTo(cX-def+bx/2-0.5,i+20);
    context.moveTo(cX-def+bx/2-0.5,i+24);
    context.lineTo(cX-def+bx/2-0.5,i+25);
    //
    context.moveTo(cX+def-bx/2-0.5,i);
    context.lineTo(cX+def-bx/2-0.5,i+20);
    context.moveTo(cX+def-bx/2-0.5,i+24);
    context.lineTo(cX+def-bx/2-0.5,i+25);
    //
    context.moveTo(cX+def+bx/2-0.5,i);
    context.lineTo(cX+def+bx/2-0.5,i+20);
    context.moveTo(cX+def+bx/2-0.5,i+24);
    context.lineTo(cX+def+bx/2-0.5,i+25);
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
    context.lineTo(cX-0.5,i+25);//
    context.moveTo(cX-def-0.5,i);
    context.lineTo(cX-def-0.5,i+20);
    context.moveTo(cX-def-0.5,i+24);
    context.lineTo(cX-def-0.5,i+25);//
    context.moveTo(cX+def-0.5,i);
    context.lineTo(cX+def-0.5,i+20);
    context.moveTo(cX+def-0.5,i+24);
    context.lineTo(cX+def-0.5,i+25);//
    }
    context.stroke();
//разрез
    context.beginPath();
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.moveTo(cX-def-l/2-40,cY+bx/2+55);
    context.lineTo(cX-def-l/2-70,cY+bx/2+55);
    context.moveTo(cX+def+l/2+40,cY+bx/2+55);
    context.lineTo(cX+def+l/2+70,cY+bx/2+55);
    context.stroke();
    uArrow('pict01',cX-def-l/2-60-0.5,cY+bx/2+55,30,cSh,2);
    uArrow('pict01',cX+def+l/2+60-0.5,cY+bx/2+55,30,cSh,2);
//усилия
    context.beginPath();
    context.lineWidth=4;
    context.strokeStyle=cSh;
    context.moveTo(cX-def-b/2,cY3);
    context.lineTo(cX-def+b/2,cY3);//
    context.moveTo(cX+def-b/2,cY3);
    context.lineTo(cX+def+b/2,cY3);
    context.stroke();
    //dsH('pict01',cX-l/2,cX+lx/2-0.5,cY3+0.5,5,65,'l','a',cSh,1,cX-5,cX);
    //dsH('pict01',cX-l/2,cX-15-0.5,cY3+20.5,5,25,'x','',cSh,1,cX-l/3+10,cX);
    for(i=0;i<=b;i+=20){uArrow('pict01',cX+def-b/2+i,cY3,20,cSh,1)}
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle=cSh;
    context.moveTo(cX+def-b/2,cY3+20-0.5);
    context.lineTo(cX+def+b/2,cY3+20-0.5);
    context.stroke();
    dArrow('pict01',cX-def,cY3,30,cSh,2);
//стрелочки
    context.lineWidth = 2;
    drawMR('pict01',cX,cY,23,cSh);//момент
    drawMR('pict01',cX,cY2,23,cSh);//момент
    dArrow('pict01',cX,cY2-40,40,cSh,2);//нормальная сила
    uArrow('pict01',cX,cY+10,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-def-b/2,cY,40,cSh,2);//нормальная сила
    rArrow('pict01',cX-def-b/2,cY2+0.5,40,cSh,2);//нормальная сила
    context.beginPath();
    context.fillStyle=cSh;//нормальная сила
    context.lineWidth = 1;
    context.arc(cX,cY,4,0,Math.PI*2,true);
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
    context.fillText('N',cX-15,cY-5);
    context.fillText('N',cX-15,cY2-70);
    context.fillText('Q',cX+5,cY+50);context.fillText('y',cX+20,cY+55);
    context.fillText('Q',cX-10,cY2+20);context.fillText('y',cX+5,cY2+25);
    context.fillText('Q',cX-def-b/2-60,cY-10);context.fillText('x',cX-def-b/2-45,cY-5);
    context.fillText('Q',cX-def-b/2-60,cY2-10);context.fillText('x',cX-def-b/2-45,cY2-5);
    context.fillText('1 - 1',cX-18,cY+b/2+135);
    context.fillText('1',cX-def-l/2-75,cY+b/2+65);
    context.fillText('1',cX+def+l/2+65,cY+b/2+65);
    context.fillText('P',cX-def+5,cY3-10);
    //context.fillText('R',cX-l/2-25,cY3+15);context.fillText('b',cX-l/2-15,cY3+20);
//размеры
    dsH('pict01',cX-def+0.5,cX+def-0.5,cY+90+0.5,10,50,'h','',cSh,1,cX,0);
    dsH('pict01',cX+0.5,cX+def-0.5,cY+100+0.5,10,15,'b','',cSh,1,cX+def/2,0);
}

//колонна план
function basePlan(cX,cY){
        //габариты базы
    l=41;
    b=81;
    rb=10/1.5;
    tb=11;
    tt=5
    cBase='#D3E29D';
    //габарит двутавра
    kdv=1.666;
    dvplus=0.0;
    ld=Math.round(121/kdv)+dvplus;
    bd=Math.round(81/kdv)+dvplus;
    tp=Math.round(10/kdv);
    ts=Math.round(5/kdv)+dvplus;
    r=Math.round(8/kdv)+dvplus;
    hd=100;
    cDv='#8AB446';
    cDv2='#ACC864';
    //болты
    lx=130;
    bx=30;
    rx=6/1.5;
    cB='#2D6B22';
   /* //шайба
    cSh='#072A16';
    tsh=10;
    lsh=25;
    //подливка
    cPod='#DDDDDD';
    tpod=20;
    //бетон
    cCon='#EEEEEE';
    tcon=50;*/
    //
    var canvas = document.getElementById('pict01');
    var context = canvas.getContext("2d");
    //context.fillStyle='white';
    //context.fillRect(0,0,500,540);
    //cY=100;//координаты верхнего рисунка
    //cY2=340.5;//координаты нижнего рисунка
    //cY3=470;//координаты нижнего рисунка
    //cX=250;//координата по Х

    //траверсы
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.strokeStyle='black';
    context.rect(cX-lx/2-l/2-10,cY-bd/2,lx+l+20,-tt);
    context.rect(cX-lx/2-l/2-10,cY+bd/2,lx+l+20,tt);
    context.fill();
    context.stroke();
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX-lx/2-l/2,cY-b/2,l,b);
    context.rect(cX+lx/2-l/2,cY-b/2,l,b);
    context.fill();
    context.stroke();
    //вырезаем и обводим
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.fillStyle='white';
    context.arc(cX-lx/2,cY-bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(cX-lx/2,cY+bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.stroke();
    context.arc(cX+lx/2,cY+bx/2,rb,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.stroke();
    context.arc(cX+lx/2,cY-bx/2,rb,0,Math.PI*2,true);
    context.fill();
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
    context.fillStyle='white';
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
    context.fillStyle='white';
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра лево верх
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*0.5,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления лево низ
    context.fillStyle='white';
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*2,false);
    context.fill();
    context.beginPath();//закругления двутавра лево низ
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*1.5,false);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления право верх
    context.fillStyle='white';
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра право верх верх
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI*0.5,Math.PI*2,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления право низ
    context.fillStyle='white';
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
}