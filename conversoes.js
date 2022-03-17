//conversão implícita
const numero=3;
const nString="3";

console.log(numero==nString);
console.log(numero+nString);
//conversão explícita
//Number()
//String()
console.log(Number(nString)+numero);

//operador ternario:
const idadeMinima=18;
const idadeDoCliente=19;
console.log(idadeDoCliente>=idadeMinima?"Parabéns,você poderá fazer autoescola e ser contratado para estagiar conosco!":"Oh nooo,você é muito noviço ainda,espere mais um pouco champs");


//Template Strings:
const nome="Igor";
const idade=20;
const cidade="Patos de Minas";
const apresentar="Oi! Meu nome é : "+nome+ " Minha idade é : "+idade+" E nasci na cidade de:"+cidade;
console.log(apresentar);

const apresentacao=`Olá meu nome é: ${nome},minha idade é: ${idade},e meu local de nascimento é:${cidade}`;
console.log(apresentacao);

//funções 
function digaLa(texto){
    console.log(texto);
}
digaLa("Hello Darkness Smile Old Friend");
digaLa("Palavra chave");

//parâmetros de função
function soma(num1,num2){
    return num1+num2;
}
console.log(soma(2,56));
console.log(soma(333,555));

//parâmetros x argumentos

//ordem dos parâmentros
function nomeIdade(nome,idade){
    return `Olá meu nome é : ${nome},e minha idade é: ${idade}`;
}
console.log(nomeIdade("Igor",20));

function multiplica(num1=1,num2=1){//argumentos é declarar um valor padrão para os parâmetros em caso de erro.
    return num1*num2;
}
console.log(multiplica(soma(5,7),soma(4,9)));
//diferenças entre função comum e expressão de função:
//Diferença principal:Hoisting
//Funções e var são "listadas" no topo ou seja,independente de onde forem declaradas,serão lidas primeiro
console.log(apresentando());
function apresentando(){
    return "Olá";
}
/* console.log(somar(1,1));
const somar=function(num1,num2){
    return num1+ num2
} */
//ReferenceError: Cannot access 'somar' before initialization

//Arrow Function
/* function apresenta(nome){
    return`meu nome é ${nome}`;
} */
const apresentarArrow=nome=>`meu nome é: ${nome}`;
const multiplicar=(num1,num2)=>num1*num2;
//arrow function com mais de 1 linha de instrução
const somaNum=(num1,num2)=>{
    if(num1||num2>10){
        return "somente números de 1 a 9";
    }else{
        return num1+num2;
    }
}
//Hoisting: Arrow function se comporta da mesma forma da expressão de função;