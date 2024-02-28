class ContaCliente {
  constructor(numeroConta, saldo, debito, credito) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.debito = debito;
    this.credito = credito;
  }

  calcularSaldoAtual() {
    return this.saldo - this.debito + this.credito;
  }

  verificarSaldo() {
    const saldoAtual = this.calcularSaldoAtual();
    if (saldoAtual < 0) {
      console.log("Saldo negativo");
    } else {
      console.log("Saldo positivo");
    }
  }
}

let numeroConta = 123;
let saldo = 1000;
let debito = 100;
let credito = 200;
let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();
