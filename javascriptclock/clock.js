let boolean;

var name =prompt("adınız :")
var span=document.querySelector('#myName')
span.innerHTML=`${name}`;
console.log(name)

/* ******** SAAT ************ */
var clock=document.querySelector('#myClock')
function guncelsaat() {
    var tarih=new Date();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	clock.innerHTML=`Saat şuan ${saat}:${dakika}:${saniye}`
}
setInterval(guncelsaat, 1000); 