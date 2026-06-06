const textos_lang = {
  "pt": {
    termos: {
      "misterio": "<i class='fa-solid fa-book-bible'></i>",
      "cruz": "<i class='fa-solid fa-cross'></i>",
      "conta grande": "<i class='fa-solid fa-circle-dot'></i>",
      "conta pequena": "<i class='fa-solid fa-circle'></i>",
      "conta inicial": "<i class='fa-solid fa-hands-praying'></i>",
      "medalha": "<i class='fa-solid fa-award'></i>"
    },

    oracoes: {
      "avisos": {
        titulo: "Avisos",
        conteudo: 
`  Conteúdos opcionais possuem aviso e/ou a indicação por meio dos símbolos "< >".
Sempre verifique se há mais texto ou conteúdo não visível, arrastando para cima na tela.
Você pode iniciar a canção "Ave Maria" apertando o ícone de música na barra inferior do site.
  É possível trocar o mistério clicando em algum dos ícones da barra inferior. Use os ícones de seta para passar para a proxima conta do terço.
  Atenção, em celulares ou dispositivos de menor largura, a barra inferior pode não ser completamente visível.
  Se for o caso, arraste a barra inferior para a direita, verifique se o site nao está ampliado ou com zoom caso a barra não apareça.
  Qualquer dúvida ou sugestão entre em contato. Ao terminar o terço, deixei os créditos e as fontes daonde obti algum conteúdo.`},
      "referencias": {
        titulo: "Referências",
        conteudo:
`Texto dos Mistérios obtidos de: The Hole See (www.vatican.va)

https://www.vatican.va/special/rosary/documents/misteri_gloriosi_po.html
https://www.vatican.va/special/rosary/documents/misteri_dolorosi_po.html
https://www.vatican.va/special/rosary/documents/misteri_gaudiosi_po.html
https://www.vatican.va/special/rosary/documents/misteri_luminosi_po.html

textos obtidos (ou instruidos) também de:
https://salvaimerainha.org.br/como-oferecer-o-terco/
https://santuario.cancaonova.com/sem-categoria/santo-terco/

música "Ave Maria" de:
https://www.youtube.com/watch?v=2H5rusicEnc`},

      "sinal da cruz": {
        titulo: "Sinal da Cruz",
        conteudo: 
`Antes de iniciar o terço, faça o Sinal da Cruz, traçando uma cruz sobre si mesmo (da testa ao peito e de um ombro ao outro), enquanto reza:
"Em nome do Pai, do Filho e do Espírito Santo. Amém."`},

      "oferecimento do terco": {
        titulo: "Oferta do terço (opcional)",
        conteudo: 
`Você pode oferecer o terço a Deus, apresentando suas intenções.
Se desejar, reze:
“Divino Jesus,
nós Vos oferecemos este terço que vamos rezar,
meditando nos mistérios da Vossa Redenção.
Concedei-nos, por intercessão da Virgem Maria,
Mãe de Deus e nossa Mãe,
as virtudes que nos são necessárias para bem rezá-lo
e a graça de ganharmos as indulgências
desta santa devoção.”
Ou faça sua própria intenção, com suas palavras.`},

      "pai nosso": {
        titulo: "Pai Nosso",
        conteudo:
`Pai nosso que estais nos céus,
santificado seja o vosso nome,
venha a nós o vosso reino,
seja feita a vossa vontade,
assim na terra como no céu.
O pão nosso de cada dia nos dai hoje,
perdoai-nos as nossas ofensas,
assim como nós perdoamos a quem nos tem ofendido,
e não nos deixeis cair em tentação,
mas livrai-nos do mal.
<Pois Vosso é o reino, o poder e a glória,
agora e para sempre.>
Amém.`},

      "ave maria": {
        titulo: "Ave Maria",
        conteudo:
`Ave Maria, cheia de graça,
o Senhor é convosco;
bendita sois vós entre as mulheres,
e bendito é o fruto de vosso ventre, Jesus.
Santa Maria, mãe de Deus,
rogai por nós pecadores,
agora e na hora da nossa morte.
Amém.`},

      "credo": {
        titulo: "Credo",
        conteudo:
`Creio em Deus Pai todo-poderoso, 
criador do céu e da terra;
e em Jesus Cristo, 
seu único Filho, nosso Senhor,
que foi concebido pelo poder do Espírito Santo,
nasceu da Virgem Maria;
padeceu sob Pôncio Pilatos;
foi crucificado, morto e sepultado;
desceu à mansão dos mortos;
ressuscitou ao terceiro dia;
subiu aos céus;
está sentado à direita de Deus Pai todo-poderoso,
de onde há de vir a julgar os vivos e os mortos.
Creio no Espírito Santo,
na Santa Igreja Católica,
na comunhão dos santos,
na remissão dos pecados,
na ressurreição da carne,
na vida eterna.
Amém.`},

      "salve rainha": {
        titulo: "Salve Rainha",
        conteudo:
`Salve Rainha, Mãe de misericórdia,
vida, doçura, esperança nossa, salve.
A vós bradamos os degradados filhos de Eva;
a vós suspiramos,
gemendo e chorando neste vale de lágrimas.
Eia pois advogada nossa,
esses vossos olhos misericordiosos a nós volvei.
E depois deste desterro, mostrai-nos Jesus,
bendito fruto de vosso ventre.
Ó clemente, ó piedosa,
ó doce e sempre Virgem Maria.
Rogai por nós Santa Mãe de Deus para que
sejamos dignos das promessas de Cristo.
Amém.`},

      "gloria ao pai":{ 
        titulo: "Glória ao Pai",
        conteudo:
`Glória ao Pai, ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre
<e por todos os séculos dos séculos>.
Amém.`},

      "jaculatoria de fatima": { 
        titulo: "Jaculatória de Fátima (opcional)",
        conteudo:
`Ó meu Jesus, perdoai-nos,
livrai-nos do fogo do inferno,
levai as almas todas para o céu e
socorrei principalmente as que mais precisarem.
Amém.
    `},

      "misterios": {
        "gozosos": {
          1: {
            "titulo": "A anunciação do Anjo à Virgem Maria.",
            "conteudo": "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria (Lc 1, 26-27)."
          },
          2: {
            "titulo": "A visita de Maria à Santa Isabel.",
            "conteudo": 'Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre"» (Lc 1, 39-42).'
          },
          3: {
            "titulo": "O nascimento de Jesus em Belém.",
            "conteudo": "Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria.  Todos iam alistar-se, cada um na sua cidade. Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi,  para se alistar com a sua esposa Maria, que estava grávida.  Estando eles ali, completaram-se os dias dela. E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria (Lc 2,1-7)."
          },
          4: {
            "titulo": "A apresentação de Jesus no Templo.",
            "conteudo": "Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos. (Lc 2, 21-24)."
          },
          5: {
            "titulo": "A perda e encontro de Jesus no Templo.",
            "conteudo": "Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem... Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas (Lc 2, 41-47)."
          }
        },
        "luminosos": {
          1: {
            "titulo": "O baptismo de Jesus no Jordão.",
            "conteudo": 'Depois que Jesus foi batizado, saiu logo da água. Eis que os céus se abriram e viu descer sobre ele, em forma de pomba, o Espírito de Deus. E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição" (Mt 3,16-17).'
          },
          2: {
            "titulo": "A auto-revelação de Jesus nas bodas de Caná.",
            "conteudo": 'Três dias depois, celebravam-se bodas em Caná da Galiléia, e achava-se ali a mãe de Jesus. Também foram convidados Jesus e os seus discípulos. Como viesse a faltar vinho, a mãe de Jesus disse-lhe: "Eles já não têm vinho". Respondeu-lhe Jesus: "Mulher, isso compete a nós? Minha hora ainda não chegou". Disse, então, sua mãe aos serventes: "Fazei o que ele vos disser". (Jo 2, 1-5).'
          },
          3: {
            "titulo": "O anúncio do Reino e o convite à conversão.",
            "conteudo": "Completou-se o tempo e o Reino de Deus está próximo; fazei penitência e crede no Evangelho. (Mc 1, 15)."
          },
          4: {
            "titulo": "A transfiguração de Jesus no Tabor.",
            "conteudo": "Seis dias depois, Jesus tomou consigo Pedro, Tiago e João, seu irmão, e conduziu-os à parte a uma alta montanha.Lá se transfigurou na presença deles: seu rosto brilhou como o sol, suas vestes tornaram-se resplandecentes de brancura (Mt 17, 1-2)."
          },
          5: {
            "titulo": "A instituição da Eucaristia.",
            "conteudo": 'Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: "Tomai e comei, isto é meu corpo" (Mt 26, 26).'
          }
        },
        "dolorosos": {
          1: {
            "titulo": "Agonia de Jesus no Horto das Oliveiras.",
            "conteudo": 'Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: "Minha alma está triste até a morte. Ficai aqui e vigiai comigo". Adiantou-se um pouco e, prostrando-se com a face por terra, assim rezou: "Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres" (Mt 26, 36-39).'
          },
          2: {
            "titulo": "Flagelação de Jesus, preso à coluna.",
            "conteudo": "Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado (Mt 27,26)."
          },
          3: {
            "titulo": "Coroação de espinhos.",
            "conteudo": 'Os soldados do governador conduziram Jesus para o pretório e rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e colocaram-lhe um manto escarlate. Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara. Dobrando os joelhos diante dele, diziam com escárnio: "Salve, rei dos judeus!" (Mt 27, 27-29).'
          },
          4: {
            "titulo": "Jesus carrega a cruz a caminho do Calvário.",
            "conteudo": "Passava por ali certo homem de Cirene, chamado Simão, que vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a que lhe levasse a cruz. Conduziram Jesus ao lugar chamado Gólgota, que quer dizer lugar do crânio (Mc 15, 21-22)."
          },
          5: {
            "titulo": "Jesus é crucificado e morre na cruz.",
            "conteudo": 'Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita e outro à esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o que fazem"... Era quase à hora sexta e em toda a terra houve trevas até a hora nona. Escureceu-se o sol e o véu do templo rasgou-se pelo meio. Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso, expirou (Lc  23, 33-46).'
          }
        },
        "gloriosos": {
          1: {
            "titulo": "A ressurreição de Jesus.",
            "conteudo": 'No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou" (Lc 24, 1-6).'
          },
          2: {
            "titulo": "A ascensão de Jesus ao céu.",
            "conteudo": "Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus (Mc 16, 19)."
          },
          3: {
            "titulo": "A descida do Espírito Santo.",
            "conteudo": "Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceu-lhes então uma espécie de línguas de fogo que se repartiram e pousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em línguas, conforme o Espírito Santo lhes concedia que falassem (At 2, 1-4)."
          },
          4: {
            "titulo": "A assunção da Santíssima Virgem ao céu.",
            "conteudo": "Por isto, desde agora, me proclamarão bem-aventurada todas as gerações, porque realizou em mim maravilhas aquele que é poderoso e cujo nome é Santo (Lc 1, 48-49)."
          },
          5: {
            "titulo": "A coroação de Nossa Senhora, como Rainha do céu e da terra.",
            "conteudo": "Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas (Ap 12, 1)."
          }
        }
      }
    }
  }
}


