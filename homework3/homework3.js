const f1 = function (a, b, c){
return (a===b+c || b===a*c);
};

const f2 = function (){
	return ('Hello');
}




const f3 = function (x, y){


const  z = (x*y)/100



}


const f4 = function (name , name1 , name2){

if(name.length > name1.length && name.length>name2.length){
return name;
}
else if (name1.length > name.length && name1.length>name2.length){
return name1;
}
else if(name2.length > name1.length && name2.length>name.length){
return name2;
}

else{

	return "some names have the same length";
}

}



const f5 = function (a,b){
	if(a===b){
		return 0;
     }
     else if (a>b){
     	return 1;
     }

     else{
     	return -1;
     }
}


const f6 = function (a,b){
	return a*b;
}

const f7 = function (a,b){
	return a/b;
}


const triangleArea = function (base, height){

return f7(f6(base, height),2);


}



const numLenght = function(a){

	const num = a+"";
	return num.length;
}



const f8 = function (a,b,c){
	if(a.length+b.length>c){
		return 1;
	}
else{
	return -1;
}
}


const runStuff = function (a,b,c){
	if(a==="rectangle"){
		return b*c;
	}
	else if(a==="triangle"){
		return triangleArea(b,c);
	}
	else{
		return -1;
	}
}

