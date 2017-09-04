// NOMES : Davidson - matricula: 201512995037
// NOMES : Wesley - matricula: 201603398147


//FUNÇÃO01

function Exercicio01 (num1, num2){

console.log("A média é: "+((num1+num2)/2));

}



//FUNÇÃO02

function Exercicio02(nota1, nota2){

        if((nota1>=4&&nota2>=4)&&((nota1+nota2)/2>=6)){
            console.log("Não precisa de AV3!");
        }

        else {
            console.log("Precisa de AV3!");
        }

}



//FUNÇÃO03

function Exercicio03(numero){

var indicewhile=1, indicedowhile=1;

console.log("USANDO WHILE");
    while (indicewhile<=numero){

        console.log(indicewhile);
        indicewhile++;

            
    }
    
    console.log("\n");

console.log("USANDO DO WHILE");
     do {
        
        console.log(indicedowhile);
        indicedowhile++;
       

    }while(indicedowhile<=numero);

    console.log("\n");

console.log("USANDO FOR");
    for (var indicefor=1; indicefor<=numero; indicefor++){

        console.log(indicefor);
    }
}



//FUNÇÃO04

function Exercicio04(numero01, numero02){



	
	for(var contador=numero01; contador<=numero02;contador++){
		if (contador%numero01==0){
			console.log(contador);
		}


	}

	}

//FUNÇÃO05

function Exercicio05(vetor) { 

	var maiornumero = Math.max.apply(null, vetor);
	var menornumero = Math.min.apply(null, vetor);

	console.log("O maior valor do vetor definido eh: " + maiornumero);
	console.log("O menor valor do vetor definido eh: " + menornumero);
}





