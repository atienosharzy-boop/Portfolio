(function(){
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
var ty=document.getElementById("ty"),roles=["Frontend developer","UI/UX designer","Go developer"],ri=0,ci=roles[0].length,del=true;
function tick(){var w=roles[ri],d=110;
if(!del){ci++;ty.textContent=w.slice(0,ci);if(ci===w.length){del=true;d=1600}}
else{ci--;ty.textContent=w.slice(0,ci);d=50;if(ci===0){del=false;ri=(ri+1)%roles.length;d=300}}
setTimeout(tick,d)}
if(!rm)setTimeout(tick,1800);
var els=document.querySelectorAll("section .head,section .grid,section .steps,section .chips,section .cta");
if(!rm&&"IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(el){el.classList.add("rv");io.observe(el)})}
var p=document.querySelector(".photo");
if(p&&!rm){p.addEventListener("mousemove",function(e){var r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform="perspective(700px) rotateY("+x*14+"deg) rotateX("+(-y*14)+"deg)"});p.addEventListener("mouseleave",function(){p.style.transform=""})}
var secs=[].slice.call(document.querySelectorAll("header[id],section[id]")),ls=[].slice.call(document.querySelectorAll(".links a")),bar=document.getElementById("bar");
function sc(){var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?y/h*100:0)+"%";var cur=secs[0].id;secs.forEach(function(s){if(s.offsetTop<=y+140)cur=s.id});ls.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)})}
window.addEventListener("scroll",sc,{passive:true});sc();
})();
