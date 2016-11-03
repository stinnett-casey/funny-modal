setTimeout(function(){
	var modal = document.getElementsByClassName('modal-wrapper')[0];
	modal.style.display = "block";
}, 3000);

document.getElementById('close').addEventListener('click', closeModal);
document.addEventListener('click', function(event){
	if (event.target === document.getElementsByClassName('modal-wrapper')[0]) {
		closeModal();
	}
});

function closeModal() {
	var modal = document.getElementsByClassName('modal-wrapper')[0];
	modal.style.display = "none";
}

// make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);

