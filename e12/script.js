
function contador(){
var inicio = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('pas')
var res = document.getElementById('res')
var n1 = inicio.value
var n2 = fim.value
for(n1.value.length;n1<=n2;n1++){
res.innerHTML = `${n1}`
}
}