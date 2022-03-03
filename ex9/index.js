var agora = new Date
var diaSem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
    console.log(`São exatamente ${hora}hrs e ${min}min `)

    //dias da semana
    switch(diaSem){
    case 0:
    console.log('domingo')
    break
    
    case 1:
    console.log('segunda - feira')
    break

    case 2: 
    console.log('terça - feira')
    break

    case 3: 
    console.log('quarta - feira ')
    break

    case 5:
        console.log('quinta - feira')
    break

    case 6: 
        console.log('sexta - feira')
    break

    case 7:
        console.log('sabado')
    break

    default:
        console.log('[erro] Dia invalido! ')
}

//horario
if(hora < 12){
    console.log('Bom Dia!! acorda pra cuspir !')
}else if(hora > 12 || hora >18){
    console.log('Boa Tarde!! Já Lavou os pratos?')
}else{
    console.log('Boa Noite!! Não esqueça de tomar banho, Carniça!')
}