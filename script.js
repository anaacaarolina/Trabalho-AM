let window_counter = 0;
const sections = [
  "error_window_section",
  "homepage",
  "Alice_Oliveira",
  "Anibal_Simao",
  "Vitor_Coutinho",
  "Sobre_Nos",
  "Pagina_Conclusao",
];

const slides_alice = document.querySelectorAll(".slides_alice img");
const slides_anibal = document.querySelectorAll(".slides_anibal img");
const slides_vitor = document.querySelectorAll(".slides_vitor img");
//const legenda_slides_vitor = document.querySelectorAll(".slides_vitor p");

//const slides_label = document.querySelectorAll(".slides label");
//console.log(slides.length);
//console.log(slides_label.length);

let slide_alice_index = 0;
let slide_anibal_index = 0;
let slide_vitor_index = 0;
let interval_id = null;

//Criação da Caixa com Mensagem de Erro

function createWindow() {
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  //Definir as coordenadas da caixa
  function getRandomCoordinates(min, maxwidth, maxheight) {
    let x = Math.floor(Math.random() * (maxwidth - min + 1)) + min;
    let y = Math.floor(Math.random() * (maxheight - min + 1)) + min;
    return [x, y];
  }

  var quadradoGrandeDiv = document.createElement("div");
  quadradoGrandeDiv.setAttribute("class", "quadrado_grande");
  console.log("viewport: ", vw, vh);
  var coordinates = getRandomCoordinates(0, vw - 301, vh - 166);
  quadradoGrandeDiv.style.left = coordinates[0] + "px";
  quadradoGrandeDiv.style.top = coordinates[1] + "px";
  console.log("created window at ", coordinates[0], coordinates[1]);

  var retanguloAzulDiv = document.createElement("div");
  retanguloAzulDiv.setAttribute("class", "retangulo_azul");

  var mensagemErroP = document.createElement("p");
  mensagemErroP.setAttribute("class", "mensagem_erro");
  mensagemErroP.textContent = "Mensagem sistema";

  var botaoFecharImg = document.createElement("img");
  botaoFecharImg.setAttribute("class", "botao_fechar");
  botaoFecharImg.setAttribute("src", "assets/Imagens/botao_fechar.png");

  retanguloAzulDiv.appendChild(mensagemErroP);
  retanguloAzulDiv.appendChild(botaoFecharImg);

  var cruzETextoDiv = document.createElement("div");
  cruzETextoDiv.setAttribute("class", "cruz_e_texto");

  var cruzCirculoImg = document.createElement("img");
  cruzCirculoImg.setAttribute("src", "assets/Imagens/cruz.png");
  cruzCirculoImg.setAttribute("class", "cruz_circulo");

  var textoArmcheioP = document.createElement("p");
  textoArmcheioP.setAttribute("class", "texto_armcheio");
  textoArmcheioP.textContent = "Armazenamento Cheio";

  cruzETextoDiv.appendChild(cruzCirculoImg);
  cruzETextoDiv.appendChild(textoArmcheioP);

  var botaoDaCaixaDiv = document.createElement("div");
  botaoDaCaixaDiv.setAttribute("class", "botao_da_caixa");

  var botaoOKButton = document.createElement("button");
  botaoOKButton.setAttribute("class", "botao_ok");
  botaoOKButton.textContent = "OK";
  botaoOKButton.addEventListener("click", createWindow);

  botaoDaCaixaDiv.appendChild(botaoOKButton);

  quadradoGrandeDiv.appendChild(retanguloAzulDiv);
  quadradoGrandeDiv.appendChild(cruzETextoDiv);
  quadradoGrandeDiv.appendChild(botaoDaCaixaDiv);

  document
    .getElementById("error_window_section")
    .appendChild(quadradoGrandeDiv);

  window_counter++;

  play_audio("Som_erro.mp3");

  check_window_counter_threshold();
}

