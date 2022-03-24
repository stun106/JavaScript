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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sel.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Erro verifique seus dados')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if (valores. length == 0){
        window.alert('adicione um valor antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todom temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> o maior valore informado é ${maior}.</p>`
        res.innerHTML += `<p> o menor valor informado é ${menor}.</p>`
        res.innerHTML+= `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`

    }
}