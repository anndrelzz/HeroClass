🎮 Desafio Classificador de Nível de Herói
🎯 Objetivo
Este projeto web simples foi desenvolvido como parte de um desafio de lógica de programação. Seu propósito é classificar o nível de um herói com base em sua quantidade de experiência (XP), além de permitir a inserção de um nickname e a escolha de uma classe, com descrições detalhadas para cada uma.

✨ Funcionalidades
Definição de Nickname: Permite que o usuário insira um nome para seu herói.
Seleção de Classe: O usuário pode escolher entre diferentes classes de heróis (Mago, Bruxo, Guerreiro, Bárbaro, Monge), e visualizar uma descrição única para cada uma.
Classificação de Nível por XP: O usuário insere o total de experiência (XP) do herói, e o sistema o classifica automaticamente em um dos seguintes níveis:
Ferro: XP menor ou igual a 1.000
Bronze: XP entre 1.001 e 2.000
Prata: XP entre 2.001 e 5.000
Ouro: XP entre 5.001 e 7.000
Platina: XP entre 7.001 e 8.000
Ascendente: XP entre 8.001 e 9.000
Imortal: XP entre 9.001 e 10.000
Radiante: XP maior ou igual a 10.001
🚀 Como Rodar o Projeto
Para executar este projeto em seu ambiente local, siga os passos abaixo:

Baixe os arquivos:

index.html
hero.js
style.css
Abra o arquivo index.html:
Você tem duas opções para abrir o projeto:

Opção 1 (Simples): Navegue até a pasta do projeto em seu computador e dê um clique duplo no arquivo index.html. Ele será aberto automaticamente em seu navegador padrão.

Opção 2 (Recomendado para desenvolvimento): Se você usa o VS Code, pode instalar a extensão Live Server. Com ela instalada, clique com o botão direito do mouse no arquivo index.html e selecione "Open with Live Server". Isso abrirá o projeto em seu navegador e o recarregará automaticamente a cada alteração que você salvar nos arquivos.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura fundamental da página web.
CSS3: Estilização básica para um layout agradável.
JavaScript (ES6+): Lógica principal para interatividade, manipulação do DOM e classificação de níveis.
📋 Como Usar
Nickname: Digite o nome do seu herói no campo "Digite seu nickname:" e clique no botão "Enviar". A mensagem de boas-vindas aparecerá logo abaixo.
Classe: Selecione uma das opções de classe (Mago, Bruxo, Guerreiro, Bárbaro, Monge) e clique no botão "Enviar" abaixo da lista de classes. A descrição da classe selecionada será exibida.
XP: Insira o valor total de XP do seu herói no campo "Digite seu XP total:" e clique no botão "Enviar" associado. A mensagem indicando o nível do seu herói será exibida.
👨‍💻 Estrutura do Código
O projeto é dividido em três arquivos principais:

index.html: Contém a estrutura da página, os campos de entrada (nickname, classes, XP) e os botões.
style.css: Responsável pela aparência visual da página.
hero.js: Contém a lógica JavaScript para:
receberNickname(): Pega o nickname digitado e o exibe.
receberClasse(): Identifica a classe de herói selecionada via radio button e mostra sua descrição correspondente usando um switch case.
receberXp(): Pega o valor do XP digitado, converte-o para um número e utiliza um switch (true) para classificar o nível do herói conforme as regras de XP definidas. Inclui validação para garantir que o XP seja um número válido e positivo.
