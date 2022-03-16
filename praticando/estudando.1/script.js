function Contar(){
    var txn = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas= document.getElementById('pass')
    var res = document.getElementById('res')
    var n = Number(txn.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if(txn.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] verifique seus dados !')
    }else{
        res.innerHTML += 'Contando:'
        res.innerHTML =''
        for(var c = n; c <= f; c+=p){
            res.innerHTML += `${c} `
            res.innerHTML += '...'
        }
    }
    
}