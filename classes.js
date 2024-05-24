class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
  }
  
  const mago = new Heroi("Bereck", 350, "mago");
  mago.atacar(); 
  
  const guerreiro = new Heroi("Azurian", 25, "guerreiro");
  guerreiro.atacar(); 
  