function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('textano')
    var res = document. getElementById('res')
    if(fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('Erro Tente novamente!!')
    }
}