//Função que verifica e compara se o número de janelas ultrapassa o limite definido em baixo + criação da caixa de erro final.
function check_window_counter_threshold() {
  let auto_threshold = 2; //Limite de janelas até começar a criação automática //2
  let limit_threshold = 30; //Limite até criação da janela maior //30
  if (window_counter >= limit_threshold) {
    document.getElementById("quadrado_grande_maior").hidden = false;
    play_audio("Som_erro_95.mp3");
  } else if (window_counter >= auto_threshold) {
    setTimeout(createWindow, 8000 / (window_counter * 3)); //Função de aceleração do tempo entre criação de janelas
  }
}

//Esconde todas as secções. O "i" (iterador) vai variar entre 0 e sections.length-1 (o número de secções), neste caso 5???. Vai correr o que está dentro do loop o número, mas com cada elemento que está dentro do array "sections", um de cada vez. Em cada elemento, vai passar o elemento hidden para true, mesmo que a propriedade já seja true.
function hide_all_sections() {
  for (var i = 0; i < sections.length; i++) {
    document.getElementById(sections[i]).hidden = true;
  }
}

//Muda a propriedade hidden de true para false. Ou seja, mostra uma secção com base no seu Id, passado como argumento à função
function show_section(section_id) {
  document.getElementById(section_id).hidden = false;
}

//Recebe como argumento o nome de ficheiro, neste caso audio, viaja até ao diretório onde o ficheiro está (assets) e ativa-o.
function play_audio(filename) {
  let som = new Audio("assets/" + filename);
  som.play();
}

//A partir daqui, as funções começam a ser úteis.

//Mudar imagem das pastas da página inicial

document.addEventListener("DOMContentLoaded", function () {
  function abrirPasta(event) {
    var elementoPasta = event.target;
    if (elementoPasta.src.endsWith("assets/Imagens/pasta_fechada.png")) {
      elementoPasta.src = "assets/Imagens/pasta_aberta.png";
    }
  }

  function fecharPasta(event) {
    var elementoPasta = event.target;
    if (elementoPasta.src.endsWith("assets/Imagens/pasta_aberta.png")) {
      elementoPasta.src = "assets/Imagens/pasta_fechada.png";
    }
  }

  var elementosPastas = document.getElementsByClassName("pastas_fechadas");

  for (var i = 0; i < elementosPastas.length; i++) {
    elementosPastas[i].addEventListener("mouseover", abrirPasta);
    elementosPastas[i].addEventListener("mouseout", fecharPasta);
  }

  //Chamamento da função
  createWindow();
  começar_carrossel_alice();
  começar_carrossel_anibal();
  começar_carrossel_vitor();
});

//Ligações entre as páginas
document
  .getElementById("botao_ok_maior")
  .addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });

links_alice = document.getElementsByClassName("nav-link-alice");
for (var i = 0; i < links_alice.length; i++) {
  links_alice[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("Alice_Oliveira");
  });
}

links_anibal = document.getElementsByClassName("nav-link-anibal");
for (var i = 0; i < links_anibal.length; i++) {
  links_anibal[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("Anibal_Simao");
  });
}

links_vitor = document.getElementsByClassName("nav-link-vitor");
for (var i = 0; i < links_vitor.length; i++) {
  links_vitor[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("Vitor_Coutinho");
  });
}

links_conclusao = document.getElementsByClassName("nav-link-conclusao");
for (var i = 0; i < links_conclusao.length; i++) {
  links_conclusao[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("Pagina_Conclusao");
  });
}

links_sobre_nos = document.getElementsByClassName("texto_footer_sobre_nos");
for (var i = 0; i < links_sobre_nos.length; i++) {
  links_sobre_nos[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("Sobre_Nos");
  });
}

links_inicio = document.getElementsByClassName("texto_footer_inicio");
for (var i = 0; i < links_inicio.length; i++) {
  links_inicio[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });
}

links_logotipo = document.getElementsByClassName("logo");
for (var i = 0; i < links_logotipo.length; i++) {
  links_logotipo[i].addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });
}

document.getElementById("pasta_benfica").addEventListener("click", function () {
  hide_all_sections();
  show_section("Alice_Oliveira");
});

document.getElementById("pasta_elvis").addEventListener("click", function () {
  hide_all_sections();
  show_section("Anibal_Simao");
});

