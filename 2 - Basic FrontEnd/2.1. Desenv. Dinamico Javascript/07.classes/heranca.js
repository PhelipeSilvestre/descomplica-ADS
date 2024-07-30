// Herança pode ser considerada um conceito chave do paradigma orientado a objetos. Ela permite que classes compartilhem atributos e métodos através de hierarquia de classes.

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " ja esta ligado");
      return;
    }
    this.ligado = true;
  }
}

class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new SmartPhone("sSamsung", "preto", "A7");
s1.ligar();
console.log(s1);
