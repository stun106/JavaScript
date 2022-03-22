/*function add(){
var nub = document.getElementById('txtn')
var sel = document.getElementById('sel')
var nb = Number(nub.value)
if(txtn.value.length == 0 || txtn.value > 100){
    window.alert('erro')
}else{
    for(var pos = nb; pos <= nb; pos++){
        var item = document.createElement('option')
        item.text = `valor ${pos} adicionado;`
        sel.appendChild(item)
    }
}
}
*/
let num = document.querySelector('input#txtn')
let sel = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

//condição : para numeros maiores de 100

function innumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

//condição para numeros repetidos

function inlister(n,l){
    if(l.indexOf (Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(innumber(num.value) && !inlister(num.value,valores)){
        
    }else{
        window.alert('Erro verifique seus dados')
    }
}
