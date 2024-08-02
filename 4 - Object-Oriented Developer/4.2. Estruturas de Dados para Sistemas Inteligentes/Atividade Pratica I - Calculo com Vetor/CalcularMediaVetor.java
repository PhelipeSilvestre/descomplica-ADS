import javax.swing.JOptionPane;

class calcularMediaVetor{
    public static void main(String[] args) {
        int vetSoma[ ];
        int media = 0;
        int soma =0;
        int i;

        vetSoma = new int [50];
        for ( i = 0 ; i <= 49 ; i++ ) {

            vetSoma[i] = Integer.parseInt(JOptionPane.showInputDialog ("Digite um valor inteiro: "));
       
            soma = soma + vetSoma[i];
        }
        media = soma / 50;    
        System.out.println ("A soma dos 50 valores digitados é: " + soma);
        System.out.println ("A media dos 50 valores digitados é: " + media);
        System.exit(0); 
    }
}