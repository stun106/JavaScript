    function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('resul')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro, Verifique seus Dados!')
    }else{
    var fsex = document.getElementsByTagName('radsex')
    var idade = ano - Number(fano.value)
    
    if(fsex[0].checked){
        genero = 'Homem'
    }else if(fsex[1].checked){
        genero = 'Mulher'
    }
        res.innerHTML = `Detectamos  ${idade}`
    }
}