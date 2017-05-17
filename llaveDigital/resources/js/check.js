/*----------------------------------------------------------------------*/
/*--------------------------determina el window size--------------------*/
/*----------------------------------------------------------------------*/
var w = window.innerWidth;
var h = window.innerHeight;

/*windowSize(){
    document.body.style.width= w +'px';
    document.body.style.height= h +'px';
}
window.addEventListener('resize', function() {
    windowSize();
});*/

/*----------------------------------------------------------------------*/
        /*----------------------navigator not suported--------------------------*/
/*----------------------------------------------------------------------*/
function navigatorNotSupported(){
    document.getElementById('mainContent').setAttribute('style','display:none;');
    document.getElementById('sorryMsg').setAttribute('style','display:block;');
}

var isChrome = !!window.chrome && !!window.chrome.webstore;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isEdge = !isIE && !!window.StyleMedia;
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

if( isIE){
    alert("Puedes probar con 'Google Chrome', 'Microsoft Edge' u 'Opera' para mejorar la experiencia de navegación.");
}else if(isSafari){
    navigatorNotSupported();
}