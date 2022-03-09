function verificar(){
var nome = document.getElementById('name')
var fidade = document.getElementById('idade')
var res = document.getElementById('res')
if(nome == 0 || fidade < 0){
    window.alert('[ERRO] Verifique suas informações e tente novamente!')
}else if(fidade > 12){
    res.innerHTML = `Seja Bem vinda ${nome}`
}
}