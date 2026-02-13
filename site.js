const dicas = [
    "Crie um personagem com falhas — isso gera ótimas histórias!",
    "Nunca subestime um goblin em grupo.",
    "Interprete, mesmo que seja engraçado!",
    "Respeite o tempo dos outros jogadores.",
    "Faça perguntas ao mestre. Isso enriquece o mundo."
  ];
  
  function mostrarDica() {
    const index = Math.floor(Math.random() * dicas.length);
    document.getElementById('dicaTexto').textContent = dicas[index];
  }
  
  function rolarDado() {
    const resultado = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultadoDado').textContent = `Você rolou: 🎲 ${resultado}`;
  }