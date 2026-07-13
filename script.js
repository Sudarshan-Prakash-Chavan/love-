const nextBtn = document.getElementById("nextBtn");
const proposal = document.getElementById("proposal");
const container = document.querySelector(".container");
const noBtn = document.getElementById("noBtn");

nextBtn.onclick = () => {
    container.style.display = "none";
    proposal.classList.remove("hidden");
};

function captureSelfie() {
    document.getElementById("cameraInput").click();
}

document.getElementById("cameraInput").addEventListener("change", function () {

    if(this.files.length > 0){

        proposal.innerHTML = `
        <h1>❤️</h1>

        <h2>Yay!! ❤️</h2>

        <p>
        Thank you for saying YES!

        Your beautiful selfie has been selected.

        I promise to love, respect and cherish you forever.

        ❤️
        </p>
        `;

        alert("Selfie selected successfully ❤️");
    }

});

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton(){

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

}
