function gNoSolid2(x1,x2,H0){
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
    tcon=100/1.5;
    //
    var canvas = document.getElementById('pict03');
    var context = canvas.getContext("2d");
    context.fillStyle='white';
    context.fillRect(0,0,500,540);
    cY=100;//координаты верхнего рисунка
    cY2=130.5;//координаты нижнего рисунка
    cY3=510;//координаты нижнего рисунка
    cX=250;//координата по Х
    cX1=450;//координата по Х

//ПЛАН
    //фундамент
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cCon;
    context.strokeStyle='black';
    context.rect(cX-def-bx-15-0.5,cY-100+0.5,110,200);
    context.stroke();
    context.fillRect(cX-def-bx-15,cY-100+1,110+1,200-1);
    //
    angel=Math.PI/2
    def=75;
    context.translate(cX-def,cY);
    context.rotate(angel);
    basePlan2(0,0);
    context.rotate(-angel);
    context.translate(-cX+def,-cY);
    //горизонтальная ось
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    for(i=130;i<220;i+=30){
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
        context.moveTo(cX-75+0.5,i);
        context.lineTo(cX-75+0.5,i+20);
        context.moveTo(cX-75+0.5,i+24);
        context.lineTo(cX-75+0.5,i+25);
    }
    context.stroke();

//РАЗРЕЗ
    //подливка
    context.beginPath();
    context.fillStyle=cPod;
    context.strokeStyle='black';
    context.lineWidth=1;
    context.rect(cX1-def-bd/2-20,cY2+tb,bd+40,tpod);
    context.rect(cX1+def-bd/2-20,cY2+tb,bd+40,tpod);
    context.fill();
    context.stroke();
    //фундамент
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-def-bd/2-50,cY2+tb+tpod,def*2+bd+100,tcon);
    context.stroke();
    context.beginPath();
    context.fillStyle=cCon;
    context.fillRect(cX1-def-bd/2-50+0.5,cY2+tb+tpod+0.5,def*2+bd+99,tcon+1);
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX1-def-b/2+5,cY2,b-10,tb);
    context.fill();
    context.stroke();
    //двутавр
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-bd/2-def,cY2,bd,-hd);
    context.stroke();
    context.beginPath();
    context.fillStyle=cDv;
    context.fillRect(cX1-bd/2-def+0.5,cY2-0.5,bd-1,-hd-1);
    //траверсы
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cDv2;
    context.strokeStyle='black';
    context.rect(cX1-bd/2-def,cY2,-tt,-ht);
    context.rect(cX1-bd/2+def,cY2,-tt,-ht);
    context.fill();
    context.stroke();
    //база
    context.beginPath();
    context.lineWidth=1;
    context.fillStyle=cBase;
    context.strokeStyle='black';
    context.rect(cX1-def-b/2,cY2-ht,b,tb);
    context.fill();
    context.stroke();
    //Болты
    context.beginPath();
    context.fillStyle=cB;
    context.fillRect(cX1-def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+10);
    context.fillRect(cX1-def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+10);//
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    context.rect(cX1-def-bx/2-rb/2,cY2-ht-20,rb,tb+tpod+tcon+ht+10);
    context.rect(cX1-def+bx/2+rb/2,cY2-ht-20,-rb,tb+tpod+tcon+ht+10);//
    context.stroke();
    //шайбы
    context.beginPath();
    context.fillStyle=cSh;
    context.fillRect(cX1-def-lsh/2-bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX1-def-lsh/2-bx/2,cY2-ht-2*tsh,lsh,tsh);
    context.fillRect(cX1-def-lsh/2+bx/2,cY2-ht-tsh,lsh,tsh);
    context.fillRect(cX1-def-lsh/2+bx/2,cY2-ht-2*tsh,lsh,tsh);//
    //оси болтов
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd+10;i<(cY2+tb+tpod+55);i+=30){
    context.moveTo(cX1-def-bx/2-0.5,i);
    context.lineTo(cX1-def-bx/2-0.5,i+20);
    context.moveTo(cX1-def-bx/2-0.5,i+24);
    context.lineTo(cX1-def-bx/2-0.5,i+25);
    //
    context.moveTo(cX1-def+bx/2-0.5,i);
    context.lineTo(cX1-def+bx/2-0.5,i+20);
    context.moveTo(cX1-def+bx/2-0.5,i+24);
    context.lineTo(cX1-def+bx/2-0.5,i+25);
    }
    context.stroke();
    //вертикальная ось
    context.beginPath();
    context.lineWidth=1;
    context.strokeStyle='black';
    for(i=cY2-hd-15;i<(cY2+tb+tpod+tcon);i+=30){
    context.moveTo(cX1-def-0.5,i);
    context.lineTo(cX1-def-0.5,i+20);
    context.moveTo(cX1-def-0.5,i+24);
    context.lineTo(cX1-def-0.5,i+25);//
    }
    context.stroke();
    //обрезаем
    context.beginPath();
    context.fillStyle='white';
    context.fillRect(cX+10,cY+b/2+30,l/2+250,20);
