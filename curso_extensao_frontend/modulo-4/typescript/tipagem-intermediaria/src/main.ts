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

type AlunoType = {
	nome: string,
	matricula: number
};

let alunos: AlunoType[] = [
	{nome: 'Vinícius', matricula: 20230008},
	{nome: 'Maria', matricula: 20230009}
];

//Tipagem de Funções
function retornarPrimeiro(lista: AlunoType[]): string {
	const primeiro = lista[0]
	return `O(a) aluno(a) ${primeiro.nome} tem a matrícula de número ${primeiro.matricula}.`
};

console.log(retornarPrimeiro);

type ProdutoType = {
	nome: string,
	preco: number
};

let produtos: ProdutoType[] = [
	{nome:'Prod01',	preco:8.00},
	{nome:'Prod02', preco:5.30}
];

function apresentarProduto(produtos: ProdutoType): string{
	return `O produto ${produtos.nome} custa R$${produtos.preco}.`
};

console.log(apresentarProduto)


//Parâmetros opcionais
function calcularPagamento(valor: number, parcelas: number, desconto?: number){
	const parcelasComValores: number[] = []
	for (let i = 1; i <= parcelas; i++){
		let valorNovo = valor
		if(desconto){
			valorNovo = valor - (valor * desconto)
		}
		parcelasComValores.push(valorNovo / parcelas)
	}
	
	return parcelasComValores
};

console.log(calcularPagamento(100, 3, 0.1));
console.log(calcularPagamento(100, 4, 0.2));
console.log(calcularPagamento(30, 3));