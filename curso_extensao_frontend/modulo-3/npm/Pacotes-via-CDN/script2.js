const btnGerar = document.getElementById('btn-gerar');

// Utilizando o Axios, não é necessário converter a resposta dos dados de JSON para JScript. Ela já vem neste formato.

function gerarUsuario() {
	axios.get("https://random-data-api.com/api/v2/users")
        .then(response =>{
            console.log(response.data)
        })
}

btnGerar.addEventListener('click', gerarUsuario)