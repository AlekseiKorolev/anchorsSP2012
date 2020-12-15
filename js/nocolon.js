function calcNoColon(){

    var Asa=0;
    toKGS=98.100127530165789215525980183774;
    toKGS2=101.93679941176470588235294117647;
    var txt;
    var k0=parseFloat(document.getElementById('k0').value);
    var diamA=parseInt(document.getElementById('diamA').value);
    var steel=document.getElementById('steel').value;
    var typeA=document.getElementById('typeA').value;
    var n=parseInt(document.getElementById('n').value);
    var N=parseFloat(document.getElementById('N').value);
    var M=parseFloat(document.getElementById('M').value);
    var Qx=parseFloat(document.getElementById('Qx').value);
    var alpha=parseFloat(document.getElementById('alpha').value);
    var classB=document.getElementById('classB').value;
    var y1=parseInt(document.getElementById('y1').value);
    var sumyi=parseFloat(document.getElementById('sumyi').value);
    var p=parseFloat(document.getElementById('pNoColon').value);

    if(document.getElementById('pCheck').checked==true){
        document.getElementById('trNoColon').hidden=false;
        //document.getElementById('trN').hidden=true;
        document.getElementById('trM').hidden=true;
        document.getElementById('try1').hidden=true;
        document.getElementById('trSumyi').hidden=true;
        //document.getElementById('trn').hidden=true;
        //document.getElementById('fSize').hidden=true;
    }else{
        document.getElementById('trNoColon').hidden=true;
        //document.getElementById('trN').hidden=false;
        document.getElementById('trM').hidden=false;
        document.getElementById('try1').hidden=false;
        document.getElementById('trSumyi').hidden=false;
        //document.getElementById('trn').hidden=false;
        //document.getElementById('fSize').hidden=false;
        }
        gNoColon();
    txt='<ol>';
    //Расчётная нагрузка на один растянутый болт
    if(document.getElementById('pCheck').checked==false){
        p=(-N/n)+((M*y1/1000)/sumyi);
        txt+='<li>Значение расчётной нагрузки, приходящейся на один болт:<br>';
        txt+='<b>P</b> = - ( N / n ) + ( M &middot; y<sub>1</sub> / &sum;y<sub>i</sub><sup>2</sup> ) = - ( '+N+' / '+n+' ) + ( '+M+' &middot; '+
        y1/1000+' / '+sumyi+' ) = <b>'+p.toFixed(3)+'</b> т</li>';
    }else{
        txt+='<li>Значение расчётной нагрузки, приходящейся на один болт:<br>';
        txt+='<b>P</b> = <b>'+p+'</b> т</li>';
    }
    //Rba
    txt+='<li>Расчётное сопротивление стали '+steel+' растяжению для болта М'+diamA+'<br> <b>R<sub>ba</sub></b> = ';
    for(var i=0;i<anchorArray.length;i+=3){
        if(anchorArray[i]==diamA&&steel=='Ст3пс4, Ст3пс2, Ст3сп4, Ст3сп2'){var Rba=anchorArray[i+1]}
        else if(anchorArray[i]==diamA&&steel=='09Г2С-4, 09Г2С-6'){var Rba=anchorArray[i+2]}
    }
    txt+=Rba+' МПа = <b>';
    var RbaKGS=Rba/toKGS;
    txt+=RbaKGS.toFixed(3)+'</b> т/см<sup>2</sup></li>';
    //Статика площадь болта
    txt+='<li>Площадь поперечного сечения болта (по резьбе) по условию прочности:<br>';
    for(var i=0; i<anchorArray3.length;i+=2){
        if(diamA==anchorArray3[i]){var An=anchorArray3[i+1]}
    }
    if(p>0){
        //k0
        switch(k0){
            case 1.05: txt+='Коэффициент <b>k<sub>0</sub></b> = <b>1.05</b> - для статических нагрузок<br>';
                break;
            case 1.18: txt+='Коэффициент <b>k<sub>0</sub></b> = <b>1.18</b> - для высотных сооружений (дымовых труб, вытяжных башен и др), для которых '+
                'расчётной нагрузкой является ветровая<br>';
                break;
            case 1.35: txt+='Коэффициент <b>k<sub>0</sub></b> = <b>1.35</b> - для динамических нагрузок, а так же для съёмных болтов с анкерными '+
                'плитами, устанавливаемых сободно в трубе<br>';
                break;
        }
        //Площадь болта
        txt+='Площадь поперечного сечения болта М'+diamA+' <b>'+An+'</b> см<sup>2</sup> по таблице <a href="tabA1.htm" target="_blank">А.1</a><br>'
        var Asa=(k0*p)/RbaKGS;
        txt+='<b>A<sub>sa</sub></b> = ( k<sub>0</sub> &middot P ) / R<sub>ba</sub> = ( '+k0+' &middot; '+p.toFixed(3)+' ) / '+
            RbaKGS.toFixed(3)+' = <b>'+Asa.toFixed(2)+'</b> см<sup>2</sup><br>';
        txt+='<b>A &ge; A<sub>sa</sub></b> &rarr; <b>'+An+' &ge; '+Asa.toFixed(2)+'</b> &rarr; '
        if(An>Asa){txt+='<span class="titleGOOD">Условие выполняеться</span></li>'}
        else{txt+='<span class="titleBAD">Условие не выполняеться</span></li>'}
    }else{txt+='<b>Нагрузка на болт отрицательная, следовательно болты ставяться конструктивно</b></li>'}
//Проверка на динамику
    if(document.getElementById('alphaCheck').checked==true){
        document.getElementById('alphaCheckTD').hidden=false;
        //Динамика площадь болта
        txt+='<li>Проверка площади сечения болтов при динамических нагрузка на выносливость:<br>';
        if(p>0){
            //Коэффициент нагрузки chi
            txt+='&nbsp;Коэффициент нагрузки для болта ';
            switch(typeA){
                case 'с отгибом': txt+='с отгибом <b>&chi;</b> = <b>0.4</b>';var chi=0.4;
                    break;
                case 'с анк.плитой глухой': txt+='глухого с анкерной плитой  <b>&chi;</b> = <b>0.4</b>';var chi=0.4;
                    break;
                case 'с анк.плитой съёмный': txt+='съёмного с анкерной плитой <b>&chi;</b> = <b>0.25</b> ';var chi=0.25;
                    break;
                case 'прямой': txt+='прямого <b>&chi;</b> = <b>0.6</b>';var chi=0.6;
                    break;
                case 'конический (распорный)': txt+='конического (распорного) <b>&chi;</b> = <b>0.55</b> ';var chi=0.55;
                    break;
            }
            txt+=' по таблице <a href="tabG71.htm" target="_blank">Г7.1</a><br>'
            //Коэффициент мю
            if(diamA<16){var mu=0.9}
            else if(diamA<20){var mu=1}
            else if(diamA<30){var mu=1.1}
            else if(diamA<42){var mu=1.3}
            else if(diamA<56){var mu=1.6}
            else if(diamA<80){var mu=1.8}
            else if(diamA<140){var mu=2.2}
            else{var mu=2.5};
            txt+='&nbsp;Коэффициент <b>&mu;</b> = <b>'+mu+'</b> для диаметра болта М'+diamA+' по таблице <a href="tabG72.htm" target="_blank">Г7.2</a><br>';
            //Коэффициент альфа
            txt+='&nbsp;Коэффициент <b>&alpha;</b> = <b>'+alpha+'</b> для числа циклов нагружения'
            switch(alpha){
                case 3.25: txt+=' 0.05 &middot; 10<sup>6</sup><br>';
                    break;
                case 2.25: txt+=' 0.2 &middot; 10<sup>6</sup>';
                    break;
                case 1.57: txt+=' 0.8 &middot; 10<sup>6</sup>';
                    break;
                case 1.25: txt+=' 2 &middot; 10<sup>6</sup>';
                    break;
                case 1: txt+=' 5 &middot; 10<sup>6</sup> и более';
                    break;
            }
            txt+=' по таблице <a href="tabG73.htm" target="_blank">Г7.3</a><br>'
            var Asa2=((1.8*chi*mu*p)/(alpha*RbaKGS));
            txt+='<b>A<sub>sa</sub></b> = ( ( 1.8 &middot; &chi; &middot &mu; ) / &alpha; ) &middot; ( P / R<sub>ba</sub> ) = ( ( 1.8 &middot; '+chi+
                ' &middot '+mu+' ) / '+alpha+' ) &middot; ( '+p.toFixed(3)+' / '+RbaKGS.toFixed(3)+' ) = <b>'+Asa2.toFixed(2)+'</b> см<sup>2</sup></li>';
            txt+='<b>A &ge; A<sub>sa</sub></b> &rarr; <b>'+An+' &ge; '+Asa2.toFixed(2)+'</b> &rarr; '
            if(An>Asa2){txt+='<span class="titleGOOD">Условие выполняеться</span></li>'}
            else{txt+='<span class="titleBAD">Условие не выполняеться</span></li>'}
        }else{txt+='<b>Нагрузка на болт отрицательная, следовательно болты ставяться конструктивно</b></li>'}
    }else{
        txt+='<li>Проверка площади сечения болтов при динамических нагрузка на выносливость <b>не производиться</b>'
        document.getElementById('alphaCheckTD').hidden=true}//Проверка на динамику
//Предварительная затяжка f
    txt+='<li>Величина предварительной затяжки болта:<br>';
    if(alphaCheck.checked==false){
        var F=0.75*p;
        txt+='для статических нагрузок <b>F</b> = 0.75 &middot; P = 0.75 &middot; '+p.toFixed(3)+' = <b>'+F.toFixed(3)+'</b> т</li>';
    }else{
        var F=1.1*p;
        txt+='для динамических нагрузок <b>F</b> = 1.1 &middot; P = 1.1 &middot; '+p.toFixed(3)+' = <b>'+F.toFixed(3)+'</b> т</li>';}
//Величина предварительной затяжки f1
    switch(typeA){
        case 'с отгибом': var kd=1.9; var ks=1.3;
            break;
        case 'с анк.плитой глухой': var kd=1.9; var ks=1.3;
            break;
        case 'с анк.плитой съёмный': var kd=1.5; var ks=1.5;
            break;
        case 'прямой': var kd=2.5; var ks=2;
            break;
        case 'конический (распорный)': var kd=2.3; var ks=1.8;
            break;
        }
    txt+='<li>Величина предварительной затяжки болтов на восприятие горизонтальных сдвигающих усилий:<br>';
    txt+='коэффициент трения <b>f</b> = <b>0.25</b><br>';
    if(alphaCheck.checked==false){
        txt+='&nbsp;Коэффициент <b>k</b> = <b>'+ks+'</b> для статических нагрузок<br>'
        var F1=ks*((Qx-N*0.25))/(n*0.25);
        txt+='<b>F<sub>1</sub></b> = k &middot; ( Q + N &middot; f ) / ( n &middot; f ) = '+ks+' &middot; ( '+Qx+' + '+N+' &middot; 0.25 ) / ( '+
            n+' &middot; 0.25 ) = <b>'+F1.toFixed(3)+'</b> т</li>';
    }else{
        txt+='&nbsp;Коэффициент <b>k</b> = <b>'+kd+'</b> для динамических нагрузок<br>'
        var F1=kd*((Qx-N*0.25))/(n*0.25);
        txt+='<b>F<sub>1</sub></b> = k &middot; ( Q + N &middot; f ) / ( n &middot; f ) = '+kd+' &middot; ( '+Qx+' + '+N+' &middot; 0.25 ) / ( '+
            n+' &middot; 0.25 ) = <b>'+F1.toFixed(3)+'</b> т</li>';
    }

//Усилие затяжки при совместном действии верт и гор сил
    txt+='<li>Усилие затяжки при совместном действии вертикальных и горизонтальных (сдвигающих) сил:<br>';
    if(alphaCheck.checked==false){
        var F0=F+F1/ks;
        txt+='<b>F<sub>0</sub></b> = F + F<sub>1</sub> &middot; k = '+F.toFixed(3)+' + ';
        if(F1<0){txt+='( '+F1.toFixed(3)+' )'}else{txt+=F.toFixed(3)};
        txt+=' &middot; '+ks+' = <b>'+F0.toFixed(3)+'</b> т';
    }else{
        var F0=F+F1/kd;
        txt+='<b>F<sub>0</sub></b> = F + F<sub>1</sub> &middot; k = '+F.toFixed(3)+' + ';
        if(F1<0){txt+='( '+F1.toFixed(3)+' )'}else{txt+=F.toFixed(3)};
        txt+=' &middot; '+kd+' = <b>'+F0.toFixed(3)+'</b> т';
    }
    if(F0>0){txt+='</li>'}else{txt+='<br><b>Болты следует заятгивать на допускаемый максимальный крутящий <a href="tab14.htm" target="_blank">момент</a></b></li>'}
//минимальная глубина заделки
    txt+='<li>Минимальная глубину заделки болтов в бетон:<br>';
    if(classB=='B12.5'&&steel=='Ст3пс4, Ст3пс2, Ст3сп4, Ст3сп2'){
        txt+='для бетона фундамента В12.5 и марки стали болта Ст3пс4, Ст3пс2, Ст3сп4, Ст3сп2 принимаеться по таблице <a href="tabG71.htm">Г.1</a><br>';
        txt+='для болта М'+diamA
        switch(typeA){
            case 'с отгибом': txt+=' с отгибом <b>H</b> = 25 &middot; d = <b>'+(25*diamA)+'</b> мм <br>';
                break;
            case 'с анк.плитой глухой': txt+=' глухого с анкерной плитой  <b>H</b> = 15 &middot; d = <b>'+(15*diamA)+'</b> мм <br>';
                break;
            case 'с анк.плитой съёмный': txt+='съёмного с анкерной плитой <b>H</b> = 30 &middot; d = <b>'+(30*diamA)+'</b> мм <br>';
                break;
            case 'прямой': txt+='прямого <b>H</b> = 10 &middot; d = <b>'+(10*diamA)+'</b> мм <br>';
                break;
            case 'конический (распорный)':
                if(diamA<=16){txt+='конического (распорного) <b>H</b> = 8 &middot; d = <b>'+(8*diamA)+'</b> мм <br>'}
                else{txt+='конического (распорного) <b>H</b> = 10 &middot; d = <b>'+(10*diamA)+'</b> мм <br>'}
                break;
        }
    }else{
    //если болты больше 24 мм и устанавливается в готовые скважины
    if(diamA>=24&&(typeA=='конический (распорный)'||typeA=='прямой')){
        txt+='Для болтов диаметром 24 и более, устанавлеваемых в скважины готовых фундаментов, коэффициен <b>m1</b> = <b>1</b><br>';
        var m1=1;
    }else{
        txt+='Расчётное сопротивление бетона растяжению:<br>';
        var Rbt125=0.66;
        txt+='<b>R<sup>12.5</sup><sub>bt</sub></b> = <b>'+Rbt125+'</b> МПа<br>';
        switch(classB){
            case 'B10': var Rbt=0.56;break;
            case 'B12.5': var Rbt=0.66;break;
            case 'B15': var Rbt=0.75;break;
            case 'B20': var Rbt=0.9;break;
            case 'B25': var Rbt=1.05;break;
            case 'B30': var Rbt=1.15;break;
        }
        txt+='<b>R<sup>'+classB+'</sup><sub>bt</sub></b> = <b>'+Rbt+'</b> МПа<br>';
        var m1=Rbt125/Rbt;
        txt+='<b>m<sub>1</sub></b> = R<sup>12.5</sup><sub>bt</sub> / R<sup>'+classB+'</sup><sub>bt</sub> = '+Rbt125+' / '+Rbt+' = <b>'+m1.toFixed(2)+'</b><br>'
    }
    txt+='Расчётное сопротивление стали растяжению:<br>';
    var RbaA=185;
    txt+='<b>R<sup>ВСт3кп2</sup><sub>ba</sub></b> = <b>'+RbaA+'</b> МПа<br>';
    if(steel!='Ст3пс4, Ст3пс2, Ст3сп4, Ст3сп2'){
        txt+='<b>R<sup>09Г2С</sup><sub>ba</sub></b> = <b>'+Rba+'</b> МПа<br>';
        var m2=Rba/RbaA;
        txt+='<b>m<sub>2</sub></b> = R<sup>09Г2С</sup><sub>ba</sub> / R<sup>ВСт3кп2</sup><sub>ba</sub> = '+Rba+' / '+RbaA+' = <b>'+m2.toFixed(2)+'</b><br>'
    }else{
        txt+='<b>R<sup>Ст3пс4</sup><sub>ba</sub></b> = <b>'+Rba+'</b> МПа<br>';
        var m2=Rba/RbaA;
        txt+='<b>m<sub>2</sub></b> = R<sup>Ст3пс4</sup><sub>ba</sub> / R<sup>ВСт3кп2</sup><sub>ba</sub> = '+Rba+' / '+RbaA+' = <b>'+m2.toFixed(2)+'</b><br>'
    }
    txt+='<b>H<sub>0</sub></b> = H &middot; m<sub>1</sub> &middot; m<sub>2</sub> = '
    switch(typeA){
        case 'с отгибом': txt+=' 25 &middot; '+diamA; var H0=25*diamA*m1*m2;
            break;
        case 'с анк.плитой глухой': txt+=' 15 &middot; '+diamA; var H0=15*diamA*m1*m2;
            break;
        case 'с анк.плитой съёмный':txt+=' 30 &middot; '+diamA; var H0=30*diamA*m1*m2;
            break;
        case 'прямой': txt+=' 10 &middot; '+diamA; var H0=10*diamA*m1*m2;
            break;
        case 'конический (распорный)':
            if(diamA<=16){txt+=' 8 &middot; '+diamA; var H0=8*diamA*m1*m2;}
            else{txt+=' 10 &middot; '+diamA; var H0=10*diamA*m1*m2;}
            break;
        }
    txt+=' &middot; '+m1.toFixed(2)+' &middot; '+m2.toFixed(2)+' = <b>'+H0.toFixed(2)+'</b> мм<br>';
    }
    //вывод
    txt+='</ol>';
    if(pCheck.checked==false&&(isNaN(N)||isNaN(M)||isNaN(Qx)||isNaN(n)||isNaN(y1)||isNaN(sumyi))){}
    else if(pCheck.checked==true&&(isNaN(N)||isNaN(Qx)||isNaN(p)||isNaN(n)||isNaN(y1)||isNaN(sumyi))){}
    else{
    document.getElementById('calcRes').innerHTML=txt;}
        if((An>=Asa&&document.getElementById('alphaCheck').checked==false)||(An>=Asa&&document.getElementById('alphaCheck').checked==true&&An>=Asa2))
        {txt='<div class="title05">Минимальные расстояния</div><br><canvas id="pict04" width="460px" height="300px">Рисунок</canvas> ';
        document.getElementById('calcRes').innerHTML+=txt;
        switch(typeA){
        case 'с отгибом': var x1=6*diamA; var x2=4*diamA;
            break;
        case 'с анк.плитой глухой': var x1=8*diamA; var x2=6*diamA;
            break;
        case 'с анк.плитой съёмный': var x1=10*diamA; var x2=6*diamA;
            break;
        case 'прямой': var x1=5*diamA; var x2=5*diamA;
            break;
        case 'конический (распорный)': var x1=8*diamA; var x2=8*diamA;
            break;
        }
        gNoColon2(x1,x2,H0);
    }
}