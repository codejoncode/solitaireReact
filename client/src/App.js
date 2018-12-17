import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    deck: []
  };
  componentWillMount() {
    this.setDeckUp();
    this.shuffleDeck();
  }

  setDeckUp = () => {
    //Step 1 of creating the game solitaire building a deck.
    const cards = [
      "A",
      " 2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const deck = [];
    const suitsLength = 4; // hearts clubs spades

    for (let i = 0; i < suitsLength; i++) {
      for (let j = 0; j < cards.length; j++) {
        switch (i) {
          case 0:
            deck.push({ hearts: cards[j] });
            break;
          case 1:
            deck.push({ clubs: cards[j] });
            break;
          case 2:
            deck.push({ spades: cards[j] });
            break;
          case 3:
            deck.push({ diamonds: cards[j] });
            break;
        }
      }
    }
    this.setState({ deck });
    this.shuffleDeck();
  };

  shuffleDeck = () => {
    //Step 2 implement a way to shuffle the deck.
    //the purpuse of this function will be to shuffle the deck.
    //Instead of importing or using something already written to practice building algorithms in javascript
    //This function will feature implementation of an algorithm.

    //I will iterate over the entire array and replace it with random indexs.
    //This also known as the durstenfeld shuffle algorithm.

    /* Pseduo code to shuffle an array of n elements  
    
    for i from n -1 down to 1 do 
    j  = random integer  between 0 and n-1 
    swap  a[j] with a [i]

    Now if your familiar with bubble sort algorithm or any algorithm that features swapping we will have to create a temporary 
    variable to peform this swap correctly. 

    The running time of this alogirthm is O(n). 
    */
    //get a copy of the deck never  manipulate the state directly.
    const deck = this.state.deck.slice();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  };

  

  /*
  Building the layout  one card is face up and six cards is face down next to it. 
  
  */

  render() {
    console.log(this.state.deck);
    return (
      <div className="App">
        <button onClick={this.shuffleDeck}>New Game</button>
        <div className="outline scene">
          <div onClick = {} className="card">
            <div className="card__face card__face--front">
              <div className="top">
                {" "}
                <span>A</span> <span>&#x2666;</span>{" "}
              </div>
              <h1>&#x2666;</h1>
              <div className="bottom">
                <span>A</span> <span>&#x2666;</span>
              </div>
              <div className="card__face card__face--back">BACK</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
