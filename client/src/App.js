import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    deck: [],
  }
  componentWillMount () {
    const cards = ["A", " 2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
    const deck = []
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    suits.forEach(suit => {
      cards.forEach(card => {
        deck.push({suit: card}); 
      });
    });
    this.setState({deck}); 
  }

  shuffleDeck = () => {
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
    for (let i = deck.length - 1; i > 0;  i--){
      const j = Math.floor(Math.random() * (i + 1)); 
      const temp = deck[i];
      deck[i] = deck[j]; 
      deck[j] = temp; 
    }

  }


  render() {
    return (
      <div className="App">
        
        <div className="outline">
          <div className="top"> <span>A</span> <span>&hearts;</span> </div>
          <h1>&hearts;</h1>
          <div className="bottom"><span>A</span> <span>&hearts;</span></div>
        </div>

      </div>
    );
  }
}

export default App;
