function contador(){
var inicio = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('pas')
var res = document.getElementById('res')
var n1 = Number(inicio.value)
var n2 = Number(fim.value)
var p = Number(passo.value)
for(n1 = Number(inicio.value);n1<=n2;n1++ ){
    res.innerHTML = `${n1}`
}
}