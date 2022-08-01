var load = document.getElementById("loading");
function loadfun(){
	load.style.display = 'none'
}

let domReady = (cb) => {
	document.readyState === 'interactive' || document.readyState === 'complete'
	? cb()
	: document.addEventListener("DOMContentLoaded", cb);
};

domReady(() => {
	document.body.style.visibility = 'visible';
});