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
    window.location.replace("srryMsg.html");
}

var isChrome = !!window.chrome && !!window.chrome.webstore;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isEdge = !isIE && !!window.StyleMedia;
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if(isSafari||isEdge||isFirefox||isIE){
    navigatorNotSupported();
}