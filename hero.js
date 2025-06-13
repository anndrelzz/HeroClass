// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

function receberNickname() {
    let nickname = document.getElementById("nickname").value
    let mensagem = `Seja bem-vindo, ${nickname}!`
    console.log(mensagem)
    document.getElementById("mensagem").textContent = mensagem;
}

function receberClasse() {
        // 1. Encontrar o input radio que está marcado (selecionado)
        //    'input[name="classe"]:checked' busca por um input com name="classe" que esteja :checked
        const selectedClassRadio = document.querySelector('input[name="classe"]:checked');
        const classMessageDisplay = document.getElementById('classmessage');
        let message = '';

        // 2. Verificar se algum rádio foi selecionado
        if (selectedClassRadio) {
            // Se sim, obtenha o valor desse rádio
            const selectedClassValue = selectedClassRadio.value;

            // 3. Usar o switch case com o valor obtido
            switch (selectedClassValue) {
                case 'Mago':
                    message = 'O Mago é o mais intrincado de todos os conjuradores, usuário de magia poderosa e ritualizada. Devido a isso são provavelmente os mais versáteis e poderosos de todos os conjuradores. Inteligente e repleto de recursos e poder, o Mago é uma excelente opção para um jogador que deseja um personagem repleto de sabedoria e conhecimentos ocultos, e que é capaz de destruir montanhas com algumas palavras.';
                    break;
                case 'Bruxo':
                    message = 'Bruxos são aqueles dispostos a fazerem pactos com entidades desconhecidas e muitas vezes malignas, tudo em troca de poder, que pode ser utilizada para salvar ou destruir vidas. Histórias de bruxos criando elos com corruptores são vastamente conhecidos. Porém, muitos bruxos servem patronos que não são abissais ou infernais.';
                    break;
                case 'Guerreiro':
                    message = 'O Guerreiro é o combatente quintessencial, repleto de recursos e poder para o combate, seja na forma qualquer que ele escolher. Enquanto muitas outras classes podem se favorecer de táticas especiais, o guerreiro favorece-se somente da tática marcial. Guerreiro é uma boa classe para quem quer fazer um excelente... bem... guerreiro, seja lá o que ele for, e preferir confiar em suas armas que em “truques”.';
                    break;
                case 'Barbaro':
                    message = 'Bárbaros, independente de quão diferentes sejam, são definidos por sua fúria: Inigualável, insuperável, invencível. Mais do que uma mera emoção, essa raiva é a ferocidade de um predador encurralado, a fúria insuperável da tempestade, a ira infinita do mar. Para cada bárbaro a fúria é um poder que não apenas rega seu frenesi de batalha, mas também seus reflexos, resiliência e feitos de força.'    
                    break;
                case 'Monge':
                    message = 'Monges são aqueles que nasceram com a dedicação e devoção nata, que treinam e desenvolvem a habilidade controlar a essência vital das criatura. Nem todos os monges são mártires e altruístas, existem monastérios malignos que treinam assassinos e monges sombrios. É dito que os mais dedicados dos monges podem meditar até atingirem um patamar onde suas consciências podem viajar para outros planos.';
                    break;
                default:
                    message = 'Classe desconhecida. Por favor, selecione uma classe válida.';
                    break;
            }
        } else {
            // Se nenhum rádio foi selecionado, exibe uma mensagem de aviso
            message = 'Por favor, selecione uma classe antes de enviar.';
        }

        // 4. Atualizar o parágrafo com a mensagem
        classMessageDisplay.textContent = message;
    }

function receberXp () {
    
    let heroLevel = document.getElementById("xp").value;
    let herolvlNumber = parseInt(heroLevel);
    const levelMessageDisplay = document.getElementById("levelmessage")

    let xpValue = herolvlNumber
    let lvlmessage = ''

    if (isNaN(herolvlNumber)){
        lvlmessage = "Digite um valor de XP valido."
    } else if (herolvlNumber < 0) {
        lvlmessage = "O valor de XP nao pode ser negativo."
    } else {
        switch(true) {

        case xpValue <= 1000:
        lvlmessage = 'Voce esta no ferro, continue evoluindo'
        break;

        case xpValue > 1000 && xpValue <= 2000:
        lvlmessage = 'Voce esta no bronze, continue lutando'
        break;

        case xpValue > 2000 && xpValue <= 5000:
        lvlmessage = 'Voce esta no Prata, continue explorando'
        break;

        case xpValue > 5000 && xpValue <= 7000:
        lvlmessage = 'Voce esta no ouro, continue lutando'
        break;

        case xpValue > 7000 && xpValue <= 8000:
        lvlmessage = 'Voce esta no Platina, Esta entre os melhores'
        break;

        case xpValue > 8000 && xpValue <= 9000:
        lvlmessage = 'Voce esta no Ascendente, esta se tornando uma lenda'
        break;
        case xpValue > 9000 && xpValue <= 10000:
        lvlmessage = 'Voce esta no Imortal, voce e quase um deus'
        break;

        case xpValue > 10000:
        lvlmessage = 'Voce esta no RADIANTE, voce se tornou um deus'
        break;
        }
    }
    levelMessageDisplay.textContent = lvlmessage;
    
}
