

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
document.getElementById('content').classList.remove('active','estela','pleno_','eAtack','libroM','rCtoon','bEnRed','lEnRed','teachN','libroC','digiBo','inever','libWeb');
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
    removeContent();
    document.getElementById('content').classList.add('active',cont);
    content(cont);
}