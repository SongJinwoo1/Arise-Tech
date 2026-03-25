particlesJS("particles-js",{particles:{number:{value:35},color:{value:"#9d4edd"},opacity:{value:.3},size:{value:2},line_linked:{enable:true,distance:120,color:"#9d4edd",opacity:.2},move:{speed:1}}});
const f=document.getElementById('contact-form'),s=document.getElementById('success-container'),c=document.getElementById('countdown');
f.addEventListener('submit',e=>{e.preventDefault();f.parentElement.style.display='none';s.style.display='block';let n=3;const t=setInterval(()=>{n--;c.innerText=n;if(n<=0){clearInterval(t);location.href="https://chat.whatsapp.com/LX6YlavRiSWDUWSxVvGxD9"}},1000)});
