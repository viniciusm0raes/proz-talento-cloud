// ---------- FUNÇÕES GERAIS ---------- //
function mostrarPopup(input, label){
	// Mostrar popup de campo obrigatório
	input.addEventListener("focus", ()=> {
		label.classList.add("required-popup")		
	});

	// Ocultar popup de campo obrigatório
	input.addEventListener("blur", ()=> {
		label.classList.remove("required-popup")		
	});
}

function estilizarCorreto(input, helper){
	helper.classList.remove("visible");
	input.classList.remove("error");
	input.classList.add("correct");
}

function estilizarIncorreto(input, helper){
	helper.classList.add("visible");
	input.classList.add("error");
	input.classList.remove("correct");
}

// ---------- VALIDAÇÃO DO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

mostrarPopup(usernameInput, usernameLabel)

// Validar valor do input no campo username
usernameInput.addEventListener("change", (e)=>{
	let valor = e.target.value
	if(valor.length < 3){
		//Se o input for incorreto
		usernameHelper.innerText = "O username precisa ter 3 ou mais caracteres"
		estilizarIncorreto(usernameInput, usernameHelper)
		inputsCorretos.username = false
	}else{
		//Se o input for correto
		estilizarCorreto(usernameInput, usernameHelper)
		inputsCorretos.username = true
	
	}
}) 

// ---------- VALIDAÇÃO DO E-MAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel)


// Validar valor do input no campo e-mail
emailInput.addEventListener("change", (e)=>{
	let valor = e.target.value
	if(valor.includes("@") && valor.includes(".com")){
		//Se o input for correto	
		estilizarCorreto(emailInput, emailHelper)
		inputsCorretos.email = true
	}else{
		//Se o input for incorreto			
		emailHelper.innerText = "O e-mail precisa conter um caractere @ e um endereço .com"
		estilizarIncorreto(emailInput, emailHelper)
		inputsCorretos.email = false
	}
})


// ---------- VALIDAÇÃO DA SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e)=> {
	let valor = e.target.value
	
	if(valor == ""){
		senhaHelper.innerText = "O campo senha não pode estar vazio"
		estilizarIncorreto(senhaInput, senhaHelper)
		inputsCorretos.senha = false
	}else{
		estilizarCorreto(senhaInput, senhaHelper)
		inputsCorretos.senha = true
	}

})

// ---------- VALIDAÇÃO DA CONFIRMAÇÃO DE SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("change", (e)=> {
	let valor = e.target.value
	
	
	if(valor == senhaInput.value){
		estilizarCorreto(confirmaSenhaInput, confirmaSenhaHelper)
		inputsCorretos.confirmaSenha = true
	
	}else{
		confirmaSenhaHelper.innerText = "As senhas informadas não coincidem"	
		estilizarIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
		inputsCorretos.confirmaSenha = false
	}
})

// ---------- ALTERAR COMPORTAMENTE DEFAULT DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
	username: false,
	email: false,
	senha: false,
	confirmaSenha: false
}

btnSubmit.addEventListener("click", (e)=>{
	if(inputsCorretos.username == false ||
	   inputsCorretos.email == false ||
	   inputsCorretos.senha == false ||
	   inputsCorretos.confirmaSenha == false){
	   e.preventDefault()
	   alert("Os campos obrigatórios precisam ser preenchidos corretamente")
	}else{
		alert("Formulário enviado com sucesso")
	}
})
