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
            operar.replace(/root/g, 'rRoot').replace(/pow/g, 'pPow'));
    }
}

function rRoot(valor, raiz){
    return Math.pow(valor, 1/raiz)
}

function pPow(valor, potencia){
    return Math.pow(valor, potencia)
}


function resetearCal(){
    document.getElementById('result').value = " ";
}

