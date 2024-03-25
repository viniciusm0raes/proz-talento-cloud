// 1. Captura de elementos
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario');
const cadastrarProduto = document.getElementById('cadastrar-produto');
const produtosCadastrados = document.getElementById('produtos-cadastrados');
const resUsuarioCad = document.getElementById('res-usuario-cad');

// 2. Funções

//Utilizando o prepend para demonstrar os produtos cadastrados em ordem decrescente

//Limpar o formulário
function cadProduto(evento){
	resUsuarioCad.innerText = ''
	evento.preventDefault()

	const jsonBody =  JSON.stringify({
		produto: nomeProduto.value,
		valor: valorProduto.value,
		descricao: descricaoProduto.value
	})

		fetch('https://httpbin.org/post', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: jsonBody
	})

	.then(res => res.json())
	.then(data => {
		console.log(data)
		const cadastro = document.createElement('div')
		cadastro.classList.add('cadastrados')
		cadastro.innerHTML = `
			<h5>${data.json.produto} - ${'R$ '+data.json.valor}</h5>
			<p>${data.json.descricao}</p>
		`
		produtosCadastrados.prepend(cadastro)

		//Limpar formulário
		nomeProduto.value = ''
		valorProduto.value = ''
		descricaoProduto.value = ''

		alert('Produto cadastrado com sucesso!')
	})
	.catch((error) => {
		console.log(error)
		resUsuarioCad.innerText = 'Não foi possível realizar o cadastro do produto.'
	})
}
// 3. Eventos
btnEnviar.addEventListener('click', (evento) => cadProduto(evento))