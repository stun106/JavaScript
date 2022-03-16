function gerar(){
var num = document.getElementById('txtn')
var tab = document.getElementById('tabu')
if(num.value.length == 0){
    window.alert('Porfavor, Digite um numero !')
}else{
    tab.innerHTML=""
    var n = Number(num.value)
    for(var c = 1; c <= 10; c++){
    var op = document.createElement('option')
    op.text=`${c} x ${n} = ${c*n}`
    op.value =`tab${c}`
    tab.appendChild(op)
    }
    }
}