//разрез
    context.beginPath();
    context.lineWidth=4;
    context.fillStyle=cSh;
    context.strokeStyle=cSh;
    context.moveTo(cX-def-l/2-40,cY-bx/2-55);
    context.lineTo(cX-def-l/2-70,cY-bx/2-55);
    context.moveTo(cX-def+l/2+40,cY-bx/2-55);
    context.lineTo(cX-def+l/2+70,cY-bx/2-55);
    context.stroke();
    uArrow('pict03',cX-def-l/2-60-0.5,cY-bx/2-55,30,cSh,2);
    uArrow('pict03',cX-def+l/2+60-0.5,cY-bx/2-55,30,cSh,2);
//буквы
    context.fillStyle=cSh;
    context.font='14pt Calibri'
    context.fillText('1 - 1',cX+100,cY-88);
    context.fillText('1',cX-def-l/2-75,cY-bx/2-30);
    context.fillText('1',cX-def+l/2+65,cY-bx/2-30);
//размеры
    dsH('pict03',cX-def-bx/2+0.5,cX-def+bx/2+0.5,cY+90+0.5,10,50,x1.toFixed(0),'',cSh,1,cX-def-13,0);
    dsH('pict03',cX-def-b/2-15,cX-def-bx/2+0.5,cY+90+0.5,10,50,x2.toFixed(0),'',cSh,1,cX-def-b/2-7,0);
    dsVL('pict03',cX-lx/2-65-0.5,cY+lx/2+l/2+15,cY+lx/2-0.5,5,30,x2.toFixed(0),'',cSh,-cY-95,0)
    dsVL('pict03',cX1-100+0.5,cY2+tb+tpod+tcon-10-0.5,cY2+tp+tpod+5,10,80,H0.toFixed(0),'',cSh,-cY2-70,0)

}

//колонна план
function basePlan2(cX,cY){
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
    var canvas = document.getElementById('pict03');
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
    context.fillStyle=cCon;
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
    context.fillStyle=cCon;
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра лево верх
    context.arc(cX-ld/2+tp+r,cY-ts/2-r,r,Math.PI,Math.PI*0.5,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления лево низ
    context.fillStyle=cCon;
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*2,false);
    context.fill();
    context.beginPath();//закругления двутавра лево низ
    context.arc(cX-ld/2+tp+r,cY+ts/2+r,r,Math.PI,Math.PI*1.5,false);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления право верх
    context.fillStyle=cCon;
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI,Math.PI*2,true);
    context.fill();
    context.beginPath();//закругления двутавра право верх верх
    context.arc(cX+ld/2-tp-r,cY-ts/2-r,r,Math.PI*0.5,Math.PI*2,true);
    context.stroke();
    context.beginPath();//убираем не нужное в местах закругления право низ
    context.fillStyle=cCon;
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