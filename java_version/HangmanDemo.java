import java.util.Scanner;
import java.util.Random;
public class HangmanDemo{
   public static void main(String[] args){
      char c;
      String temp;
      int MaxGuessingNum = 7;
      Scanner in = new Scanner(System.in);
      String[] movies = {"stars wars", "the hunger games", "the avengers", "gone with the wind","she","black is the new orange","fighting","my way"}; 
      Random rand = new Random();
      int i = rand.nextInt(movies.length);
      String secret = movies[i];
      Hangman h1 = new Hangman(secret);
       
       
      System.out.println("Welcome to the Guessing Game. The topic is movie titles.");
      System.out.println();
      System.out.println("You have " + MaxGuessingNum-1 + " guesses. Your puzzle has the following letters: ");
      System.out.println();
      System.out.println(h1.getDisguisedPhrase());
       
            //boolean flag == false;
         while(h1.getIncorrectCount()<MaxGuessingNum){
            System.out.println("Please guess a letter: ");
            temp = in.nextLine();
            c =temp.charAt(0);
               if(h1.checkRepeat(c)){
                  System.out.print("Too bad -you already guessed "+c);  
               }
               else{  int cnt = 0;
                  if(h1.makeGuesses(c)){
                     cnt++;
                     System.out.println(h1.getDisguisedPhrase()+"\nThere are "+cnt+c+".");
                   }
                     if(h1.isFound()){
                        System.out.println("Great guess!You win! ");
                        break;
                     }        
                   
                  else
                     System.out.println("No "+c+"."+"You have "+(7-h1.getIncorrectCount())+" guesses left.");
               }
          }
               if(h1.getIncorrectCount() == MaxGuessingNum){
                  System.out.println("Sorry you lose...");
               }
   }
}

