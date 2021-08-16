// var primero = new Object();
// primero.nombre = "Juan Carlos";
// primero.apellido= "Pardo Vergara";
// primero.nacionalidad = new Object();
// primero.nacionalidad = "Chilena";
// console.log(primero.nombre);
// console.log(primero.apellido);
// console.log(primero.nacionalidad);
// console.log(primero['nombre']);
// console.log(primero);

//Creando objetos usando 
//objetos sintaxis 
//literales 

//better way: object literal
// var facebook = {
// name: "Facebook",
// ceo: {
// firstName: "Mark",
// favColor: "blue"
// },
// $stock: 110
// };
// console.log(facebook);
// var twitter = {
// usuario: "Juan Carlos",
// perfil: {
// nick: "JC",
// mail: "juan@gmail.com"
// },
// apellido: "Pardo"
// };
// console.log(twitter.perfil.mail);


// var company = {
// ceo: {
// },
// "stock of company": 110
// };

// console.log(company);


//Function first class data types
//function are objects

// function multiply(x, y){
    
//     return x * y;

// }
// console.log(multiply(3,2));
// multiply.version = "1.1.2";
// console.log(multiply.version);

//function factory multiplicador
// function makeMultiplier(multiplier) {
// var myFunc = function (x) {
// return multiplier * x;
// };
// return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var DoubleAll = makeMultiplier(2);
// console.log(DoubleAll(10));

// //pasando funciones como argumentos
// function doOperation(x, operation){
// return operation(x);


// }
// var multi = doOperation(3, DoubleAll);
// console.log(multi);

// //function factory divide

// function makeDivision (divisor){
// var myfunc1 = function(y){
// return y / divisor;
// };
// return myfunc1;
// }

// var dividir3 = makeDivision(3);
// console.log(dividir3(3));

// //pasando argumentos

// function hacerDivision(y, operationD){
// return operationD(y)
// }
// var resultado = hacerDivision(9, dividir3);
// console.log(resultado);



//function factory suma

// function suma(x) {
// var myfunc = function (y){
// return x + y;
// }; 
// return myfunc;

// }

// var primeraSuma = suma(2);
// console.log(primeraSuma(3));

// //pasando funciones con argumentos
// function segundaSuma(h, z){
// return h + z;


// }

// console.log(segundaSuma(2,5));

//copiar por referencia vs valor
// //pasar por valor
// var a = 7;
// var b = a;
// console.log("Ël valor de a:" + a);
// console.log("El valor de b:" + b);

// b = 5;
// console.log("Despues de la actualizacion de b")
// console.log("Ël valor de a:" + a);
// console.log("El valor de b:" + b);

//pasar por referencia

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("Despues de b.x actualizar");
// console.log(a);
// console.log(b);


//pasar por referencia o por valor

// function changePrimitive(primValue){
// console.log("in changePrimitive...");
// console.log("before:");
// console.log(primValue);

// primValue = 5;
// console.log("Despues");
// console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("After changeprimitive, orig value:");
// console.log(value);


//area circulo 

// function circle(pi, radio){
// return pi * radio *radio;

// }
// console.log(circle(3.14, 2));
//funcion con argumento y sin argumento
// function test(){
// console.log("Hello Coursera");
// }
// test();

// function testi(a) {
// return (a);
// }

// console.log(testi(2));

// function test(){
// console.log(this);
// this.myName = "Yaakov";
// }
// test();
// console.log(window.myName);


// constructores de funcion
// function Circle (radius) {
// this.radius = radius;

// this.getArea = 
// function () {
//     return Math.PI * Math.pow(this.radius, 2);    
// };
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

//perimetro de un circulo

// function perimetroCirculo (radio) {
// this.radio = radio;
// this.getPerimetro = 
// function (){
// return Math.PI * this.radio * 2;


// }

// }

// var miPerimetro = new perimetroCirculo(5);
// console.log(miPerimetro.getPerimetro());


//Constructor triangulo base x altura / 2

// function triangulo (base) {
// this.base = base;
// this.areaTriangulo =
// function () {
// return (base * 10)/2;
// };
// }
// var miTriangulo = new triangulo(4);
// console.log(miTriangulo.areaTriangulo());

//prototipo
//area de cuadrado
// function cuadrado (lado){
// this.lado = lado;
// }
// cuadrado.prototype.getArea =
// function (){
// return Math.pow(this.lado, 2);
// };

// var cuadrado1 = new cuadrado(2);
// var cuadrado2 = new cuadrado(4);
// console.log(cuadrado1.getArea());
// console.log(cuadrado2.getArea());

//prototype de venta con iva
// 

//primer array

// var conjunto = new Array();
// conjunto[0] = 1;
// conjunto[1] = 2;
// conjunto[2] = 3;
// conjunto[3] = 4;
// conjunto[4] = 5;
// conjunto[5] = 6;

// console.log(conjunto[3]);
// console.log(conjunto);

// var names = ["Juan","Cote","Isa", "Helen"];
// console.log(names);
// for( var i =0; i < names.length; i++) {
// console.log(names[i]);

// }

// var myObj = {
// name: "Juan",
// apellido: "Pardo",
// edad: 34
// };

// for (var baca in myObj){
// console.log(baca + ":" +myObj[baca]);


// }

// var names = ["Juan","Cote","Isa", "Helen"];
// for (var vaca in names){
// console.log(vaca +":"+ names[vaca]);


// }

//closures comas

function multiplicar(multiplier){
return (
function(x) {
return multiplier * x;

}

);


}

var multiplier1 = multiplicar(2);
console.log(multiplier1(10));