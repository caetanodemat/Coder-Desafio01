class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase()
        this.preco = preco
        this.vendido = false

    }
    somarIcms()
    {
        let icms = parseFloat(prompt("Digite o valor do icms"))
        this.preco = this.preco * icms
    }
    vender() {
        let compra = prompt("Comfirmar compra? Sim ou Nao?")
        this.vendido = compra
    }
}

const produto1 = new Produto("Celular", 1000)
const produto2 = new Produto("Tv", 2500)
const produto3 = new Produto("Videogame", 3500)
const produto4 = new Produto("Estante", 1300)
produto1.somarIcms()
produto2.somarIcms()
produto3.somarIcms()
produto4.somarIcms()
produto1.vender()
produto2.vender()
produto3.vender()
produto4.vender()
console.log(produto1)
console.log(produto2)
console.log(produto3)
console.log(produto4)