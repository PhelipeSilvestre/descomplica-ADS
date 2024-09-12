/*Pensar & Responder
Sabemos que existem algumas maneiras de armazenar uma coleção de objetos e existem várias classes do Java Collections Framework, que armazenam esses objetos, 
entre elas a classe ArrayList. Diante disso, desenvolva uma classe em Java que cria uma lista de números inteiros, recebe os números digitados pelo usuário e ao final, 
mostra os números armazenados e a soma total desses números. */

import java.util.ArrayList;
import java.util.Scanner;

public class pensarResponder {
    
public static void main(String[] args) {

   ArrayList <Integer> list = new ArrayList<Integer>();
   Scanner inputUser = new Scanner(System.in);

   System.out.print("Digite um numero para ser inserido na lista: ");
   list.add(inputUser.nextInt());

   System.out.print("Digite o segundo numero para ser inserido na lista: ");
   list.add(inputUser.nextInt());

   System.out.print("Digite o terceiro numero para ser inserido na lista: ");
   list.add(inputUser.nextInt());

   inputUser.close();

   System.out.println("Esses são os itens adicionados na lista: ");
   System.out.println(list);

   
   int count = 0;

    for(int i = 0; i < list.size(); i++){
       
        count = count + list.get(i);    
    }

    System.out.println("A soma dos itens da lista e: " + count);

}
}