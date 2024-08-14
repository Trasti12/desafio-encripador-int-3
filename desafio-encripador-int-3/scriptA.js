

const areaTexto = document.querySelector(".area_texto");
const resultado = document.querySelector(".resultado_mensaje");
const textos = document.querySelector(".textos");
const copiar = document.querySelector(".copiar");
const luna = document.querySelector(".luna");

function botonEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    resultado.value = textoEncriptado;
    areaTexto.value = "";
    textos.style.display = "none";
    copiar.style.display = "block";
    luna.style.display = "none";
}

function encriptar(encriptado){
    let encriptKeys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptado = encriptado.toLowerCase();

    for(let i = 0; i < encriptKeys.length; i++){
        if(encriptado.includes(encriptKeys[i][0])){
            encriptado = encriptado.replaceAll(encriptKeys[i][0], encriptKeys[i][1]);

        }

    }
    return encriptado;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(areaTexto.value);
    resultado.value = textoDesencriptado;
    areaTexto.value = "";
}

function desencriptar(desencriptado){
    let desencriptKeys = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    desencriptado = desencriptado.toLowerCase();

    for(let i = 0; i < desencriptKeys.length; i++){
        if(desencriptado.includes(desencriptKeys[i][0])){
            desencriptado = desencriptado.replaceAll(desencriptKeys[i][0], desencriptKeys[i][1]);
        }
    }
    return desencriptado;
}

function botonCopiar(){
    const textoCopiado = resultado.value;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado al portapapeles");
}