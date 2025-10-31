// Modificar el código para mostrar el valor de t = 10
var t = 0;
function test() {
   var t = 10;
   return t;
}
t=test();
console.log(t);

//Modificar el código para no imprimir undefined en el ciclo
let years: Array<number> = [ 2016, 2017, 2018, 2019,2020,2021,2022,2023,2024,2025];
for (let i=0;i<years.length; i++) {
   console.log(years[i]);
}

//Modificar el código para que muestre años mayor al 2020
for (let i in years) {
    if (years[i]>2020){
    console.log(years[i]);
    }
   
}

//Modificar el código para que muestre años menor igual al 2019
years.forEach(function(yrs, i) {
    if (yrs <= 2019){
    console.log(yrs);
    }
   
});

//Modificar el código que envíe el llamado a función enviando
//valores a los parametros
//de la función y que muestre el resultado de tres operaciones
//Agrega las operaciones de resta, multiplicar
function sumar(ai : number, bi: number) : number {
   return ai + bi;
}
function restar(ai : number, bi: number) : number {
    return ai - bi;
    }
function multiplicar(ai : number, bi: number) : number {
    return ai * bi;
}

console.log(sumar(5,2));
console.log(restar(5,2));
console.log(multiplicar(5,2));
//Modificar el código que envíe el llamado a función enviando
//valores a los parametros
//de la función y que muestre el resultado de cinco personas
function getNombre(nombre: string, apellido?: string): string {
   return nombre + apellido;
}

console.log(getNombre("alejandro","barraza"));
console.log(getNombre("maria","Barreras")); 
console.log(getNombre("Jesus","Inzunza"));
console.log(getNombre("Adrian","calleros"));
console.log(getNombre("Ernesto","Ruiz"));
