var carta1 = {
    nome: "Woody",
    imagem:
      "http://pm1.narvii.com/6324/e99fdbc1bad48f96d9f6a17be69fc01c31c8ea77_00.jpg",
    atributos: {
      inteligencia: 9,
      coragem: 8,
      hallDaFama: 10
    }
  };
  
  var carta2 = {
    nome: "Buzz Lightyear",
    imagem:
      "https://i.pinimg.com/564x/5d/f4/64/5df464cd0e2734cfc1db147146eeac95.jpg",
    atributos: {
      inteligencia: 7,
      coragem: 9,
      hallDaFama: 10
    }
  };
  
  var carta3 = {
    nome: "Rex",
    imagem:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-1pw6dak_23081c6b.jpeg",
    atributos: {
      inteligencia: 2,
      coragem: 4,
      hallDaFama: 7
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
  
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
  
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
  
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://github.com/RenataVasconcelos/jogo/blob/main/Design_sem_nome__2_-removebg-preview.png?raw=true" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = '<div id="opcoes" class="carta-status">';
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
  
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura =
      '<img src="https://github.com/RenataVasconcelos/jogo/blob/main/Design_sem_nome__2_-removebg-preview.png?raw=true" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
  
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  