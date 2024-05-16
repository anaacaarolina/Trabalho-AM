let window_counter=0;
let sections=["error_window_section", "homepage","Alice_Oliveira","Anibal_Simao", "Vitor_Coutinho", "Sobre_Nos"];


function createWindow(){
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    function getRandomCoordinates(min, maxwidth, maxheight) {
        let x= Math.floor(Math.random() * (maxwidth - min + 1)) + min;
        let y= Math.floor(Math.random() * (maxheight - min + 1)) + min;
        return [x,y];
    }
    // Create the main container div
    var quadradoGrandeDiv = document.createElement("div");
    quadradoGrandeDiv.setAttribute("class", "quadrado_grande");
    console.log("viewport: ",vw, vh);
    var coordinates = getRandomCoordinates (0,vw-301, vh-166);
    quadradoGrandeDiv.style.left = coordinates[0] + "px";
    quadradoGrandeDiv.style.top = coordinates[1] + "px";
    console.log("created window at ", coordinates[0], coordinates[1]);

    // Create the blue rectangle div
    var retanguloAzulDiv = document.createElement("div");
    retanguloAzulDiv.setAttribute("class", "retangulo_azul");

    // Create the error message paragraph
    var mensagemErroP = document.createElement("p");
    mensagemErroP.setAttribute("class", "mensagem_erro");
    mensagemErroP.textContent = "Mensagem sistema";

    // Create the close button image
    var botaoFecharImg = document.createElement("img");
    botaoFecharImg.setAttribute("class", "botao_fechar");
    botaoFecharImg.setAttribute("src", "assets/close button.png");

    // Append the error message paragraph and close button image to the blue rectangle div
    retanguloAzulDiv.appendChild(mensagemErroP);
    retanguloAzulDiv.appendChild(botaoFecharImg);

    // Create the cross and text div
    var cruzETextoDiv = document.createElement("div");
    cruzETextoDiv.setAttribute("class", "cruz_e_texto");

    // Create the cross image
    var cruzCirculoImg = document.createElement("img");
    cruzCirculoImg.setAttribute("src", "assets/cross.png");
    cruzCirculoImg.setAttribute("class", "cruz_circulo");

    // Create the storage full text paragraph
    var textoArmcheioP = document.createElement("p");
    textoArmcheioP.setAttribute("class", "texto_armcheio");
    textoArmcheioP.textContent = "Armazenamento Cheio";

    // Append the cross image and storage full text paragraph to the cross and text div
    cruzETextoDiv.appendChild(cruzCirculoImg);
    cruzETextoDiv.appendChild(textoArmcheioP);

    // Create the button div
    var botaoDaCaixaDiv = document.createElement("div");
    botaoDaCaixaDiv.setAttribute("class", "botao_da_caixa");

    // Create the OK button
    var botaoOKButton = document.createElement("button");
    botaoOKButton.setAttribute("class", "botao_ok");
    botaoOKButton.textContent = "OK";
    botaoOKButton.addEventListener("click", createWindow);

    // Append the OK button to the button div
    botaoDaCaixaDiv.appendChild(botaoOKButton);

    // Append the blue rectangle div, cross and text div, and button div to the main container div
    quadradoGrandeDiv.appendChild(retanguloAzulDiv);
    quadradoGrandeDiv.appendChild(cruzETextoDiv);
    quadradoGrandeDiv.appendChild(botaoDaCaixaDiv);



    // Append the main container div to the document body
    document.getElementById("error_window_section").appendChild(quadradoGrandeDiv);

    window_counter++;

    check_window_counter_threshold();
}

function check_window_counter_threshold() {
    let auto_threshold = 2; //2
    let limit_threshold = 2; //30
    if (window_counter >= limit_threshold) { 
      document.getElementById("quadrado_grande_maior").hidden=false;
    }
    else if (window_counter >= auto_threshold) {
        setTimeout(createWindow, 8000/(window_counter*3));
    }

}

function toggle_visibilidade(elem_id) {
  var elem = document.getElementById(elem_id);
  elem.hidden=!elem.hidden
}

function hide_all_sections(){
  for(var i=0; i<sections.length; i++){
    document.getElementById(sections[i]).hidden=true;
  }
}
function show_section(section_id){
document.getElementById(section_id).hidden=false; 
}

//setTimeout(function() {...}, 1000);



createWindow();

//Mudar imagem das pastas da página inicial
document.addEventListener("DOMContentLoaded", function() {
  
  function abrirPasta(event) {
    var elementoPasta = event.target;
    if (elementoPasta.src.endsWith("assets/folder_closed.png")) {
      elementoPasta.src = "assets/folder_opened.png";
    }
  }
  
  function fecharPasta(event) {
    var elementoPasta = event.target;
    if (elementoPasta.src.endsWith("assets/folder_opened.png")) {
      elementoPasta.src = "assets/folder_closed.png";
    }
  }
  var elementosPastas = document.getElementsByClassName("pastas_fechadas");
    
  for (var i = 0; i < elementosPastas.length; i++) {
    elementosPastas[i].addEventListener("mouseover", abrirPasta);
    elementosPastas[i].addEventListener("mouseout", fecharPasta);
  }
});

document.getElementById("botao_ok_maior").addEventListener("click", function(){
  hide_all_sections();
  show_section("homepage")
})  


links_pessoas=document.getElementsByClassName("nav-link-alice")
for(var i=0; i<links_pessoas.length; i++){
  links_pessoas[i].addEventListener("click", function(){
    hide_all_sections();
    show_section("Alice_Oliveira")
  })
}

links_pessoas=document.getElementsByClassName("nav-link-anibal")
for(var i=0; i<links_pessoas.length; i++){
  links_pessoas[i].addEventListener("click", function(){
    hide_all_sections();
    show_section("Anibal_Simao")
  })
}

links_pessoas=document.getElementsByClassName("nav-link-vitor")
for(var i=0; i<links_pessoas.length; i++){
  links_pessoas[i].addEventListener("click", function(){
    hide_all_sections();
    show_section("Vitor_Coutinho")
  })
}

links_pessoas=document.getElementsByClassName("texto_footer_sobre_nos")
for(var i=0; i<links_pessoas.length; i++){
  links_pessoas[i].addEventListener("click", function(){
    hide_all_sections();
    show_section("Sobre_Nos")
  })
}

links_pessoas=document.getElementsByClassName("texto_footer_texto_inicio")
for(var i=0; i<links_pessoas.length; i++){
  links_pessoas[i].addEventListener("click", function(){
    hide_all_sections();
    show_section("homepage")
  })
}

document.getElementById("pasta_benfica").addEventListener("click", function(){
  hide_all_sections();
  show_section("Alice_Oliveira")
})  

document.getElementById("pasta_elvis").addEventListener("click", function(){
  hide_all_sections();
  show_section("Anibal_Simao")
}) 

document.getElementById("pasta_beatles").addEventListener("click", function(){
  hide_all_sections();
  show_section("Vitor_Coutinho")
}) 

document.getElementById("pasta_aberta_alice").addEventListener("click", function(){
  hide_all_sections();
  show_section("homepage")
}) 

document.getElementById("pasta_aberta_anibal").addEventListener("click", function(){
  hide_all_sections();
  show_section("homepage")
}) 

document.getElementById("pasta_aberta_vitor").addEventListener("click", function(){
  hide_all_sections();
  show_section("homepage")
}) 