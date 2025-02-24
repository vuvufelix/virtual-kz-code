const users = [
    {
        nome: 'vuvu félix miguel joão',
        id: 1,
        produto: 'Ombreira térmica',
        preco: 15000,
        descricao() {
            return 'Ombreira termica para ajudar na cura de lezões no corpo';
        },
        valor: 10000,
        estrela: true,
    },
    {
        nome: 'nzuzi teresa',
        id: 2,
        produto: 'Tijela elétrica',
        preco: 10500,
        descricao() {
            return 'Tijela para aquecer a comida em qualquer sítio';
        },
        valor: 6000,
        estrela: false,
    },
    {
        nome: 'dina feliciana',
        id: 3,
        produto: 'Corretor de postura',
        preco: 11000,
        descricao() {
            return 'Ajuda na correção do corpo';
        },
        valor: 5000,
        estrela: true,
    },
    {
        nome: 'elizabeth miguel',
        id: 4,
        produto: 'Adesivo emagrecedor',
        preco: 8000,
        descricao() {
            return 'Ajuda no emagecimeno da barriga';
        },
        valor: 5500,
        estrela: false,
    },
    {
        nome: 'distinto joão',
        id: 5,
        produto: 'Saco de carvão',
        preco: 7500,
        descricao() {
            return 'Para cuzinhar esquentar';
        },
        valor: 4000,
        estrela: false,
    },
];

let containerDosProdutos = [];

function publicarProduto(dados, bancoDeDados) {
    const usuario = bancoDeDados.find((user) => user.id === dados.id);

    if (!usuario || !dados.id) {
        return console.log('Usuário não encontrado.');
    }

    if (!dados.produto) {
        return console.log('Adicione um produto para publicar!');
    }

    if (dados.valor < 5000) {
        return console.log('Valor de publicação insuficiente!');
    }

    if (!dados.preco) {
        return console.log('Adicione o preço do seu produto!');
    }

    if (!dados.descricao) {
        return console.log('Adicione a descrição do seu produto!');
    }

    const configLanguage = 'pt-br';
    const configTime = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const horaDaPublicacao = new Date().toLocaleDateString(configLanguage, configTime);

    const produto = {
        ...dados,
        horaDaPublicacao,
    };

    if (dados.estrela) {
        containerDosProdutos.unshift(produto); // Adiciona no início
    } else {
        containerDosProdutos.push(produto); // Adiciona no final
    }
}

publicarProduto(users[0], users);
publicarProduto(users[1], users);
publicarProduto(users[2], users);
publicarProduto(users[3], users);
publicarProduto(users[4], users);

console.log(containerDosProdutos);