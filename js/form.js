var botaoAdicionar=document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form =document.querySelector("#form-adiciona");
    //Extraindo informações do form
    var paciente=obtemPaciente(form);
    //Cria a tr e td do paciente
    var pacienteTr=criaTr(paciente);
    //adicionando paciente na tabela
    if(validaPaciente(paciente)){
        alert("Paciente inválido!");
        return;
    }
    var tabela=document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});
   

function obtemPaciente(form){
    var paciente={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}
function criaTr(paciente){
    var pacienteTr=document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return pacienteTr;
}

function montaTd(dado,classe){
    var td=document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)&&validaAltura(paciente.altura)){
        return true;
    }else{
        return false;
    }
}