document.getElementById("pasta_beatles").addEventListener("click", function () {
  hide_all_sections();
  show_section("Vitor_Coutinho");
});

document
  .getElementById("pasta_aberta_alice")
  .addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });

document
  .getElementById("pasta_aberta_anibal")
  .addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });

document
  .getElementById("pasta_aberta_vitor")
  .addEventListener("click", function () {
    hide_all_sections();
    show_section("homepage");
  });

// Seguem-se as funções referentes aos carrosseis de imagens
//Primeiro o carrossel da Alice Oliveira
function começar_carrossel_alice() {
  if (slides_alice.length > 0) {
    slides_alice[slide_alice_index].classList.add("display_slide");
    // slides_label[slide_alice_index].classList.add("display_label");
    interval_id = setInterval(next_slide_alice, 20000);
  }
}

function show_slide_alice(index) {
  if (index >= slides_alice.length) {
    slide_alice_index = 0;
  } else if (index < 0) {
    slide_alice_index = slides_alice.length - 1;
  } else {
    slide_alice_index = index;
  }

  slides_alice.forEach(slide => {
    slide.classList.remove("display_slide");
    // slides_label.classList.remove("display_label");
  });

  slides_alice[slide_alice_index].classList.add("display_slide");
  // slides_label[slide_alice_index].classList.add("display_label");
}

function prev_slide_alice() {
  clearInterval(interval_id);
  slide_alice_index--;
  show_slide_alice(slide_alice_index);
}

function next_slide_alice() {
  clearInterval(interval_id);
  slide_alice_index++;
  show_slide_alice(slide_alice_index);
}

//Depois o carrossel do Anibal Simão
function começar_carrossel_anibal() {
  if (slides_anibal.length > 0) {
    slides_anibal[slide_anibal_index].classList.add("display_slide");
    // slides_label[slide_anibal_index].classList.add("display_label");
    interval_id = setInterval(next_slide_anibal, 15000);
  }
}

function show_slide_anibal(index) {
  if (index >= slides_anibal.length) {
    slide_anibal_index = 0;
  } else if (index < 0) {
    slide_anibal_index = slides_anibal.length - 1;
  } else {
    slide_anibal_index = index;
  }

  slides_anibal.forEach(slide => {
    slide.classList.remove("display_slide");
    // slides_label.classList.remove("display_label");
  });

  slides_anibal[slide_anibal_index].classList.add("display_slide");
  // slides_label[slide_anibal_index].classList.add("display_label");
}
function prev_slide_anibal() {
  clearInterval(interval_id);
  slide_anibal_index--;
  show_slide_anibal(slide_anibal_index);
}

function next_slide_anibal() {
  clearInterval(interval_id);
  slide_anibal_index++;
  show_slide_anibal(slide_anibal_index);
}

//Finalmente, o carrossel do Vitor Coutinho
function começar_carrossel_vitor() {
  if (slides_vitor.length > 0) {
    slides_vitor[slide_vitor_index].classList.add("display_slide");
    //  legenda_slides_vitor[slide_vitor_index].classList.add("display_p");
    interval_id = setInterval(next_slide_vitor, 15000);
  }
}

function show_slide_vitor(index) {
  if (index >= slides_vitor.length) {
    slide_vitor_index = 0;
  } else if (index < 0) {
    slide_vitor_index = slides_vitor.length - 1;
  } else {
    slide_vitor_index = index;
  }

  slides_vitor.forEach(slide => {
    slide.classList.remove("display_slide");
  });
  // slides_vitor.forEach(p => { p.classList.remove("display_p");  });

  slides_vitor[slide_vitor_index].classList.add("display_slide");
  legenda_slides_vitor[slide_vitor_index].classList.add("display_p");
}
function prev_slide_vitor() {
  clearInterval(interval_id);
  slide_vitor_index--;
  show_slide_vitor(slide_vitor_index);
}

function next_slide_vitor() {
  clearInterval(interval_id);
  slide_vitor_index++;
  show_slide_vitor(slide_vitor_index);
}
