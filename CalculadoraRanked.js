// Função para calcular o elo do herói
function calcularElo(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
  
    // Nível do herói
    let elo;
  
    // Verificação do nível com base no saldo de vitórias
    if (saldoVitorias < 10) {
      elo = "Ferro";}
         else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
      elo = "Bronze";}
         else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
      elo = "Prata";}
         else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
      elo = "Ouro";}
         else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
      elo = "Diamante";}
          else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
      elo = "Lendário";} 
        else {
      elo = "Imortal";}
      
  
    // Retorno do nível do herói
    return elo;
  }
  
  // Entrada de dados pelo usuário
  let vitorias = parseInt(prompt("Informe o número de vitórias: "));
  let derrotas = parseInt(prompt("Informe o número de derrotas: "));
  
  // Chamada da função para calcular o nível do herói
  let eloHeroi = calcularElo(vitorias, derrotas);
  
  // Exibição do resultado
  console.log(`O herói tem um saldo de **${saldoVitorias}** vitórias e está no nível **${eloHeroi}**`);
