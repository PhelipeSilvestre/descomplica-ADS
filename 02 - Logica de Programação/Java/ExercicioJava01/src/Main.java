import javax.swing.JOptionPane;

class ExercicioJava01 {
    public static void main(String[] args) {
        //solicita ao usuario que insira dois numero inteiros
        String entrada1 = JOptionPane.showInputDialog("Digite um número: ");
        String entrada2 = JOptionPane.showInputDialog("Digite o proximo numero: ");

        //converte a entrada para numeros inteiros
        int numero1 = Integer.parseInt(entrada1);
        int numero2 = Integer.parseInt(entrada2);

        //calcula o quociente da divisão
        double quociente = (double) numero1 / numero2;

        //calcula a potencia
        double potencia = Math.pow(numero1, numero2);

        //monta a mensagem a ser exbida
        String mensagem = "Quociente da divisão: " + quociente + "/nPotencia: " + potencia;

        //exibe a mensagem para o usuario
        JOptionPane.showMessageDialog(null, mensagem);
    }
}