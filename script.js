
const textArea = document.querySelector(".text-area");
const mensaje =document.querySelector(".mensaje");
const Copiar = document.querySelector(".Copiar");
const contenido = document.querySelector(".contenedor-parrafo");

    //La letra "e" es convertida para "enter"
    //La letra "i" es convertida para "imes"
    //La letra "a" es convertida para "ai"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"


        Copiar.style.visibility = "hidden";
    
    function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        Copiar.style.visibility = "inherit";
        contenido.remove();
    }


    function encriptar(stringEncriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();  

        for(let i = 0; i< matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1] )
                
            }
        }
        return stringEncriptada
    }

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        Copiar.style.visibility = "inherit";
        contenido.remove();
    }

    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();  

        for(let i = 0; i< matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0] )
                
            }
        }
        return stringDesencriptada
    }

    function btnCopiar() {

        var resultado = mensaje.value;

        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = resultado;
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);

        alert("El texto copiado es: " + resultado);

        location.reload();

    }


