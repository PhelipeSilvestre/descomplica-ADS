/*
Título da Prática:  Como trabalhar com Classes?

Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.

Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().

Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.

*/

class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Ola, eu sou ${this.nome} e tenho ${this.idade} anos.`);
  }

  trabalhar() {
    console.log(`Eu trabalho como ${this.cargo}.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`Eu gerencio o ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Eu programo em ${this.linguagem}.`);
  }
}

const gerente = new Gerente("Joaquim", 30, "Gerente de TI", "TI");
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

const desenvolvedor = new Desenvolvedor(
  "Maria",
  25,
  "Desenvolvedora Web",
  "JavaScript"
);
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
