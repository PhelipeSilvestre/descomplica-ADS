class Pessoa {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.cargo}.`;
    }
}

class Gerente extends Pessoa {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenteEspecifico() {
        return `Trabalho no departamento de ${this.departamento}.`;
    }
}

class Programador extends Pessoa {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programadorEspecifico() {
        return `Sou especializado em programação na linguagem ${this.linguagem}.`;
    }
}

function criarObjetos() {
    try{
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    if (cargo.toLowerCase() === "gerente") {
        const gerente = new Gerente(nome, idade, cargo, departamento);
        exibirDados(gerente, null);
        exibirApresentacao(gerente);
    } else if (cargo.toLowerCase() === "programador") {
        const programador = new Programador(nome, idade, cargo, linguagem);
        exibirDados(null, programador);
        exibirApresentacao(programador);
    } else {
        throw new Error("Cargo inválido. Por favor, insira 'Gerente' ou 'Programador'.");
    }
} catch (error) {
    alert(error.message);
}
}

function exibirDados(gerente, programador) {
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = ""; // Limpa qualquer conteúdo anterior

    if (gerente instanceof Gerente) {
        resultadoDiv.innerHTML += `
            <h3>Informações do Gerente:</h3>
            <p><strong>Nome:</strong> ${gerente.nome}</p>
            <p><strong>Idade:</strong> ${gerente.idade}</p>
            <p><strong>Cargo:</strong> ${gerente.cargo}</p>
            <p><strong>Departamento:</strong> ${gerente.departamento}</p>
        `;
    }

    if (programador instanceof Programador) {
        resultadoDiv.innerHTML += `
            <h3>Informações do Programador:</h3>
            <p><strong>Nome:</strong> ${programador.nome}</p>
            <p><strong>Idade:</strong> ${programador.idade}</p>
            <p><strong>Cargo:</strong> ${programador.cargo}</p>
            <p><strong>Linguagem:</strong> ${programador.linguagem}</p>
        `;
    }
}

function exibirApresentacao(pessoa) {
    const apresentacaoDiv = document.getElementById("apresentacao");

    apresentacaoDiv.innerHTML = `<p>${pessoa.seApresentar()}</p>`;

    if (pessoa instanceof Gerente) {
        apresentacaoDiv.innerHTML += `<p>${pessoa.gerenteEspecifico()}</p>`;
    } else if (pessoa instanceof Programador) {
        apresentacaoDiv.innerHTML += `<p>${pessoa.programadorEspecifico()}</p>`;
    }
}