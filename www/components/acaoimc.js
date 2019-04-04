// This is a JavaScript file

var peso;
var atura;
var resposta1;
var resposta;

$(document).on("click", "#botao", function (){
  peso = $("#peso").val();
  altura = $("#altura").val();
  resposta1 = parseFloat(altura) * parseFloat(altura);
  resposta = parseFloat(peso) / parseFloat(resposta1);

  $("#imc").val(resposta);

  if (resposta < 18.5) 
  {
    alert(resposta + " Voce é muito magro")
  }

  else if (resposta >= 18.5 && resposta <= 24.99) 
  {
    alert(resposta + " Peso normal");
  }

  else if (resposta >= 25 && resposta <= 29.99) 
  {
    alert(resposta + " Acima do peso");
  }

  else if (resposta >= 30 && resposta <= 34.99) 
  {
    alert(resposta + " ObesidadeI");
  }

  else if (resposta >= 35 && resposta <= 39.99) 
  {
    alert(resposta + " ObesidadeII - Severa");
  }

  else if (resposta >= 40)
  {
    alert(resposta + " ObesidadeIII - Morbida");
  }

});