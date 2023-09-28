const produtos = [
    {        
        site: "https://www.gojira-music.com/", 
        capa: "./assets/imgs/fortitude.png",
        banda: "Gojira",
        titulo: "Fortitude",
        descricao: "Gravado e produzido por Joe Duplantier no Silver Cord Studio e mixado por Andy Wallace (Nirvana, Rage Against The Machine), “Fortitude” é uma coleção de canções que incitam a humanidade a imaginar um novo mundo – e então fazê-lo acontecer. Fortitude continua a longa tradição do Gojira em aproveitar sua música como um veículo para o ativismo ambiental e político. Com canções como “Amazonia” e “The Chant”, não apenas pesquisando casos críticos, mas também catalisando os ouvintes para agir.",
        valor: "R$ 53,00"
    },
]



for(let i = 0; i < produtos.length; i++){
    let disco = document.createElement("div")
    disco.innerHTML = `
    <a href="${produtos[i].site}"+ '" target = "_blank"><img src="${produtos[i].capa}" title="${produtos[i].titulo}"></a>
    <h1>${produtos[i].banda}</h1>
    <h2>${produtos[i].titulo}</h2>
    <p>${produtos[i].descricao}
    <h3>${produtos[i].valor}`
    
    let discos = document.querySelector("body")
    discos.appendChild(disco)
}
//Aplicação de estilos
function estilosCss(){
    document.querySelector("body").style.backgroundColor = "#4F4F4F";
    document.querySelector("body").style.color = "#fff";
    document.querySelector("div").style.width = "30vw";
	document.querySelector("div").style.textAlign = "center";    
	document.querySelector("div").style.margin = "2rem auto";
    document.querySelector("h1").style.fontSize = "1.5rem";
    document.querySelector("h2").style.fontSize = "1.3rem";
    document.querySelector("h2").style.backgroundColor = "darkgoldenrod";
    document.querySelector("h2").style.borderRadius = "0.5rem"; 
    document.querySelector("h3").style.fontSize = "1rem";
    document.querySelector("h3").style.fontWeight = "900";
	document.querySelector("h3").style.color = "#fff";
	document.querySelector("h3").style.backgroundColor = "darkgoldenrod";
	document.querySelector("h3").style.borderRadius = "0.5rem"; 
	document.querySelector("p").style.fontSize = "1rem";
	document.querySelector("p").style.textAlign = "justify";
	document.querySelector("img").style.borderRadius = "3rem";	
	document.querySelector("img").style.height = "35vh";

    }
estilosCss();
