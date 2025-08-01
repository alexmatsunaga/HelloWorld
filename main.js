
let nomeUsuário = prompt("qual e seu nome?");
let elemento = document.querySelector("#nome-usuário")


while(nomeUsuário ==""){
    nomeUsuário = prompt("qual seu nome?");
}
if(nomeUsuário == null){
    elemento.textContent = ("seja bem vindo");
}
else{
    elemento.textContent = nomeUsuário;
}