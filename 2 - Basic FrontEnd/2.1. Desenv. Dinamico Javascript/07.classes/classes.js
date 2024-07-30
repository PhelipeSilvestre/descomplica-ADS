// Classe é definida por atributos e metodos
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // firstName e lastName são atributos da classe
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  } // getFullName é um metodo da classe
}

// Cria uma instância da classe ou objeto
const user = new User("John", "Doe");
console.log(user.getFullName()); // Saída: John Doe
