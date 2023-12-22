<h1 align="center"> 🛡️⚔️ Trybesmith 🛡️⚔️ </h1>

<br>

<h3 align="center">
O Trybesmith é uma aplicação backend no formato de uma API, voltada para uma loja de itens medievais, onde o usuário deverá logar para listar e adicionar ordens/produtos.<br/>
</h3>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- Docker
- Node
- TypeScript
- MySQL
- Sequelize
- JWT (Json Web Token)
- Bcryptjs
- Arquitetura de Software (MSC)
- Chai & Sinon

<br>

## 📑 Estrutura de pastas
<p>O projeto segue a seguinte estrutura de pastas:</p>
<ul>
  <li><strong>src:</strong> Código fonte da aplicação.</li>
  <li><strong>src/database:</strong> Database do Sequelize referente à criação e população do banco de dados.</li>
  <li><strong>src/routers:</strong> Todas as rotas da aplicação seguindo a arquitetura model, service e controller (MSC).</li>
  <li><strong>src/types:</strong> Todas as tipagens usadas na aplicação.</li>
  <li><strong>src/utils:</strong> Todas as funções utilitárias para o funcionamento da aplicação.</li>
  <li><strong>tests:</strong> Testes automatizados.</li>
</ul>

<br>

## ⚙️ Como Usar

### Instalação

1. Clone o repositório:

```
git@github.com:davidcunhadev/Trybesmith.git
```

2. Vá para a pasta do projeto:

```
cd Trybesmith
```

3. Instale as dependências do projeto:
```
npm install
```

4. Suba os containers do projeto com o comando:
```
docker-compose up -d --build
```

5. Para criar e popular o banco de dados rode o comando:
```
npm run db:reset
```

6. Com isso a aplicação já estará no ar no <a href="http://localhost:3001/" target="_blank"> localhost:3001 </a>.

<br>

## 🔀 Rotas da Aplicação

<ul>
  
<li><h3>GET <code>/products</code></h3></li>
<p>Esta rota retorna a lista de todos os produtos cadastrados no banco de dados.</p>

<h4>Parâmetros</h4>
<ul>
  <li> Nenhum parâmetro necessário.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/products</code>

    // Sem conteúdo no corpo da requisição

<h3>Exemplo de Resposta:</h3>

    [
      {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "orderId": 1
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "orderId": 1
      },
      {
        "id": 3,
        "name": "Lira de Orfeu",
        "price": "1 peça de ouro",
        "orderId": 2
      },
      {
        "id": 4,
        "name": "Armadura de Aquiles",
        "price": "1 peça de ouro",
        "orderId": 2
      },
      {
        "id": 5,
        "name": "Harpa de Dagda",
        "price": "15 peças de ouro",
        "orderId": 3
      }
    ]

<br>

<li><h3>POST <code>/products</code></h3></li>
<p>Esta rota possibilita o cadastro de um novo produto no banco de dados.</p>

<h4>Parâmetros</h4>
<ul>
  <li> "name": Nome do produto.</li>
  <li> "price": Preço do produto.</li>
  <li> "orderId": ID da ordem do pedido.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>POST</code> <code>/products</code>

    {
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 3
    }

<h3>Exemplo de Resposta:</h3>

    { 
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 3
    }

<br>

<li><h3>GET <code>/orders</code></h3></li>
<p>Esta rota retorna a lista de todas as ordens de pedidos cadastrados no banco de dados.</p>

<h4>Parâmetros</h4>
<ul>
  <li> Nenhum parâmetro necessário.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/orders</code>

    // Sem conteúdo no corpo da requisição

<h3>Exemplo de Resposta:</h3>

    [
      {
        "id": 1,
        "userId": 1,
        "productIds": [
          1,
          2
        ]
      },
      {
        "id": 2,
        "userId": 3,
        "productIds": [
          3,
          4
        ]
      },
      {
        "id": 3,
        "userId": 2,
        "productIds": [
          5
        ]
      }
    ]

<br>

<li><h3>POST <code>/login</code></h3></li>

<p>Esta rota possibilita o login de um usuário.</p>

<h4>Parâmetros</h4>
<ul>
  <li> "username": Nome do usuário</li>
  <li> "password": Senha do usuário.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>POST</code> <code>/login</code>

    {
      "username": "Eddie",
      "password": "sortudo"
    }

<h3>Exemplo de Resposta:</h3>

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJFZGRpZSIsImlhdCI6MTcwMzI1MzExMH0.0W-3egrBojngWobS0P2mLF1xkbVCPGueeAKQ4Hf55sk"
    }

</ul>

<br>

## 📫 Contato

Sinta-se livre para dar feedbacks, entrar em contato comigo e se conectar para novas ideias quando quiser!  

<a href="mailto:contatodavidcunha@hotmail.com">
<img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"></a>
</a>

<a target='_blank' href="https://www.linkedin.com/in/davidlcunha/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
