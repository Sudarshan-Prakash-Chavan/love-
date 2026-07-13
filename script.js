const nextBtn=document.getElementById("nextBtn");
const proposal=document.getElementById("proposal");
const container=document.querySelector(".container");
const noBtn=document.getElementById("noBtn");

nextBtn.onclick=function(){

container.style.display="none";
proposal.classList.remove("hidden");

}

function yesClicked(){

proposal.innerHTML=`
<h1>❤️</h1>

<h2>Thank You ❤️</h2>

<p>
You just made me the happiest person.

I promise to love,
respect,
care for,
and stand beside you forever.

I can't wait to build a beautiful future with you.

❤️
</p>

`;

}

noBtn.addEventListener("mouseover",function(){

let x=Math.random()*250;
let y=Math.random()*300;

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});