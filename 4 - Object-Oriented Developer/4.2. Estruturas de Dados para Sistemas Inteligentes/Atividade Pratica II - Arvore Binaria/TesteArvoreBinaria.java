class BIntNo {
    int valor;
    BIntNo esq, dir;

    // Construtor
    public BIntNo(int valor) {
        this.valor = valor;
        esq = null;
        dir = null;
    }
}

class ArvoreBinaria {
    BIntNo raiz;

    // Método para inserir um novo nó na árvore
    public BIntNo inserir(BIntNo arvore, int novoNo) {
        if (arvore == null) {
            return new BIntNo(novoNo); // Cria um novo nó
        }

        if (novoNo < arvore.valor) {
            arvore.esq = inserir(arvore.esq, novoNo); // Insere à esquerda
        } else {
            arvore.dir = inserir(arvore.dir, novoNo); // Insere à direita
        }

        return arvore;
    }

    // Método para inserir um valor na árvore
    public void inserirNo(int novoValor) {
        raiz = inserir(raiz, novoValor);
    }

    // Método para exibir os nós à esquerda (em ordem)
    public void exibirEsquerdo(BIntNo arv) {
        if (arv != null) {
            exibirEsquerdo(arv.esq);
            System.out.println(arv.valor);
        }
    }

    // Método para exibir os nós à direita (em ordem)
    public void exibirDireito(BIntNo arv) {
        if (arv != null) {
            System.out.println(arv.valor);
            exibirDireito(arv.dir);
        }
    }

    // Método para exibir a raiz
    public void exibirRaiz() {
        if (raiz != null) {
            System.out.println("Raiz: " + raiz.valor);
        }
    }

    // Método que chama as funções para exibir os nós à esquerda, direita e a raiz
    public void exibirNo() {
        exibirEsquerdo(raiz); // Exibe nós à esquerda
        exibirRaiz(); // Exibe a raiz
        exibirDireito(raiz); // Exibe nós à direita
    }
}

public class TesteArvoreBinaria {
    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        ArvoreBinaria arvore = new ArvoreBinaria();

        // Recebe 5 números do usuário e os insere na árvore
        for (int i = 0; i < 5; i++) {
            System.out.println("Digite um número:");
            int num = scanner.nextInt();
            arvore.inserirNo(num);
        }

        // Exibe os números em ordem na árvore
        System.out.println("Números inseridos na árvore:");
        arvore.exibirNo();
    }
}