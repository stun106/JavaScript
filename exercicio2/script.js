function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length === 0 || fano.value > ano) {
       window.alert('[ERRO] verifique os dados e tente novamente!')
   }else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - fano.value
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked){
       genero = 'Homem'
       if( idade >= 0 && idade < 10){
           //criança
        img.setAttribute('src','criançaH.png')
       }else if( idade < 21){
            //jovem
        img.setAttribute('src','jovemH.png')
       }else if (idade < 50){
            //adulto
        img.setAttribute('src','homem.png')
       }else{
           //idoso
           img.setAttribute('src','senhor.png')
       }
   }else if (fsex[1].checked){
       genero = 'Mulher'
       if( idade >= 0 && idade < 10){
        //criança
     img.setAttribute('src','criançaF.png')
    }else if( idade < 21){
         //jovem
     img.setAttribute('src','jovemM.png')
    }else if (idade < 50){
         //adulto
     img.setAttribute('src','mulher.png')
    }else{
        //idoso
        img.setAttribute('src','senhora.png')
    }
}
   res.style.textAlign = 'center'
   res.style.padding = '10px'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`   
   res.appendChild(img)
}
}
