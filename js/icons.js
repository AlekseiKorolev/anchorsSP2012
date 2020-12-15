//Иконки
var menuResult=1;
function menuOver(event){
    if(event.className!='mm3'){event.className='mm2'}}
function menuOut(event){
    if(event.className!='mm3'){event.className='mm1'}}
function menuClick(event){
    event.className='mm3';
    switch(event.id){
        case 'colon':
            document.getElementById('2colon').className='mm1';
            document.getElementById('nocolon').className='mm1';
            menuResult=0;
        break;
        case '2colon':
            document.getElementById('colon').className='mm1';
            document.getElementById('nocolon').className='mm1';
            menuResult=1;
        break;
        case 'nocolon':
            document.getElementById('2colon').className='mm1';
            document.getElementById('colon').className='mm1';
            menuResult=2;
        break;
    }
    document.getElementById('mainDiv').hidden=false;
    document.getElementById('prevDiv').hidden=true; 
    InputAll();
}