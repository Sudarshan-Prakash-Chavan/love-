const welcome = document.getElementById("welcome");
const proposal = document.getElementById("proposal");

document.getElementById("nextBtn").onclick = function(){

welcome.classList.add("hidden");
proposal.classList.remove("hidden");

}

const noBtn = document.getElementById("noBtn");

function moveButton(){

const maxX = window.innerWidth-150;
const maxY = window.innerHeight-70;

noBtn.style.position="fixed";
noBtn.style.left=Math.random()*maxX+"px";
noBtn.style.top=Math.random()*maxY+"px";

}

noBtn.addEventListener("mouseenter",moveButton);
noBtn.addEventListener("click",moveButton);
noBtn.addEventListener("touchstart",function(e){

e.preventDefault();
moveButton();

});

document.getElementById("yesBtn").onclick=function(){

document.getElementById("cameraInput").click();

}

document.getElementById("cameraInput").addEventListener("change",function(){

if(this.files.length>0){

proposal.innerHTML=`

<h1>❤️</h1>

<h2>She Said YES! 💍</h2>

<p>

Thank you for saying YES ❤️

I promise to love you,

respect you,

support your dreams,

and stand beside you forever.

Now send this beautiful selfie to me on WhatsApp 😊

</p>

`;

}

});
