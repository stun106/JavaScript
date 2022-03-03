var agora = new Date()
var min = new Date()
var horario = agora.getHours()
var min = agora.getMinutes()
    console.log(`São exatamente ${horario}hrs e ${min}min `)
if(horario < 12 ){
    console.log(`Bom Dia!`)
}else if(horario < 18){
    console.log(`Boa Tarde!`)
}else{
    console.log('Boa Noite !')
} 
