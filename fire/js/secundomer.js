function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
var init=0;
var startDate;
var clocktimer;

function clearFields() {
 init = 0;
 clearTimeout(clocktimer);
 //document.clockform.clocks.value='00:00:00.00';
 ///document.clockform.label.value='00:00:00.00';
}

function clearALL() {
 clearFields();
 document.getElementById('marker_0').innerHTML = '';
 document.getElementById('marker_1').innerHTML = '';
 document.getElementById('marker_2').innerHTML = '';
 document.getElementById('marker_3').innerHTML = '';
 document.getElementById('marker_4').innerHTML = '';
 document.getElementById('marker_5').innerHTML = '';
 document.getElementById('marker_6').innerHTML = '';
}

function startTIME() { 
 var thisDate = new Date();
 var t = thisDate.getTime() - startDate.getTime();
 var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
 t = Math.floor (t/1000);
 var s = t%60; t-=s;
 t = Math.floor (t/60);
 var m = t%60; t-=m;
 t = Math.floor (t/60);
 var h = t%60;
 if (h<10) h='0'+h;
 if (m<10) m='0'+m;
 if (s<10) s='0'+s;
 if (ms<10) ms='0'+ms;
 if (init==1) document.clockform.label.value = h + ':' + m + ':' + s + '.' + ms;
 document.clockform.clocks.value = m+s+ms;
 clocktimer = setTimeout("startTIME()",10);
}

function findTIME() {
 if (init==0) {
  startDate = new Date();
  startTIME();
  init=1;
 } 
 else {
  var set_0 = (document.clockform.clocks.value*1.1).toFixed(0);
  var set_1 = (document.clockform.clocks.value*1).toFixed(0);
  var set_2 = (document.clockform.clocks.value*1.1).toFixed(0);
  var set_3 = (document.clockform.clocks.value*1.3).toFixed(0);
  var set_4 = (document.clockform.clocks.value*1.4).toFixed(0);
  var set_5 = (document.clockform.clocks.value*1.5).toFixed(0);
  var set_6 = (document.clockform.clocks.value*1.8).toFixed(0);
  document.getElementById('marker_0').innerHTML = set_0.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_1').innerHTML = set_1.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_2').innerHTML = set_2.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_3').innerHTML = set_3.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_4').innerHTML = set_4.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_5').innerHTML = set_5.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  document.getElementById('marker_6').innerHTML = set_6.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  clearFields();
 }
}