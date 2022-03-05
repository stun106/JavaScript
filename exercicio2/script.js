var data = new Date()
var ano = data.getFullYear()
var mes = data.getMonth()
var fano = document.getElementById ('txtano')
var fmes = document.getElementById('txt1')
var res = document.getElementById ('resul')
var fsex = document.getElementsByTagName('radsex')

   function verificar(){
   if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro, Verifique seus Dados!')
   }else{
       var idade = ano - fano.value
       var meses = fmes.value - mes
       res.innerHTML = `idade calculada ${idade} anos e ${meses} meses`
   }
}
