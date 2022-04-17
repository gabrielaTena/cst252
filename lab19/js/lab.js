/**
 * Author:    Gabriela Tena
 * Created:   04.06.2022
 *
 * (c) Copyright by Blub Corp.
 **/

//Controls the game
class Hangman{
  //initialize
  constructor(letter1, letter2) {
    //set up the board
    this.board = new Board();
    //set up the player
    this.player1 = new Player(letter1, 1, this.board);
    this.player2 = new Player(letter2, 2, this.board);
    //decide which player starts the game
    this.current_player = this.player1;
  }
    //start playing
    play(){
      //loop infinitely
      while(true){
        //call the board rendering method
        this.board.render();
        //ask for coordinated from the current player
        current_player.get_coordinates();
      }
}

//fill out board
//If the player guesses the correct word continues
function sortingObject(str) {
  mod = correct;
  //If the player guesses correctly
  if (mod == correct){
    return "Continue"
  }
  //If the player makes a mistake
  else if (mod == wrong){
    return "Draw part one body-part of the hangman"
  }

}
//loop this until player wins/loses
