
// const nome = "Frango a milanesa"
// const preco = 20.90
// const categoria = "Principal"
// const vegetariano = false
// const ingredientes = ["filé de frango empanado", "arroz branco", "feijão carioca", "legumes do dia"]

// const nome1 = "Beringela parmegiana"
// const preco1 = 22.90
// const categoria1 = "Principal"
// const vegetariano1 = true
// const ingredientes1 = ["beringela", "molho de tomate", "queijo muçarela", "arroz integral", "batata doce"]

// const nome2 = "Frango ao molho mostarda"
// const preco2 = 21.90
// const categoria2 = "Principal"
// const vegetariano2 = false
// const ingredientes2 = ["filé de frango", "molho mostarda", "arroz branco", "batata palha"]

// const nome3 = "Linguiça toscana grelhada"
// const preco3 = 19.90
// const categoria3 = "Principal"
// const vegetariano3 = false
// const ingredientes3 = ["linguiça toscana", "arroz branco", "feijão carioca", "farofa"]

// const media = ((preco + preco1 + preco2 + preco3) / 4)
// console.log(media)

// const verificaVegetariano = vegetariano && vegetariano1 && vegetariano2 && vegetariano3
// console.log(verificaVegetariano)

const prato1 = {
    nome: "Frango a milanesa",
    preco: 20.90,
    categoria: "Principal",
    vegetariano: false,
    ingredientes: "filé de frango empanado,arroz branco,feijão carioca,legumes do dia"
}

const prato2 = {
    nome: "Beringela parmegiana",
    preco: 22.90,
    categoria: "Principal",
    vegetariano: true,
    ingredientes: "beringela, molho de tomate, queijo muçarela, arroz integral, batata doce"
}

const prato3 = {
    nome: "Frango ao molho mostarda",
    preco: 21.90,
    categoria: "Principal",
    vegetariano: false,
    ingredientes: "filé de frango, molho mostarda, arroz branco, batata palha"
}

const prato4 = {
    nome: "Linguiça toscana grelhada",
    preco: 19.90,
    categoria: "Principal",
    vegetariano: false,
    ingredientes: "linguiça toscana, arroz branco, feijão carioca, farofa"
}

const pratos = []

const objctecsArray = (prato) => {
    pratos.push(prato)
}

objctecsArray(prato1)
objctecsArray(prato2)
objctecsArray(prato3)
objctecsArray(prato4)

console.log(pratos)

for(prato of pratos){
    for(propriedade in prato){
        console.log(`${propriedade}:${prato[propriedade]}`)
    }
    console.log(`\n`)
}

const printPrato = (pratos) => {
    for(prato of pratos) {
        console.log(`Nome:${prato.nome}, Preço:${prato.preco}, Categoria: ${prato.categoria}, Vegetariano: ${prato.vegetariano}, Ingredientes: ${prato.ingredientes}.`)
    }
    
}

printPrato(pratos)

const busca = (pratos, string) => {
    const resultado = pratos.filter((objeto)=>{
        return objeto.nome === string || objeto.preco === string || objeto.categoria === string || objeto.vegetariano === string || objeto.ingredientes === string
    })
    if (resultado.length > 0){
        console.log(resultado)
    }else{
        alert ("nenhum item encontrado")
    }
}

busca(pratos, true)


// const veggie = []

// function isVeggie(prato) {
//     if(prato.vegetariano === true){
//         veggie.push(prato)
//         console.log(veggie)
//     }else {
//         console.log(`O prato ${prato.nome} não é vegetariano!`)
//     }
// }

// isVeggie(prato1)
// isVeggie(prato2)
// isVeggie(prato3)
// isVeggie(prato4)

// console.log(prato1)
// console.log(prato2)
// console.log(prato3)
// console.log(prato4)

const input = document.getElementById("input")

input.addEventListener("input", (e) => {
    let informacao = e.target.value;
    let filterPratos = pratos.filter((prato) => {
        return prato.nome.toLowercase().includes(informacao);
    })
});