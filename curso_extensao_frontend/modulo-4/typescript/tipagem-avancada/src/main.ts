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

console.log(filmeMaisRecente.ultimo.titulo)
console.log(filmeMaisRecente.ultimo.genero)
console.log(filmeMaisRecente.lista)
console.log(filmeMaisRecente.total)