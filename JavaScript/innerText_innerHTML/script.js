const listaLinks = [
    {
        banda: "Lamb of God",
        site: "https://www.lamb-of-god.com/"
    },
    {
        banda: "Gojira",
        site: "https://www.gojira-music.com/" 
    },
    {
        banda: "Cangaço",
        site: "http://cangacometal.com/"
    },
]

let todos = document.querySelectorAll("h1,ul,a,ol");

let titulo = document.getElementById("titulo");

let link = document.querySelector("a");

titulo.innerText = "\"Mantras\" com innerText"

link.innerText = "https://prozeducacao.com.br"


console.log(todos);

for(let i = 0; i < listaLinks.length; i++){
    let itens = document.createElement("li")    
    itens.innerHTML = `<a href="${listaLinks[i].site}"+ '" target = "_blank">${listaLinks[i].banda}</a>`
    

    let bandas = document.getElementById("naOrdem")
    bandas.appendChild(itens);
}
