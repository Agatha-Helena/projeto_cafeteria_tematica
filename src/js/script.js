class Prato{
    constructor(nome, preco, categoria){ //modelo do objeto
        this.nome = nome //o this aponta e traz a info
        this.preco = preco
        this.categoria = categoria
    }

    formatarPreco(){ //verbo, acao que vai executar
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }

    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual / 100)
    }
} //fim da classe

//instanciando objetos
const cardapio = [ //lista
    new Prato('Feijoada completa', 42.90, 'Prato Principal'),
    new Prato('Moqueca de Peixe', 58.00, 'Prato Principal'),
    new Prato('Coxinha Artesanal', 8.50, 'Petisco'),
    new Prato('Brigadeiro Gourmet', 6.00, 'Sobremesa'),
    new Prato('Morango do Amor (Pistache)', 15.00, 'Sobremesa')
]

console.log('=== Pratos ===') //mostra na tela
cardapio.forEach(p => { //vai passar por cada item da lista
    console.log(`${p.nome} → ${p.formatarPreco()}`) //mostra os itens da lista na tela
})

const containerCardapio = document.querySelector('#cardapio')

function criarCardPrato(prato){
    const card = document.createElement('div')
    card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm' //cria o nome da classe

    card.innerHTML = 
    `
    <h3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class='categoria fs-6 d-block mb-3'>${prato.categoria}</span>
    <div class='preco fs-5 fw-bold text-success'>${prato.formatarPreco()}</div>
    `


    card.addEventListener('click', () => {
        alert( //\n é quebra de linha
            `
            🍽️ ${prato.nome} \n
            📓 Categoria: ${prato.categoria}
            💰 Preço: ${prato.formatarPreco()}
            `
        )
    })

    return card
} //fim da função criar Card Prato

function renderizarCardapio(){
    containerCardapio.innerHTML = ''

    cardapio.forEach(prato => {
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)
    })
} //fim da função renderizarCardápio

renderizarCardapio()

cardapio[0].aplicarDesconto(20)
renderizarCardapio()