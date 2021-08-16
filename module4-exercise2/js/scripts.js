// javascript type
// var x;
// console.log(x);

// if(x == undefined){
// console.log("x is undefined");

// }

// x= 5;

// if(x == undefined){
// console.log("x is undefined");
// }else{
// console.log("x tiene un valor de: " + x);

// }

// datos
// var message = "in global";
// console.log("global: message =" + message);

// var a = function () {
// var message = "inside a";
// console.log("a: message = " + message);


// function b (){
//     console.log("b: message = " + message);
//     }


// b();
// }


// a();

// // string concatenation
// var string = "Hello";
// // string += " World";
// string = string + " World";
// console.log(string);

//regular maths operator
// console.log((4+5)/3);
// console.log((undefined/3));
// function test1 (a) {
// console.log(a/5);
// }
// test1();

//igualdad

// var x = 4;
// var y = 4;
// if (x==y) {
// console.log("X es igual a Y");
// }

// x = '4';
// if (x==y) {
// console.log("x es igual a y")    
// }

// //igualdad estricta
// if(x===y) {
// console.log("Strict: x='4' is equal to y=4");

// }else{

// console.log("Strict: x='4' is not equal to y=4");

// }

// if statement all false
// if( false || undefined || NaN || "" || 0 || null){
// console,log("This line wont ever execute");

// } else{

// console.log("All false");

// }


//all true

// if (true && "Hello" && 1 && -1 && "false") {
// console.log("All is true");  
// }

//style best practice
// function a()
// {
//  return
//  {
//  name: "Yaakov"
//  };
// }

// function b() {
// return {
// name: "Yaakov"
// };

// }

// console.log(a());
// console.log(b());

//bucle for

// var sum = 0;
// for (var i = 0; i < 10; i++){
// sum = sum + i;
// // console.log(sum);
// console.log(i);

// }
// console.log(sum);

// function with params
// function pollo(acompanamiento){
// if(acompanamiento === undefined){
// acompanamiento = "caca";    
// }

// console.log("El pollo va con:" + acompanamiento);

// }
// pollo("Papas Fritas");
// pollo();

// argumento sin if pero con booleano
function tallarines(salsa){
salsa = salsa || 'Bolognesa';
console.log("Tallarines con salsa de " + salsa);

}
tallarines("Piña");
tallarines();

