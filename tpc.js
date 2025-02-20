const users = [
    {
        nome: 'vuvu félix miguel joão',
        id: 1,
        produto: 'Ombreira térmica',
        preco: 15000,
        descricao() {
            return 'Ombreira termica para ajudar na cura de lezões no corpo'
        },
        valor: 10000,
        estrela: true
    },
    {
        nome: 'nzuzi teresa',
        id: 2,
        produto: 'Tijela elétrica',
        preco: 10500,
        descricao() {
            return 'Tijela para aquecer a comida em qualquer sítio'
        },
        valor: 6000,
        estrela: false
    },
    {
        nome: 'dina feliciana',
        id: 3,
        produto: 'Corretor de postura',
        preco: 11000,
        descricao() {
            return 'Ajuda na correção do corpo'
        },
        valor: 5000,
        estrela: true
    },
    {
        nome: 'elizabeth miguel',
        id: 4,
        produto: 'Adesivo emagrecedor',
        preco: 8000,
        descricao() {
            return 'Ajuda no emagecimeno da barriga'
        },
        valor: 5500,
        estrela: false
    },
    {
        nome: 'distinto joão',
        id: 5,
        produto: 'Saco de carvão',
        preco: 7500,
        descricao() {
            return 'Para cuzinhar esquentar'
        },
        valor: 4000,
        estrela: false
    },
]

let containerDosProdutos = [
    
] 

function buscarDadosNoBanco(user) {
    let value = []
    for (let data of user) {
        value.push(Object.values(data))
    }
    return value.map(element => {return element })
}

let verificacao = buscarDadosNoBanco(users).map(data => { return data })

function publicarProduto(dado, verificar) {

    if(dado.id in verificar) {
        while (!dado.produto || dado.valor < 5000 || !dado.preco || !dado.descricao) {
            console.log(`${dado.nome.toUpperCase()} algo deu errado! Dica: Verifique se existe um produto, preço, descrição ou se tens valor suficiente para esta publicação.`)
            break
        }
        const configLanguege = 'pt-br'
        const configTime = {
            hour: '2-digit',
            minute: '2-digit'
        }
        let hora = new Date()

        const formatarData = hora.toLocaleDateString(configLanguege, configTime)

        let container = Object.create({dado, formatarData})

        if(dado.estrela === true) {
            containerDosProdutos.splice(0, 0, container)
        } if(dado.estrela === false){
            containerDosProdutos.push(container)
        }

    } else {
        console.log('Você não está cadastrado na nossa aplicação. Porfavor cadastre - se!')
    }

}

buscarDadosNoBanco(users)
publicarProduto(users[4], verificacao)

console.log(containerDosProdutos)