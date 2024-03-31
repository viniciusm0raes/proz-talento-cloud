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
