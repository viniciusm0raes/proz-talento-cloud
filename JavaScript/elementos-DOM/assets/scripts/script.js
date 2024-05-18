const produtos = [
    {
        site: "https://www.gojira-music.com/",
        capa: "./assets/imgs/fortitude.png",
        banda: "Gojira",
        titulo: "Fortitude",
        descricao: "Gravado e produzido por Joe Duplantier no Silver Cord Studio e mixado por Andy Wallace (Nirvana, Rage Against The Machine), “Fortitude” é uma coleção de canções que incitam a humanidade a imaginar um novo mundo – e então fazê-lo acontecer. Fortitude continua a longa tradição do Gojira em aproveitar sua música como um veículo para o ativismo ambiental e político. Com canções como “Amazonia” e “The Chant”, não apenas pesquisando casos críticos, mas também catalisando os ouvintes para agir.",
        informacao: "Quantidade - Valor final:",
        valor: 53.00
    }
];

for (let i = 0; i < produtos.length; i++) {
    let disco = document.createElement("section")
    disco.innerHTML = `
<a href="${produtos[i].site}"+ '" target = "_blank"><img src="${produtos[i].capa}" title="${produtos[i].titulo}"></a>
<h1>${produtos[i].banda}</h1>
<h2>${produtos[i].titulo}</h2>
<p>${produtos[i].descricao}</p>
<p>${produtos[i].informacao}</p>
<div><button>+</button> <span>0</span><span> - </span><h3>${Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(0)}</h3> <button>-</button></div>`;

    let discos = document.querySelector("body");
    discos.appendChild(disco)
};
const preco = produtos.map(precos => precos.valor);
let informacao = document.getElementsByTagName("p")[1];
let btnMais = document.getElementsByTagName("button")[0];
let btnMenos = document.getElementsByTagName("button")[1];
let quadro = document.getElementsByTagName("div");
let precoTotal = document.getElementsByTagName("h3");
let contProd = document.getElementsByTagName("span");
let separador = document.getElementsByTagName("span")[1];
let contagem = 0;
/* Aplicação de estilos */
function estilosCss() {
    document.querySelector("body").style.backgroundColor = "#4F4F4F";
    document.querySelector("body").style.fontFamily = "Arial, Helvetica, sans-serif";
    document.querySelector("body").style.color = "#fff";
    document.querySelector("section").style.width = "30vw";
    document.querySelector("section").style.textAlign = "center";
    document.querySelector("section").style.margin = "1rem auto";
    document.querySelector("div").style.display = "flex";
    document.querySelector("div").style.alignItems = "center";
    document.querySelector("div").style.justifyContent = "space-evenly"
    document.querySelector("div").style.height = "5vh";
    document.querySelector("div").style.backgroundColor = "darkgoldenrod";
    document.querySelector("div").style.borderWidth = "0.5px";
    document.querySelector("div").style.borderColor = "#fff";
    document.querySelector("div").style.borderStyle = "solid";
    document.querySelector("div").style.borderRadius = "0.5rem";
    document.querySelector("h1").style.fontSize = "1.5rem";
    document.querySelector("h1").style.marginTop = "0";
    document.querySelector("h1").style.marginBottom = "0";
    document.querySelector("h2").style.fontSize = "1.3rem";
    document.querySelector("h2").style.borderRadius = "0.5rem";
    document.querySelector("h2").style.margin = "0.3rem 0";
    document.querySelector("h3").style.fontSize = "1.3rem";
    document.querySelector("h3").style.fontWeight = "900";
    document.querySelector("h3").style.color = "#fff";
    document.querySelector("h3").style.display = "inline";
    document.querySelector("span").style.fontSize = "1.3rem";
    informacao.style.marginBottom = "0.3rem";
    informacao.style.fontWeight = "bolder";
    separador.style.fontSize = "1.3rem";
    btnMais.style.fontSize = "1rem";
    btnMais.style.fontWeight = "bolder";
    btnMais.style.color = "#fff";
    btnMais.style.borderWidth = "0.5px";
    btnMais.style.borderColor = "#fff";
    btnMais.style.borderRadius = "5px";
    btnMais.style.backgroundColor = "darkgoldenrod";
    btnMais.style.display = "inline";
    btnMenos.style.fontSize = "1rem";
    btnMenos.style.fontWeight = "bolder";
    btnMenos.style.color = "#fff";
    btnMenos.style.borderWidth = "0.5px";
    btnMenos.style.borderColor = "#fff";
    btnMenos.style.borderRadius = "5px";
    btnMenos.style.backgroundColor = "darkgoldenrod";
    btnMenos.style.display = "inline";
    document.querySelector("p").style.fontSize = "1rem";
    document.querySelector("p").style.margin = "0";
    document.querySelector("p").style.textAlign = "justify";
    document.querySelector("img").style.borderRadius = "3rem";
    document.querySelector("img").style.height = "35vh";
    document.querySelector("img").style.marginBottom = "0";
}
estilosCss();

/* Alterar o valor pelos botões */

btnMais.addEventListener("click", () => {
    contagem = contagem + 1;
    quadro = precoTotal[0].textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(contagem * preco[0]);
    contProd[0].textContent = contagem;

});

btnMenos.addEventListener("click", () => {
    if (contagem > 0) {
        contagem = contagem - 1;
        precoTotal[0].textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(contagem * preco[0]);
        contProd[0].textContent = contagem;
    }

    else if (contagem = 0) {
        contagem = contagem;
        precoTotal[0].textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(contagem * preco[0]);
        contProd[0].textContent = contagem;
    }

    else {
        precoTotal[0].textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(0);
        contProd[0].textContent = contagem;
    }
});
