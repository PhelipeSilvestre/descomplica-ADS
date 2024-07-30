// Getter and Setter functions

class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  } // get pegando o valor

  set name(value) {
    this._name = value;
  } // set atribuindo o valor
}

// Para cada instância de variável, um método getter retorna seu valor, enquanto o método setter define ou atualiza o valor da propriedade. Com isso em mente, getters e setters tmabém são conhecidos como métodos de acesso e de modificação, respectivamente
