function calcNoSolid(){

    var Asa=0;
    toKGS=98.100127530165789215525980183774;
    toKGS2=101.93679941176470588235294117647;
    var txt;
    var k0=parseFloat(document.getElementById('k0').value);
    var diamA=parseInt(document.getElementById('diamA').value);
    var steel=document.getElementById('steel').value;
    var typeA=document.getElementById('typeA').value;
    var n=parseInt(document.getElementById('n').value);
    var b=parseInt(document.getElementById('b').value);
    var h=parseInt(document.getElementById('h').value);
    var N=parseFloat(document.getElementById('N').value);
    var Nmin=parseFloat(document.getElementById('Nmin').value);
    var M=parseFloat(document.getElementById('M').value);
    var Qx=parseFloat(document.getElementById('Qx').value);
    var Qy=parseFloat(document.getElementById('Qy').value);
    var alpha=parseFloat(document.getElementById('alpha').value);
    var classB=document.getElementById('classB').value;
        gNoSolid();
    txt='<ol>';
    //Расчётная нагрузка на один растянутый болт
    var p=(M-N*b/1000)/(n/1000*h);
    txt+='<li>Значение расчётной нагрузки, приходящейся на один болт:<br>';
    txt+='<b>P</b> = ( M - N &middot; b ) / n &middot; h = ( '+M+' - '
    if(N<0){txt+='( '+N+' )'}else{txt+=N}
    txt+=' &middot; '+(b/1000).toFixed(3)+' ) / '+n+' &middot; '+
        (h/1000).toFixed(3)+' = <b>'+p.toFixed(3)+'</b> т</li>';
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
        txt+='Площадь поперечного сечения болта М'+diamA+' <b>'+An+'</b> см<sup>2</sup> по таблице <a href="tabA1.htm" target="_blank">А.1</a><br>'
        var Asa=(k0*p)/RbaKGS;
        txt+='<b>A<sub>sa</sub></b> = ( k<sub>0</sub> &middot P ) / R<sub>ba</sub> = ( '+k0+' &middot; '+p.toFixed(3)+' ) / '+
        RbaKGS.toFixed(3)+' = <b>'+Asa.toFixed(2)+'</b> см<sup>2</sup><br>';
        txt+='<b>A &ge; A<sub>sa</sub></b> &rarr; <b>'+An+' &ge; '+Asa.toFixed(2)+'</b> &rarr; '
        if(An>Asa){txt+='<span class="titleGOOD">Условие выполняеться</span><br>'}
        else{txt+='<span class="titleBAD">Условие не выполняеться</span><br>'}
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
            if(An>Asa2){txt+='<span class="titleGOOD">Условие выполняеться</span><br>'}
            else{txt+='<span class="titleBAD">Условие не выполняеться</span><br>'}
        }else{txt+='<b>Нагрузка на болт отрицательная, следовательно болты ставяться конструктивно</b></li>'}
    }else{
        txt+='<li>Проверка площади сечения болтов при динамических нагрузка на выносливость <b>не производиться</b>'
        document.getElementById('alphaCheckTD').hidden=true}//Проверка на динамику
//Предварительная затяжка f
    txt+='<li>Величина предварительной затяжки болта:<br>';
    if(p>0){
        if(alphaCheck.checked==false){
            txt+='для статических нагрузок <b>F</b> = 0.75 &middot; P = 0.75 &middot; '+p.toFixed(3)+' = <b>'+(0.75*p).toFixed(3)+'</b> т<br>';
        }else{
            txt+='для динамических нагрузок <b>F</b> = 1.1 &middot; P = 1.1 &middot; '+p.toFixed(3)+' = <b>'+(1.1*p).toFixed(3)+'</b> т<br>';}
    }else{
        txt+='<b>Конструктивные болты следует заятгивать на допускаемый максимальный крутящий <a href="tab14.htm" target="_blank">момент</a></b></li>'
    }
//Проверка на сдвигающую силу в плоскости момента
    if((M+N*(h/1000-b/1000))>0){
        txt+='<li>Проверка возможности восприятия сдвигающей силы в плоскости действия момента<br>';
        txt+='коэффициент трения <b>f</b> = <b>0.25</b><br>';
        var Qmax2=0.25*(M+N*(h/1000-b/1000))/(h/1000);
        txt+='<b>Q<sub>x</sub></b> &le; <b>f &middot; ( M + N &middot; ( h - b ) ) / h</b><br>';
        txt+=Qx+' &le; 0.25 &middot; ( '+M+' + '
        if(N<0){txt+='( '+N+' )'}else{txt+=N};
        txt+=' &middot; ( '+h/1000+' - '+b/1000+' ) ) / '+h/1000+'<br>';
        txt+='<b>'+Qx+'</b> &le; <b>'+Qmax2.toFixed(2)+'</b> &rarr; ';
        if(Qx<=Qmax2){txt+='<span class="titleGOOD">Условие выполняеться</span><br>'}
        else{txt+='<span class="titleBAD">Условие не выполняеться</span><br>'}
    }else{
        txt+='<b>Не производится, так как отсутствует прижимающие усилие. Для восприятия горизонтальной сдвигающей силы необходимо ставить упоры.</b></li>';
    }
//Проверка на сдвигающую силу перпендикулярно к плоскости момента
    txt+='<li>Проверка возможности восприятия сдвигающей силы перпендикулярно плоскости действия момента:<br>';
    if(Nmin>0){
        var Qmax1=0.25*(n*An*RbaKGS/4+Nmin);
        txt+='<b>Q<sub>y</sub></b> &le; <b>f &middot; ( n &middot; A<sub>sa</sub> &middot; R<sub>ba</sub> / 4 + N<sub>min</sub> )</b><br>';
        txt+=Qy+' &le; 0.25 &middot; ( '+n+' &middot; '+An+' &middot; '+RbaKGS.toFixed(3)+' / 4 + '+Nmin+' )<br>';
        txt+='<b>'+Qy+'</b> &le; <b>'+Qmax1.toFixed(2)+'</b> &rarr; ';
        if(Qy<=Qmax1){txt+='<span class="titleGOOD">Условие выполняеться</span><br>'}
        else{txt+='<span class="titleBAD">Условие не выполняеться</span><br>'}
    }else{
        txt+='<b>Не производится, так как отсутствует прижимающие усилие. Для восприятия горизонтальной сдвигающей силы необходимо ставить упоры.</b></li>';
    }
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
    if(isNaN(N)||isNaN(Nmin)||isNaN(M)||isNaN(Qx)||isNaN(Qy)||isNaN(b)||isNaN(h)||isNaN(n)){}
    else{
        document.getElementById('calcRes').innerHTML=txt;
        if(An<Asa||
            document.getElementById('alphaCheck').checked==true&&An<Asa2||
            Qx>Qmax2||
            Qy>Qmax1&&Nmin>0
          ){}
        /*if((An>=Asa&&Qx<=Qmax2&&Qy<=Qmax1&&document.getElementById('alphaCheck').checked==false)||
           (An>=Asa&&Qx<=Qmax2&&Qy<=Qmax1&&document.getElementById('alphaCheck').checked==true&&An>=Asa2)||
           (p<0&&Qx<=Qmax2&&Qy<=Qmax1)
           )*/
        else{txt='<div class="title05">Минимальные расстояния</div><br><canvas id="pict03" width="460px" height="300px">Рисунок</canvas> ';
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
            gNoSolid2(x1,x2,H0);
        }
    }
}