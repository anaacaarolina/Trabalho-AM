function createWindow(){

    function getRandomCoordinates(min, max) {
        let x= Math.floor(Math.random() * (max - min + 1)) + min;
        let y= Math.floor(Math.random() * (max - min + 1)) + min;
        return [x,y];
    }
    // Create the main container div
    var quadradoGrandeDiv = document.createElement("div");
    quadradoGrandeDiv.setAttribute("class", "quadrado_grande");
    var coordinates = getRandomCoordinates (0,500);
    quadradoGrandeDiv.style.top = coordinates[0];
    quadradoGrandeDiv.style.left = coordinates[1];

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

    alert("created object at "+ coordinates);
}


//setTimeout(function() {...}, 1000);



createWindow();

