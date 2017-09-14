var time,_hh,_mm,_ss;
/*CLock running */
function stopwatch(hh,mm,ss) {
    if(isNaN(hh))hh=0;
    if(isNaN(mm))mm=0;
    if(isNaN(ss))ss=0;
    ss++;
    if(ss==60){
        mm+=1;
        ss=0;
    }
    if(mm==60){
        hh+=1;
        mm=0;
    }
    setHTML(hh,mm,ss);
    time=setTimeout(stopwatch,1000,hh,mm,ss);
}
/* Formatting the time */
function setHTML(hh,mm,ss){
    document.getElementById("hr").innerHTML=hh<10 ? "0"+hh:hh;
    document.getElementById("ms").innerHTML = mm<10 ? "0"+mm:mm;
    document.getElementById("sc").innerHTML=ss<10 ? "0"+ss:ss;
}
/* start button function */
function start() {
    if(!time) {
        stopwatch(_hh, _mm, _ss);
    }
}
/* stop button function */
function stop(hh, mm, ss) {
    clearTimeout(time);
    _hh = !(typeof(hh)==="undefined") ? hh : parseInt(document.getElementById("hr").innerHTML);
    _mm = !(typeof(mm)==="undefined") ? mm : parseInt(document.getElementById("ms").innerHTML);
    _ss = !(typeof(ss)==="undefined") ? ss : parseInt(document.getElementById("sc").innerHTML);
    time = null;
}
/* Lap button function */
function lap(){
    var li = document.createElement("li");
    li.innerText = "lap : "+document.getElementById("hr").innerHTML+" : "+document.getElementById("ms").innerHTML+" : "+document.getElementById("sc").innerHTML;
    document.getElementById("laps").appendChild(li);

}
/* Lap clear button function */
function lapClear() {
    var list = document.getElementById("laps");
    while(list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}
/* Reset button function */
function reset() {
    stop(0,0,0);
    setHTML(0,0,0);
}



