let valores = [8,1,2,5,4,9]
valores.sort()
console.log(valores)


/*for(let pos = 0; pos < valores.length ; pos++ )
console.log(` a posição ${pos} tem o valor ${valores[pos]}`)
console.log(`essa arrey possui ${valores.length} elementos`)*/

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
    
    
}
