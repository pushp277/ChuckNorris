
var category=document.getElementById("category");
	
	
fetch("https://api.chucknorris.io/jokes/categories")
.then((res)=> res.json())
.then(function(data){
	let arr=data;
	for(var i=0;i<arr.length;i++){
	var element=document.createElement("span");
	var text=document.createTextNode(arr[i]);
	
	var att=document.createAttribute("onclick");
	var str="joke('"+arr[i]+"')";
	att.value=str;
	element.setAttributeNode(att);
	element.appendChild(text);
	category.appendChild(element);
	
	}
}

)
.catch((error)=> "error");
	
function joke(str){
	var i=document.getElementById("sel");
	i.innerHTML="Selected Category: "+str;
	var string="https://api.chucknorris.io/jokes/random?category="+str;
	fetch(string).then((res)=> res.json())
	.then(function(data){
		var idval=document.getElementById("jk");
		idval.innerHTML=data.value;
		var id=document.getElementById("newJoke");
		var newatt=document.createAttribute("onclick");
		var st="joke('"+str+"')";
		newatt.value=st;
		id.setAttributeNode(newatt);
	})
	.catch((error) => "error");
}

	