let misterioLabel = document.getElementById("misterio-label");
let misterioNome = document.getElementById("misterio-nome");
let misterioTituloLabel = document.getElementById("misterio-titulo-label");
let contaLabel = document.getElementById("conta-label");
let oracoesContainer = document.getElementById("oracoes-container");
let pauseButton = document.getElementById("play-pause");
let pauseIcon = document.getElementById("pause-icon");
let music = new Audio('res/Schubert - Ave Maria.mp3');

let pecasTerco = document.getElementById("terco-track").children;
atualIndex = 0;
let tipoMisterio = "gozosos";
let lang = "pt";

function trocarMisterio(nomeMisterio) {
  tipoMisterio = nomeMisterio;
  misterioNome.textContent = "Mistério " + nomeMisterio;
  escreverTextoPecaAtual();
}

function escreverTextoPecaAtual() {
  let numMisterio, pos;
  let textos;
  if(atualIndex <= 4) {
    numMisterio = 0;
    pos = atualIndex;
    if(atualIndex == 0) textos = [{titulo: "avisos"}, {titulo: "sinal da cruz"}, {titulo: "oferecimento do terco"}, {titulo: "credo"}];
    else if(atualIndex == 1) textos = [{titulo: "pai nosso"}];
    else if(atualIndex < 4) textos = [{titulo: "ave maria"}];
    else if(atualIndex == 4) textos = [{titulo: "ave maria"}, {titulo: "gloria ao pai"}]
  } else {
    numMisterio = Math.floor( (atualIndex - 5) / 11) + 1;
    pos = (atualIndex - 5) % 11;
    if (atualIndex == pecasTerco.length - 1) textos = [{titulo: "salve rainha"}, {titulo: "referencias"}];
    else if(pos == 0) textos = [{titulo: "misterio", tipo: tipoMisterio, numero: numMisterio}, {titulo: "pai nosso"}];
    else if (pos < 10) textos = [{titulo: "ave maria"}];
    else textos = [{titulo: "ave maria"}, {titulo: "gloria ao pai"}, {titulo: "jaculatoria de fatima"}];
  }

  oracoesContainer.innerHTML = "";

  textos.forEach(e => {
    let tituloOracao, conteudoOracao;
    if(e.titulo == "misterio") {
      tituloOracao = textos_lang[lang].oracoes.misterios[e.tipo][e.numero].titulo;
      conteudoOracao = textos_lang[lang].oracoes.misterios[e.tipo][e.numero].conteudo;
    } else {
      tituloOracao = textos_lang[lang].oracoes[e.titulo].titulo;
      conteudoOracao = textos_lang[lang].oracoes[e.titulo].conteudo;
    }

    const novaOracao = document.createElement("div");
    const novaOracaoTitulo = document.createElement("h2");
    const novaOracaoConteudo = document.createElement("pre");
    novaOracaoTitulo.textContent = tituloOracao;
    novaOracaoConteudo.textContent = conteudoOracao;

    novaOracao.classList.toggle("oracao-block")

    novaOracao.append(novaOracaoTitulo, novaOracaoConteudo);
    oracoesContainer.appendChild(novaOracao);

    document.getElementById("oracoes-container").scrollTop = 0;
  });

  oracoesContainer.classList.add('fade-in');
  setTimeout(() => {
    oracoesContainer.classList.remove('fade-in');
  }, 300);

  // misterioLabel
  if(numMisterio == 0 || atualIndex == pecasTerco.length - 1) {
    misterioLabel.innerHTML = "";
    misterioTituloLabel.innerHTML = "";
  } else {
    misterioLabel.innerHTML = textos_lang[lang].termos["misterio"] + " " + numMisterio;
    misterioTituloLabel.innerHTML = textos_lang[lang].oracoes.misterios[tipoMisterio][numMisterio].titulo;
  }

  // contaLabel
  if(atualIndex == 0) contaLabel.innerHTML = textos_lang[lang].termos["cruz"];
  else if (atualIndex == pecasTerco.length - 1) contaLabel.innerHTML = textos_lang[lang].termos["medalha"];
  else if (atualIndex == 1) contaLabel.innerHTML = textos_lang[lang].termos["conta inicial"];
  else if (atualIndex < 5) contaLabel.innerHTML = textos_lang[lang].termos["conta pequena"] + " " + (pos - 1);
  else if (atualIndex == 5) contaLabel.innerHTML = textos_lang[lang].termos["conta grande"];
  else if (pos <= 10 && pos != 0) contaLabel.innerHTML = textos_lang[lang].termos["conta pequena"] + " " + (pos);
  else contaLabel.innerHTML = textos_lang[lang].termos["conta grande"];
  
  /*
  let fadeBottomDiv = document.createElement("div");
  fadeBottomDiv.id = "fade-bottom";
  oracoesContainer.appendChild(fadeBottomDiv);
  */
}

function centralizarPecaAtual() {
  let terco = document.querySelector('.terco');
  let pecaAtual = terco.firstElementChild.children[atualIndex].firstChild;
  terco.scrollTo({
    top: pecaAtual.offsetTop - terco.clientHeight/2 + pecaAtual.offsetHeight, behavior: "smooth"});

  escreverTextoPecaAtual();
}

function pecaSeguinte() {
  if (atualIndex < pecasTerco.length - 1) {
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
    atualIndex++;
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
  }
  centralizarPecaAtual();
}

function pecaAnterior() {
  if (atualIndex > 0) {
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
    atualIndex--;
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
  }
  centralizarPecaAtual();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark');
}

function pauseToggle() {
  if (music.paused) {
    music.play();
    pauseIcon.classList.replace('fa-music', 'fa-volume-xmark');
  } else {
    music.pause();
    pauseIcon.classList.replace('fa-volume-xmark', 'fa-music');
  }
}

function main() {
  music.loop = true;
  centralizarPecaAtual();
  trocarMisterio('gozosos');
}

main();
