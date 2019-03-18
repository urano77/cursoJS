// Pasos 1, 2

let fecha = new Date();
let hora = fecha.getHours();

// prueba de funcionamiento: hora + 6
/*
hora = 6 ;
while (hora < 24){

	function saludar() {
		let horario ;
		if ( hora >= 7 && hora <=12   )
			{horario = "morning" }
		else if ( hora > 12 &&  hora <22   )
			{horario = "afternoon" }
		else  {horario = "night" }
	return  "Good "+horario+" , it's "+hora+" o'clock" ;
	}

	console.log(saludar());
	hora = hora + 6 ;
	}

console.log(fecha);
console.log(hora);
*/


function saludar() {
	let horario ;
	if ( hora >= 7 && hora <=12   )
		{horario = "morning" }
	else if ( hora > 12 &&  hora <22   )
		{horario = "afternoon" }
	else	{horario = "night" }
	return  "\n Good "+horario+" , it's "+hora+" o'clock" ;
}
console.log(saludar());

// Pasos 3 y 4

let valorPI = Math.PI.toFixed(6) ;
console.log("\n El valor de la constante PI es "+valorPI) ;

// Pasos 5 al 7 

/*
21 dec = 15 hex = 25 oct = 10101 bin
22 dec = 16 hex = 26 oct = 10110 bin
*/

console.log("\n") ;
let numero =   0
while (numero < 23)
{
	console.log(numero + ` dec = `+ 
		    numero.toString(16) +  ` hex = ` +
		    numero.toString(8) + ` oct = ` +
		    numero.toString(2) + ` bin  `
 )

;
	numero = numero + 1 ;
}


/*
 Pasos 8 al 9
del 1 al 21 impares no incluidos en 10 al 20 , r: 1, 3, 9, 21
 - determinar numeros impares  em un rango
 - excluir numeros contenidos en el intervalo 10-20
 -generar lista
*/

let num = 0

console.log("\n")

while (num < 22)
{
        function evaluar(){
        if (num % 2 === 0) {return false}
        else if  (num > 10 && num < 20)   {return false}
        else  {return true}
        }

        if (evaluar(num) === true){ 
        console.log (
                    num + ` dec = `+ 
                    num.toString(16) +  ` hex = ` +
                    num.toString(8) + ` oct = ` +
                    num.toString(2) + ` bin  `)         }
        num = num + 1 ;
}

console.log("\n") ;


/*
 Pasos 10 al  ... en proceso
*/

console.log("Hi in Chinese is written as:\u55e8\uff0c\u4f60\u597d\u5417");
console.log("\n") ;
console.log("The program has finished") ;
