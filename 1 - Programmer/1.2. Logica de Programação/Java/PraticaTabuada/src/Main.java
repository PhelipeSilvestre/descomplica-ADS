import javax.swing.*;

import static javax.swing.JOptionPane.*;

// Classe com mesmo nome do arquivo
class PraticaTabuada {
    public static void main (String entrada []){
        // Declarção de variaveis
        int tabuada, i;
        char op = '0';
        String msg = "", msgEntr = "Digite 1 para repetição for.\nDigite 2 para repetição while.\nDigite 3 para repetição do-while";
        // Entrada de dados
        tabuada = Integer.parseInt(showInputDialog("Digite um numero inteiro: "));
        op = (showInputDialog(msgEntr)).charAt(0);

        // Inicio dos laços - temos 3 opções de laços
        switch (op) {
            case '1':
            {
                msg = msg + "Tabuada do " + tabuada + " pelo for: \n\n";
                for(i = 1; i<=10; i=i+1) {
                    msg = msg + tabuada + " x " + i + " = " + tabuada*i + "\n";
                }
                break;
            }
            case '2':
            {
                msg = msg + "Tabuada do " + tabuada + " pelo While: \n\n";
                i = 1;
                while(i<=10){
                    msg = msg + tabuada + " x " + i + " = " + tabuada*i + "\n\n";
                    i=i+1;
                }
                break;
            }
            case '3': {
                msg = msg + "Tabuada do " + tabuada + " pelo do/while: \n\n";
                i = 1;
                do {
                    msg = msg + tabuada + " x " + i + " = " + tabuada * i + "\n";
                    i = i + 1;
                } while (1 <= 10);
                            }
            default: JOptionPane.showMessageDialog(null, "opção invalida");
        }
        JOptionPane.showMessageDialog(null, msg);
    }
}