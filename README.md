<h1 align="center"> Challenge-2-Squad-4: API Compacine</h1>

<p>Repositório destinado ao segundo desafio da trilha AWS Full-Stack (Node.js and React.js), que prevê a criação de uma Aplication Programming Interface (API) para a compra de ingressos de cinema.</p>

## :rocket: Tecnologias/Dependências Utilizadas
<ul>
    <li>Javascript</li>
    <li>Node.js</li>
    <li>Docker</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>Mongoose</li>
    <li>Dotenv</li>    
</ul>
<p>Orientamos a utilização da IDE VS Code.</p>

## :floppy_disk: Configurações do arquivo ".env"
<pre>
    <code>
        PORT = 3000
        MONGODB_URI = mongodb://root:example@localhost:27017    
    </code>
</pre>

## :memo: Como usar a aplicação
<ol>
    <li>Clone o repositório;</li>
    <li>Acesse a pasta pelo VS Code;</li>
    <li>Crie um arquivo ".env", na própria pasta do projeto (Chanllege-2-Squad-4) e insira as configurações discriminadas no item anterior;</li>
    <li>Abra o terminal do VS Code e instale as dependências necessárias, por meio do código abaixo:</li>
        <pre><code>
                npm install
            </code></pre>
    <li>Baixe o Docker desktop e abra;</li>
    <li>Abra o terminal no VS Code e digite os seguintes comandos:</li>
        <pre><code>docker-compose up -d</code></pre>
        <p>Pressione a tecla "Enter".</p>
        <pre><code>npm start</code></pre>
        <p>Pressione a tecla "Enter", novamente. No terminal deve aparecer a mensagem: "Server is running on port 3000" e "Connected to database"</p>
    <li>Use um testador de API de sua preferência, por exemplo Postman ou Insomia, para relizar o teste, colocando os seguintes dados:</li>
        <p>- Escolha "POST", para criar um novo filme;</p>
        <p>- Na barra de endereço, insira: http://localhost:3000/api/movie;</p>
        <p>- No "body", inclua as linhas abaixo: http://localhost:3000/api/movie;</p>
        <pre><code>
            {
                "name": "Eu, eu mesmo e Irene",
                "image": "https://pt.wikipedia.org/wiki/Me,Myself%26_Irene#/media/Ficheiro:Me_Myself_Irene.jpg",
                "description": "É um filme de comédia e humor ácido americano de 2000, dirigido pelos irmãos Bobby e Peter Farrelly.",
                "cast": ["Jim Carrey", "Renée Zellweger", "Anthony Anderson"],
                "genre": "Comédia"
            }
        </code></pre>
        <p>- Clicar em "send".</p>
    <li>Abra o seu navegador de internet e insira na barra de endereço o seguinte http://localhost:8081. Será aberta uma página Mongo Express;</li>
    <li>Basta clicar sobre o nome do arquivo criado durante o teste.</li>
</ol>

<h3>Autores do projeto</h3>
<ul>
<li>Joel Rodrigues Vieira;</li>
<li>Luan Henrique dos Santos Silva;</li>
<li>João Henrique Ferreira Constantino da Silva;</li>
<li>Érica Santos Oliveira da Silva;</li>
</ul>
