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
