function Gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabu')
if(num.value.length == 0){
    window.alert('Porfavor, digite um numero!')
}else{
    var n = Number(num.value)
    tab.innerHTML=''
    for(var c = 1;c <= 10;c++){
        var item = document.createElement('option')
        item.text= `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    }
}