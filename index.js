require('script!localforage');
console.log(window.localforage);
window.localforage.ready(function(){
	console.log(window.localforage.driver());
});
