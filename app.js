function numerosCal(valor){
    document.getElementById('result').value += valor;
}

function operacionCal(valor){
    var operar = document.getElementById('result').value;
   
    if (operar ==0){
        document.getElementById('result').value = "Sin operaciones";
    } 

    else{
        document.getElementById('result').value = eval(
            operar.replace(/root/g, 'elChocoro').replace(/pow/g, 'elChocoro2'));
    }
}

function elChocoro(valor, raiz){
    return Math.pow(valor, 1/raiz)
}

function elChocoro2(valor, potencia){
    return Math.pow(valor, potencia)
}


function resetearCal(){
    document.getElementById('result').value = " ";
}



/*function RaizCuadrada(){

}
*/

// how to make a calculator




