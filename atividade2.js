let data = [
    {
      titulo: "us",
      genero: "terror",
      ano: "2019", 
    },
    {
      titulo: "transformers: O Lado Oculto da Lua",
      genero: ["ação", "sci-fi"],
      ano: "2011", 
    },
    {
      titulo: "moonfall - ameaça lunar",
      genero: ['Aventura', "sci-fi"],
      ano: "2022", 
    },
    {
      titulo: "casa gucci",
      genero: "drama",
      ano: "2021", 
    },
    {
      titulo: "encanto",
      genero: ["animação", "musical"],
      ano: "2021", 
    },
    {
      titulo: "Demon Slayer - Mugen Train",
      genero: ["ação", "fantasia"],
      ano: "2019", 
    },
    {
      titulo: "O Último Suspiro",
      genero: ["drama", "sci-fi"],
      ano: "2019", 
    },
    {
      titulo: "Suspiria",
      genero: "terror",
      ano: "1977", 
    },
    {
      titulo: "Corpo Elétrico",
      genero: ["drama", "ficção"],
      ano: "2017", 
    },
    {
      titulo: "Amour",
      genero: ["drama", "romance"],
      ano: "2012", 
    },
    {
      titulo: "Ninho de Musaranho",
      genero: "terror",
      ano: "2014", 
    },
    {
      titulo: "Colonia",
      genero: "suspense",
      ano: "2015", 
    },
    {
      titulo: "Homem-Aranha: Sem Volta para Casa",
      genero: ["ação", "aventura"],
      ano: "2021", 
    }]
  
    let cliente1 = "Suspense";
    let cliente2 = "corpo elétrico"
    let cliente3 = "Homem-Aranha: Sem Volta para Casa"
    let cliente4 = "drama" 
    let cliente5 = "terror"
    
    function buscarFilmes(entrada){
    let buscarPorTitulo = []
    buscarPorTitulo = data.filter(item => item.titulo.toLowerCase().includes(entrada.toLowerCase()))

    let buscarPorGenero = []
    for (let filme of data) {
      if (typeof(filme.genero) == "string") {
      buscarPorGenero = data.filter(item => item.genero.includes(entrada.toLowerCase())) 
    
      if (typeof(entrada) == "string") {
        if(buscarPorTitulo.length > 0 && buscarPorGenero.length > 0) {
            console.log("--------Encontrados por título--------")
            console.log(buscarPorTitulo)
            console.log("--------Encontrados por gênero--------")
            console.log(buscarPorGenero)
            console.log("--------------------------------------")
        } else if (buscarPorTitulo.length > 0) {
            console.log("--------Encontrados por título--------")
            console.log(buscarPorTitulo)
            console.log("--------------------------------------")
        } else if (buscarPorGenero.length > 0) {
            console.log("--------Encontrados por gênero--------")
            console.log(buscarPorGenero)
            console.log("--------------------------------------")
        } else {
            console.log("Nenhum filme ou dado foi encontrado com o valor digitado")
        }    
    } else {
        console.log('dado inválido')
    }

      }
    }
  }


    buscarFilmes(cliente1)
    buscarFilmes(cliente2)
    buscarFilmes(cliente3)
    buscarFilmes(cliente4)
    buscarFilmes(cliente5)
/* 
function buscarPorTitulo(nome){
  let buscarPorTitulo = []
  buscarPorTitulo = data.find(item => item.titulo.toLowerCase().includes(nome.toLowerCase())) 
      
  return buscarPorTitulo
}

function buscarPorGenero(busca) {
  let buscarPorGenero = []
  buscarPorGenero = data.filter(item => item.genero.includes(busca.toLowerCase())) 
  return buscarPorGenero
}

console.log(buscarPorGenero(cliente4))

function buscarFilmes(entrada) {
  if (typeof(entrada) == "string") {
  let listaTitulo = buscarPorTitulo(entrada)
  let listaGenero = buscarPorGenero(entrada)
  if(listaTitulo.length > 0 && listaGenero.length > 0) {
    console.log("--------Encontrados por título--------")
    console.log(listaTitulo)
    console.log("--------------------------------------")
    console.log(listaGenero)
    console.log("--------Encontrados por gênero--------")
  } else if (listaTitulo.length > 0) {
    console.log("--------------------------------------")
    console.log(listaTitulo)
    console.log("--------Encontrados por título--------")
  } else if (listaGenero.length > 0) {
    console.log("--------------------------------------")
    console.log(listaGenero)
    console.log("--------Encontrados por gênero--------")
  } else {
    console.log("Nenhum filme ou dado foi encontrado com o valor digitado")
    console.log("--------------------------------------")
  } 
} else {
  console.log('dado inválido')
}
} 


buscarFilmes(cliente1) */


 /*  let buscarTitulo = data.filter(item => item.genero.includes(busca.toLowerCase())) 
  return buscarTitulo
} */ //não consegui desenvolver essa função para busca em array e não consegui reproduzir a identificação de se string ou array. Não consegui compreender a lógica pra resolver o problema

 