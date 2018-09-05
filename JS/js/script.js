	
var dvalue = document.getElementById("myDate2");
var nvalue = document.getElementById("myDate1");
var t = document.getElementById("myDate");
var p = document.getElementById("place");
var w = document.getElementById("week");

function countDown(){
	t.stepDown();
}

function countUp(){
	t.stepUp();
}



function deduct(){
	if ((nvalue.value==='')||(dvalue.value==='')){
		p.value="Дату выбраль бииистра";
		return;
	}
	var d= new Date(dvalue.value);
	var D=d.getTime();
	var n= new Date(nvalue.value);
	var N= n.getTime();
	p.value = (D-N)/1000/60/60/24;
	
}

function deductWeekends(){
	var d= new Date(dvalue.value);
	var D=d.getTime();
	var n= new Date(nvalue.value);
	var N= n.getTime();

	var count=0;
	var k=86400000;
	for (var i=N;i<D;i= i + k){
		var m=new Date(i);
		var q=m.getDay();
		console.log(q);
		if((q!=5)&&(q!=6)){
			count++;
		}
	w.value = count;

	}
}