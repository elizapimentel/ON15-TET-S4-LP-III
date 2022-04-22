let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]
    
let clienteBeth = [
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Blusa simples', valor: 35.0} ]
    
let clienteYolanda = [
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]    

let adicionarItem = clienteBeth.push(
    {produto: 'Blusa preta gola alta', valor: 60.0},
    {produto: 'Tênis casual preto', valor: 120.0})

let addRemItem = clienteYolanda.splice(1,1, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Blusa simples', valor: 35.0}
    )

let valorTotal = []
let valorDesconto = []


//calculo do valor total da compra
    function calcularTotal(compras){
        valorTotal = compras.map(item => item.valor).reduce((acc, elem) => acc + elem);   
        return valorTotal
    }
console.log(calcularTotal(clienteLilit))

//calculo do valor total de descontos    
    function calcularDescontos(desconto){
        cliente = desconto.forEach((item) => {
            if(item.valor >= 200){
               valorDesconto.push(item.valor*0.5)
            } else if(item.valor >= 100){
               valorDesconto.push(item.valor*0.2)
            } else if(item.valor >= 80){
               valorDesconto.push(item.valor*0.1)
            } else if(item.valor >= 50){
                valorDesconto.push(item.valor*0.05)
            }
            
        }) 
        return valorDesconto.reduce((ant,atu)=> ant+atu)
        
               
    }
    console.log(calcularDescontos(clienteLilit))
//calculo do valor final, aplicando data e cupom    
    function calcularValorFinal(cliente){
        let quantidadeProdutos = cliente.lenght
                    
        let dataCompra = new Date().toLocaleDateString('pt-BR')

   

        let valorFinal = valorTotal - valorDesconto

        let notaFiscal = {
            "Valor Total" : `R$${valorTotal.toFixed(2).replace('.', ',')}`,
            "Valor Desconto" : `R$${valorDesconto.toFixed(2).replace('.', ',')}`,
            "Valor Final" : `R$${valorFinal.toFixed(2).replace('.', ',')}`,
            "Data de Compra": dataCompra         
    }

    // Ultimo cupom
        if(quantidadeProdutos > 10 || valorFinal > 800.0) {
            return console.table ({
                ...notaFiscal,
                "Bonus" : "Você ganhou um cupom de R$50,00 para sua próxima compra"})

        } else{
            return console.table(notaFiscal)
    }
    }
  
  
    console.log("Compras cliente Lilit")
    console.log(calcularValorFinal(clienteLilit))
 /*    console.log("Compras cliente Beth")
    calcularValorFinal(clienteBeth)
    console.log("Compras cliente Yolanda")
    calcularValorFinal(clienteYolanda)    */