

function removeContent() {
  var elem0 = document.getElementById('benefit');
  var elem1 = document.getElementById('description');
  elem0.parentNode.removeChild(elem0);
  elem1.parentNode.removeChild(elem1);
  return false;
}

function appendSections(){
    var b = document.createElement('section');
    b.id='benefit';
    var d = document.createElement('section');
    d.id='description';
    document.getElementById('leftColumn').appendChild(b);
    document.getElementById('rightColumn').appendChild(d);
}

function removeClass(){
document.getElementById('mainContent').classList.remove('estela','pleno_','eAtack','libroM','rCtoon','bEnRed','lEnRed','teachN','libroC','digiBo','inever','libWeb','back');
}
function removeActive(){
document.getElementById('mainContent').classList.remove('active','estela','pleno_','eAtack','libroM','rCtoon','bEnRed','lEnRed','teachN','libroC','digiBo','inever','libWeb','back');
}
function content(cont){
    var link = document.getElementById(cont);
    var content = link.import;
    var benef = content.querySelector('#benefit');
    var descr = content.querySelector('#description');
    var beneficios = document.getElementById('leftColumn');
    var descripcio = document.getElementById('rightColumn');
    beneficios.appendChild(benef.cloneNode(true));
    descripcio.appendChild(descr.cloneNode(true));
}
function back(){
    removeContent();
    removeClass();
    appendSections();
}
function activar(cont){
    if(cont != 'back'){
        removeClass();
        removeContent();
        document.getElementById('mainContent').classList.add('active',cont);
        content(cont);
    } else{
        removeContent();
        removeActive();
        appendSections();
    }
}

var menuButton = document.getElementsByClassName('menu');

for(var i=0; i<=menuButton.length-1; i++){
    menuButton[i].addEventListener("click", function(){
        var cont = this.getAttribute('value')
        activar(cont);
    });
}