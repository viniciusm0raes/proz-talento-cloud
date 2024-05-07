// Genéricos com Arrays
type ListaType<T> = T[]

let listaNumeros: ListaType<number> = []
listaNumeros.push(5)
console.log(listaNumeros)

let listaNomes: ListaType<string> = []
listaNomes.push('Vinícius')
console.log(listaNomes)

type AlunoType = {
	nome: string,
	matricula: number
};

let listaAlunos: ListaType<AlunoType> = []

let alunoNovo: AlunoType = {
	nome: 'Vinícius',
	matricula: 2023008
}

listaAlunos.push(alunoNovo)
console.log(alunoNovo)



// Genéricos com Objetos
type Filme = {
	titulo: string,
	genero: 'animação' | 'ação' | 'suspense' | 'drama'
}

let listaFilmes: Filme[] = []
listaFilmes.push(	
	{titulo: 'Matrix', genero: 'ação'},
	{titulo: 'O Preço do Amanhã', genero: 'ação'},
	{titulo: 'Um Sonho de Liberdade', genero: 'drama'},
	{titulo: 'Os Intocáveis', genero:'suspense'}
)

type ResumoLista<T> = {
	total: number,
	ultimo: T,
	lista: T[]
}

let filmeMaisRecente: ResumoLista<Filme> = {
	total: listaFilmes.length,
	ultimo: listaFilmes[listaFilmes.length - 1],
	lista: listaFilmes
}

console.log(`O título do último filme adicionado é: ${filmeMaisRecente.ultimo.titulo}.`)
console.log(`O gênero do último filme adicionado é: ${filmeMaisRecente.ultimo.genero}.`)
console.log(filmeMaisRecente.lista)
console.log(`No total, foram cadastrados ${filmeMaisRecente.total} filmes.`)


//Genéricos com Funções

//Ao definir um tipo genérico na função abaixo e fazermos a relação do array resultante, também com o tipo genérico, o TypeScript identificará o tipo aplicado para cada lista e definirá este mesmo tipo para o resultado de cada uma destas.

function primeiroElemento<T>(lista: T[]): T{
	return lista[0]
};

let lista2Numeros = [1, 2, 3, 4, 5];
let lista2Nomes = ['Maria', 'Vinícius'];

type Produto = {
	nome: string,
	preco: number
};

let lista2Produtos: Produto[] = [
	{nome: 'pão', preco: 0.70},
	{nome: 'leite', preco: 5.50}
];

let resultadoNumeros = primeiroElemento(lista2Numeros);
let resultadoNomes = primeiroElemento(lista2Nomes);
let resultadoProdutos = primeiroElemento(lista2Produtos);

console.log(resultadoNumeros);
console.log(resultadoNomes);
console.log(resultadoProdutos);

//Genéricos capturando elementos no DOM
const inputNome = document.querySelector<HTMLInputElement>('#nome');
console.log(inputNome)