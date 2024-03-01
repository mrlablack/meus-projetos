import java.util.Scanner;

public class  calculadora{
    
     public static void main(String[] args) {
         Scanner sc=new Scanner(System.in);
         
        System.out.println("Insira primeiro numero");
         int primeiro_num=sc.nextInt();

        System.out.println("Insira Segundo numero");
       int  segundo_num=sc.nextInt();
               System.out.println("Qual operacao queres!");
             String operacao=sc.next();
       int resul;
       switch(operacao){
           case("+"):   
        resul=primeiro_num+segundo_num;
        System.out.println(resul);
          break; 
      case("*"):   
        resul=primeiro_num*segundo_num;
        System.out.println(resul);  
         break;
      
       case("-"):   
        resul=primeiro_num-segundo_num;
        System.out.println(resul);
         break;
         
       case("/"):   
        resul=primeiro_num/segundo_num;
        System.out.println(resul);
        break;
        
       default:
         System.out.print(" insira a operacao coreta");
          break;
       }
         
       
      
    }

}
