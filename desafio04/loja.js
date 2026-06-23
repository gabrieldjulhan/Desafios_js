const prond=[
    {nome:'Notbook', valor:2400},
    {nome:'Ram', Valor:300},
    {nome:'SD', valor:80}
]
for(let c of prod){
    if (c.Valor>100){
        console.log(`Um produto acima de 100 reais é ${c.nome}, custando ${c.Valor}.`)
    }
}