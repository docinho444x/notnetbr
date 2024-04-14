var indice = 0
const Objetos = {
    nav : document.getElementById("nav"),
    navTit1 : document.getElementById("navTit1"),
    corp : document.getElementById("corp"),
    boxSearch : document.getElementById("navBoxSearch"),
    text: document.getElementsByClassName("text"),
    tit2: document.getElementsByClassName("tit2")
}
const Color = {
    padrao:["N-pa","T-pa","C-pa"],
    azul:["N-az","T-az","C-az"],
    amarelo:["N-am","T-am","C-am"],
    preto:["N-pr","T-pr","C-pr"],
    branco:["N-br","T-br","C-br"],
}
const Paint = (navbar, title, corpo)=>{
    Objetos.nav.classList.remove(Objetos.nav.classList.item(0))
    Objetos.nav.classList.add(`${navbar}`)
    Objetos.navTit1.classList.remove(Objetos.navTit1.classList.item(0))
    Objetos.navTit1.classList.add(`${title}`)
    Objetos.corp.classList.remove(Objetos.corp.classList.item(0))
    Objetos.corp.classList.add(`${corpo}`)
    if(indice<4){
        indice++
    }else{
        indice=0
    }
}
function execut(){
    switch(indice){
        case 0:
            Paint(Color.azul[0],Color.azul[1],Color.azul[2])
        break
        case 1:
            Paint(Color.amarelo[0],Color.amarelo[1],Color.amarelo[2])
        break
        case 2: 
            Paint(Color.preto[0],Color.preto[1],Color.preto[2])
        break
        case 3:
            Paint(Color.branco[0],Color.branco[1],Color.branco[2])
        break
        case 4:
            Paint(Color.padrao[0],Color.padrao[1],Color.padrao[2])
        break
    }
}
Objetos.navTit1.addEventListener("click", execut)