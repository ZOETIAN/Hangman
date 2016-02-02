public class Hangman{
   //the secret phrase
   private char[]ph;
   //the disguised phrase
   private char[]dph;
   //the number of guesses made
   private int num;
   //the number of incorrect guesses
   private int inNum;
    
   //methods
   //args-constructor
   Hangman(String s){
   ph = s.toCharArray();
   dph = new char[ph.length];
      for(int i = 0; i < ph.length; i++){
         if(ph[i]!=' ')
            dph[i]='_';
         else
            dph[i]=' ';
      }
   }
   //makeGuesses method
   public boolean makeGuesses(char c){
      boolean h = false;
      num++; 
         for(int i = 0; i < ph.length; i++){
            if( ph[i] == c ){
               h = true;
               dph[i] = c;
            }
         }   
         if(h ==false)
            inNum++;
         return h; 
   }
    
   //returns a String containing correctly guessed letters 
   //in the correct positions and unknown letters replaced with _.
   public String getDisguisedPhrase(){
      String p = "";
      for(int i =0; i < dph.length; i++)
         p +=dph[i]+" ";
         return p;      
   }
   //returns the secret phrase
   public String getSecretPhrase(){
      String q = new String(ph);
         return q;      
   }
   //returns the number of guesses made.
   public int getGuessCount(){
      return num;      
   }
   //returns the number of incorrect guesses made.
   public int getIncorrectCount(){
      return inNum;
   }
   public boolean checkRepeat(char c){
      for(int i = 0; i <dph.length; i++){
         if(dph[i] == c)
            return true;
      } 
           return false;
   }
   //returns true if the hidden phrase has been discovered.
   public boolean isFound(){
      boolean re =false;
      if(this.getSecretPhrase().equals(this.getDisguisedPhrase()))
         return true;
      else
         return false;      
   }
}
