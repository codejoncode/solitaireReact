import React, { Component } from "react";
import "./App.css";

import RemainingDeck from "./RemainingDeck"
import Home from "./Home"

let dragSrc = null; 

class App extends Component {
  state = {
    deck: [],
    shuffled: false,
    colOne: [],
    colTwo: [],
    colThree: [],
    colFour: [],
    colFive: [],
    colSix: [],
    colSeven: [],

    remainingDeckIndex: 0, 
  };
  componentWillMount() {
    this.setDeckUp();
  }

  setDeckUp = () => {
    //Step 1 of creating the game solitaire building a deck.
    const cards = [
      "A",
      "2",
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
            deck.push({ suit: "hearts", value: cards[j], color: "red" });
            break;
          case 1:
            deck.push({ suit: "clubs", value: cards[j], color: "black" });
            break;
          case 2:
            deck.push({ suit: "spades", value: cards[j], color: "black" });
            break;
          case 3:
            deck.push({ suit: "diamonds", value: cards[j], color: "red" });
            break;
          default:
            console.log("shouldn't reach this");
        }
      }
    }
    
    this.setState({deck}, () => {
      this.shuffleDeck(); 
    })
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

    this.setState({ deck, shuffled: true }, () => {
      this.generateColumns();
    });
  };

  generateColumns = () => {
    const deck = this.state.deck.slice(); 
    const colOne = [];
    const colTwo = [];
    const colThree = [];
    const colFour = [];
    const colFive = [];
    const colSix = [];
    const colSeven = [];
    const breakPoint = 28; //only 27 cards will go to the bottom row.
    /*col1 = 1  col2 = 2 col3 = 3 col4 = 4 col5 = 5 col6 = 6 col7 = 7 */
    let poppedFromList;
    if (this.state.shuffled) {
      for (let i = 0; i < breakPoint; i++) {
        if (i < 1) {
          poppedFromList = deck.pop();
          colOne.push(poppedFromList);
        } else if (i < 3) {
          poppedFromList = deck.pop();
          colTwo.push(poppedFromList);
        } else if (i < 6) {
          poppedFromList = deck.pop();
          colThree.push(poppedFromList);
        } else if (i < 10) {
          poppedFromList = deck.pop();
          colFour.push(poppedFromList);
        } else if (i < 15) {
          poppedFromList = deck.pop();
          colFive.push(poppedFromList);
        } else if (i < 21) {
          poppedFromList = deck.pop();
          colSix.push(poppedFromList);
        } else if (i < breakPoint) {
          poppedFromList = deck.pop();
          colSeven.push(poppedFromList);
        }
      }
    } else {
      this.shuffleDeck();
    }
    

    this.setState({
      deck,
      colOne,
      colTwo,
      colThree,
      colFour,
      colFive,
      colSix,
      colSeven,
      remainingDeckIndex: deck.length -1,
    });
  };

  flipCard = () => {
    //this function should flip the card by taking the classname off or adding it.
  };

  goToNextCard = () => {
    /* Click the deck of remaining cards and this will increment and take the deck to the next position uses the modulo operator */
    const remainingDeckIndex = (this.state.remainingDeckIndex + 1) % this.state.deck.length; 
    this.setState({remainingDeckIndex});
  };

  /* Drag and drop functions*/
  handleDragStart = event => {
    event.target.style.opacity = ".35";
    dragSrc = event.target; 

    event.dataTransfer.setData("text/html", event.target.innerHTML);
  }

  handleDragOver = event => {
    if (event.preventDefault){
      event.preventDefault();
    }
    event.dataTransfer.dropEffect = "move";
  }

  handleDragEnter = event => {
    event.target.classList.add("over");
  }

  handleDragLeave = event => {
    event.target.classList.remove("over");
  }

  handleDrop = event => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (dragSrc !== event.target){
      dragSrc.innerHTML = event.target.innerHTML; 
      event.target.innerHTML = event.dataTransfer.getData("text/html");
    }
    return false; 
  }

  handleDragEnd = () => {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
      column.classList.remove("over");
      column.style.opacity = 1; 
    })
  }
  handleRemainingDeckDrag = () => {
    /* this function will handle the remainingDeck drag. I want to increment the list so that it will go to the next card. */
    const deck = this.state.deck.slice(); 
    const remainingDeckIndex = (this.state.remainingDeckIndex + 1) % this.state.deck.length; 
    const last = deck.pop(); 
    const last_obj = {last, from : "remainingDeck"}; //  from will be used when using rules if it is not fitting of the rules it will return back to its list it came from. 

    this.setState({deck, last_obj, remainingDeckIndex}); 

  }

  /*
  Building the layout  one card is face up and six cards is face down next to it. 
  
  */

  render() {
    const remainingDeck = this.state.deck.slice(); //starts off the entire deck but I will pull from this for the other piles.
    const colOne = this.state.colOne.slice();
    const colTwo = this.state.colTwo.slice();
    const colThree = this.state.colThree.slice();
    const colFour = this.state.colFour.slice();
    const colFive = this.state.colFive.slice();
    const colSix = this.state.colSix.slice();
    const colSeven = this.state.colSeven.slice();
    console.log(this.state.remainingDeckIndex);
    console.log(this.state.dec);

    return (
      <div className="container">
        <Home deck = {this.state.deck}/>
        
        {/* <button onClick={this.shuffleDeck}>New Game</button>
        <div className="outline scene">
          <div onClick = {this.flipCard} className="card">
            <div className="card__face card__face--front">
              <div className="top">
                {" "}
                <span>A</span> <span>&#x2666;</span>{" "}
              </div>
               <h1 className = {remainingDeck[remainingDeck.length-1].color}>&#x2666;</h1>
              <div className="bottom">
                <span>A</span> <span>&#x2666;</span>
              </div>
              <div className="card__face card__face--back">BACK</div>
            </div>
          </div>
        </div>
        <div>

        </div> */}
        <div className="topRow">
          {/* <div  className="drawPile"> */}
            {/* <div onClick = {this.goToNextCard} className="outline scene drawFrom">
              <p>React Solitaire</p>
            </div> */}
            {/* onDrag = {this.handleRemainingDeckDrag} */}
            {/* <div  onDragStart={this.handleDragStart} draggable="true" onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"> */}
            {/* onDrop={this.handleDrop}  */}
              {/* <div className={"top " + remainingDeck[this.state.remainingDeckIndex].color}>
                <span>{remainingDeck[this.state.remainingDeckIndex].value}</span> {remainingDeck[this.state.remainingDeckIndex].suit === 'hearts' ? <span>&hearts;</span> :  remainingDeck[this.state.remainingDeckIndex].suit === 'spades' ? <span>&spades;</span> :remainingDeck[this.state.remainingDeckIndex].suit === 'clubs' ? <span>&clubs;</span>: <span>&#x2666;</span> }
              </div>
              {remainingDeck[this.state.remainingDeckIndex].suit === 'hearts' ?  <h1 className = {remainingDeck[this.state.remainingDeckIndex].color}>&hearts;</h1> :  remainingDeck[this.state.remainingDeckIndex].suit === 'spades' ?  <h1 className = {remainingDeck[this.state.remainingDeckIndex].color}>&spades;</h1> :remainingDeck[this.state.remainingDeckIndex].suit === 'clubs' ?  <h1 className = {remainingDeck[this.state.remainingDeckIndex].color}>&clubs;</h1>:  <h1 className = {remainingDeck[this.state.remainingDeckIndex].color}>&#x2666;</h1>} */}
              
              {/* <div className={"bottom " + remainingDeck[this.state.remainingDeckIndex].color}>
                {remainingDeck[this.state.remainingDeckIndex].suit === 'hearts' ? <span>&hearts;</span> :  remainingDeck[this.state.remainingDeckIndex].suit === 'spades' ? <span>&spades;</span> :remainingDeck[this.state.remainingDeckIndex].suit === 'clubs' ? <span>&clubs;</span>: <span>&#x2666;</span> }<span>{remainingDeck[this.state.remainingDeckIndex].value}</span> 
              </div> */}
            
            {/* </div> */}
              
            {/* </div> */}
          <div className="finalStack">
            {/* <div onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
            <div onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
            <div onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
            <div onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div> */}
          </div>
        </div>
        <div className="bottomRow">
          {/* <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div>
          <div draggable = "true" onDrop={this.handleDrop} onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragEnd={this.handleDragEnd} className="outline scene column"></div> */}
        </div>
      </div>
    );
  }
}

export default App;
