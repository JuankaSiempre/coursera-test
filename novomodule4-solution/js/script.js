var nombre = new Array();
nombre[0] = "John", 
nombre[1] = "Joseph",
nombre[2] = "Pam",
nombre[3] = "Jefrey",
nombre[4] = "Patrick",
nombre[5] = "Fred"

for(var i = 0; i < nombre.length  ; i++){
if(nombre[i].startsWith("j") || nombre[i].startsWith("J") ){
console.log("Goodbye : " + nombre[i]);

}else{
console.log("Hello : " + nombre[i]);

}



}
