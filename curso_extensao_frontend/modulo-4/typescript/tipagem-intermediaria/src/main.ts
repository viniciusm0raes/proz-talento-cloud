import objeto from './usuario';

console.log('Do arquivo principal.');
console.log(objeto.nome);

//Tipagem de Objetos

type UsuarioType = {
	nome: string,
	idade: number,
	admin: boolean,
	endereco: {
		estado: string,
		cidade: string
	}
};

let usuario: UsuarioType;

//Declarando o objeto

usuario = {
	nome: "Vinícius",
	idade: 43,
	admin: false,
	endereco: {
		estado: 'BA',
		cidade: 'VCA'
	}
};

type NumerosPermitidos = 2 | 3 | 5;

let numero: NumerosPermitidos = 5;



//Tipagem de Arrays

type Aluno = {
	nome: string,
	matricula: number
};

let alunos: Aluno[] = [
	{nome: 'Vinícius', matricula: 20230008},
	{nome: 'Maria', matricula: 20230009}
];

console.log(alunos[0])


//Tipagem de Funções
function retornarPrimeiro(lista: Aluno[]): string{
	const primeiro = lista[0]
	return `O(a) aluno(a) ${primeiro.nome} tem a matrícula de número ${primeiro.matricula}.`
}

console.log(retornarPrimeiro);

type ProdutoType = {
	nome: string,
	preco: number
};

function apresentarProduto(produto: ProdutoType){
	return `O produto ${produto.nome} custa R$${produto.preco}`
};