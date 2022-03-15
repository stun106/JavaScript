function contador(){
var inicio = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('pas')
var res = document.getElementById('res')
var n1 = Number(inicio.value)
var n2 = Number(fim.value)
var p = Number(passo.value)
if(inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0){
    window.alert('[ERRO] Verifique seus dados e tente novamente !')
}else{
    res.innerHTML = 'contando:'
    for(var c = n1; c <= n2; c += p ){
        res.innerHTML += ` ${c} \u{1F449} `
    }
    res.innerHTML +=`\u{1F3C1}`
}

}
