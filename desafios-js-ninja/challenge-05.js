/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [true, 'bruno', 10, null, {prop: 'prop'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr){
	return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function returnByIndex(arr, index){
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [false, 'pinheiro', 01, true, {prop: 'prop'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnByIndex(myVar2,0));
console.log(returnByIndex(myVar2,1));
console.log(returnByIndex(myVar2,2));
console.log(returnByIndex(myVar2,3));
console.log(returnByIndex(myVar2,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nome){
	var obj = {
		'livro1': {
			quantidadePaginas: 300,
			autor: 'autor1',
			editora: 'editora1'		
		},
		'livro2': {
			quantidadePaginas: 100,
			autor: 'autor2',
			editora: 'editora2'		
		},
		'livro3': {
			quantidadePaginas: 200,
			autor: 'autor3',
			editora: 'editora3'		
		},
	};
	
	return 	!nome ? obj : obj[nome];	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nome = 'livro3';


console.log("O livro "+nome+" tem " + book(nome).quantidadePaginas + " paginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do "+nome+" é " + book(nome).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O " +nome+" foi publicado pela " + book(nome).editora);
