var titulo= document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrição";
var pacientes= document.querySelectorAll(".paciente");

for(let i=0;i<pacientes.length;i++){
    var paciente=pacientes[i];
    var tdPeso=paciente.querySelector(".info-peso");
    var peso=tdPeso.textContent;
    
    var tdAltura=paciente.querySelector(".info-altura");
    var altura=tdAltura.textContent;
    var tdImc=paciente.querySelector(".info-imc");
    var alturaEValido=validaAltura(altura);
    var pesoEValido=validaPeso(peso);
    console.log(paciente);//tr
    console.log(tdPeso);//td peso
    console.log(peso);//obter 100
    console.log(altura);//obter 2.00
    
    if(!pesoEValido){
        console.log("Peso inválido!");
        pesoEValido=false;
        tdImc.textContent="Peso inválido!";
       /*  paciente.style.color="red"; */
       paciente.classList.add("paciente-invalido");
        
    }
    
    if(!alturaEValido){
        console.log("Altura inválida!");
        alturaEValido=false;
        tdImc.textContent="Altura inválida!";
        /* paciente.style.color="red"; */
        paciente.classList.add("paciente-invalido");
        
    }
    if(pesoEValido &&alturaEValido){
        var imc=calculaImc(peso,altura)//100/2.0*2.0=100/4=25
        tdImc.textContent=imc;
    }
}

titulo.addEventListener("click",function(){
    alert("Olha só aprendi a usar função anônima");
});

function calculaImc(peso,altura){
    var imc=0;
    imc=peso/(altura*altura);
    return imc.toFixed(1);
}
function validaPeso(){
    if(peso>=0&& peso<1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(){
    if(altura>=0 && altura<=3.0){
        return true;
    }else{
        return false;
    }
}