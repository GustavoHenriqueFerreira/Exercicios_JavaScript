// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores.
var soma;
soma = myvar + 10;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma * 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = [{nomeComida: "arroz"}, {nomeComida: "feijão"}, {nomeComida: "ovo"}];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
comidaFeijao = comida.filter( (c) => {
    return c.nomeComida === "feijão"
});

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if(soma = myvar && typeof(soma) == typeof(myvar))
    console.log("soma é igual a myvar");
else
    console.log("soma é diferente de myvar");

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if(myvar > soma)
    console.log("myvar é maior que soma");
else
    console.log("myvar é menor ou igual a soma");

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
divisao = (myvar, soma)=> {
    return `${myvar/soma}`;
};

divisao(myvar, soma);

// Invoque a função criada acima, passando os parâmetros 10 e 2.
myvar = 10;
soma = 2;

console.log(divisao(myvar, soma))