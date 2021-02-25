//WORKING WITH ARRAY METHODS

// var main=document.getElementByClassName("main");
// var p1= document.createElement("p");
// main.appendChild(p1);


var arr= [34, 24.5, 10, 2, 3.1, 6,12];
document.getElementById("p1").innerHTML= "Here are our numbers: " +arr+ " WE'RE GONNA USE VARIOUS ARRAY METHODS TO WORK ON THEM";

//sorting the array
//...DESCENDING ORDER

function dese(){
    var desn= arr.sort(function(a,b){
    return b-a;
})
    
    document.getElementById("p4").innerHTML= "IN DESCENDING ORDER: "+desn;
}
//var desend= arr.sort(des);
document.getElementById("des").addEventListener("click",dese);

//...ASCENDING ORDER
function as(){
   var ase= arr.sort(function (a,b){
    return a-b;
})
document.getElementById("p3").innerHTML= "IN ASCENDING ORDER: "+ase+" and largest number is "+ase[0];

}
 //arr.sort(as);
document.getElementById("asend").addEventListener("click",as)


//displaying, only array elements that are more than 10; filtering




function great(){
    var isGrt= arr.filter(function (num){
        return num>=10;
    });
    document.getElementById("p2").innerHTML= "NUMBERS GREATER THAN 10 IN THE ARRAY: "+isGrt;

}
document.getElementById("is").addEventListener("click",great)
