import React, { Component } from "react";
import "./App.css";

import RemainingDeck from "./RemainingDeck";
import Home from "./Home";

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
    finalStack1: [],
    finalStack2: [],
    finalStack3: [],
    finalStack4: [],

    remainingDeckIndex: 0
  };
  componentWillMount() {
    this.setDeckUp();
  }

  returnActualValue = value => {
    /* This function will return the actual value. Curently value is being used to display the card
    However, the game will require the color to be opposite of the previous color and the value to be one less
    or the array for that section to be empty. Actual value will assign values 1 - 13 with Ace being first */
    let returning;
    switch (value) {
      case "A":
        returning = 1;
        break;
      case "J":
        returning = 11;
        break;
      case "Q":
        returning = 12;
        break;
      case "K":
        returning = 13;
        break;
      default:
        returning = Number(value);
    }
    //because react requires a default case  this can be simplified.
    //2-10 will be the integer version of its string.

    return returning;
  };

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
        const actual = this.returnActualValue(cards[j]);
        switch (i) {
          case 0:
            deck.push({
              suit: "hearts",
              value: cards[j],
              color: "red",
              actual,
              connected: false,
              column: "none"
            });
            break;
          case 1:
            deck.push({
              suit: "clubs",
              value: cards[j],
              color: "black",
              actual,
              connected: false,
              column: "none"
            });
            break;
          case 2:
            deck.push({
              suit: "spades",
              value: cards[j],
              color: "black",
              actual,
              connected: false,
              column: "none"
            });
            break;
          case 3:
            deck.push({
              suit: "diamonds",
              value: cards[j],
              color: "red",
              actual,
              connected: false,
              column: "none"
            });
            break;
          default:
            console.log("shouldn't reach this");
        }
      }
    }

    this.setState({ deck }, () => {
      this.shuffleDeck();
    });
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
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 1; // will be used to identify the column being pulled from and or added to.
          colOne.push(poppedFromList);
        } else if (i < 3) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 2; // will be used to identify the column being pulled from and or added to.
          colTwo.push(poppedFromList);
        } else if (i < 6) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 3; // will be used to identify the column being pulled from and or added to.
          colThree.push(poppedFromList);
        } else if (i < 10) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 4; // will be used to identify the column being pulled from and or added to.
          colFour.push(poppedFromList);
        } else if (i < 15) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 5; // will be used to identify the column being pulled from and or added to.
          colFive.push(poppedFromList);
        } else if (i < 21) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 6; // will be used to identify the column being pulled from and or added to.
          colSix.push(poppedFromList);
        } else if (i < breakPoint) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 7; // will be used to identify the column being pulled from and or added to.
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
      remainingDeckIndex: deck.length - 1
    });
  };

  flipCard = () => {
    //this function should flip the card by taking the classname off or adding it.
  };

  goToNextCard = () => {
    /* Click the deck of remaining cards and this will increment and take the deck to the next position uses the modulo operator */
    const remainingDeckIndex =
      (this.state.remainingDeckIndex + 1) % this.state.deck.length;
    this.setState({ remainingDeckIndex });
  };

  /* Drag and drop functions*/

  handleDrag = event => {
    console.log("dragging");
  };

  handleDragStart = event => {
    console.log("drag start");
    event.target.style.opacity = ".35";
    dragSrc = event.target;

    event.dataTransfer.setData("text/html", event.target.innerHTML);
  };

  handleDragOver = event => {
    console.log("Drag over");
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.dataTransfer.dropEffect = "move";
  };

  handleDragEnter = event => {
    console.log("Drag enter")
    event.target.classList.add("over");
  };

  handleDragLeave = event => {
    console.log("Drag Leave")
    event.target.classList.remove("over");
  };

  handleDrop = event => {
    // event.preventDefault()
    // if(event.target.id === "droptarget"){
    //   const data = event.dataTransfer.getData("Text");
    //   event.target.appendChild(document.getElementById(data));
    // }
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (dragSrc !== event.target) {
      dragSrc.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData("text/html");
    }
    return false;
  
  };

  handleDragEnd = () => {
    console.log("Drag End")
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
      column.classList.remove("over");
      column.style.opacity = 1;
    });
  };

  handleRemainingDeckDrag = () => {
    /* this function will handle the remainingDeck drag. I want to increment the list so that it will go to the next card. */
    const deck = this.state.deck.slice();
    const remainingDeckIndex =
      (this.state.remainingDeckIndex + 1) % this.state.deck.length;
    const last = deck.pop();
    const last_obj = { last, from: "remainingDeck" }; //  from will be used when using rules if it is not fitting of the rules it will return back to its list it came from.

    this.setState({ deck, last_obj, remainingDeckIndex });
  };

  /* New drag and drop functions trying something different */
  allowingDrop = event => {
    console.log(event.target);
    event.preventDefault();
  };

  dragging = event => {
    console.log(event.target);
    event.dataTransfer.setData("text", event.target.id);
  };

  dropping = event => {
    console.log(event.target);
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  };

  doubleClick = (card, column) => {
    console.log(card);
    console.log(column);
  };
  /*
  Building the layout  one card is face up and six cards is face down next to it. 
  
  */

  render() {
    return (
      <div className="container">
        <Home
          deck={this.state.deck}
          colOne={this.state.colOne}
          colTwo={this.state.colTwo}
          colThree={this.state.colThree}
          colFour={this.state.colFour}
          colFive={this.state.colFive}
          colSix={this.state.colSix}
          colSeven={this.state.colSeven}
          finalStack1={this.state.finalStack1}
          finalStack2={this.state.finalStack2}
          finalStack3={this.state.finalStack3}
          finalStack4={this.state.finalStack4}
          doubleClick={this.doubleClick}
          handleDragStart={this.handleDragStart}
          handleDragOver={this.handleDragOver}
          handleDragEnter={this.handleDragEnter}
          handleDragLeave={this.handleDragLeave}
          handleOnDrop={this.handleDrop}
          handleDrag={this.handleDrag}
          handleDragEnd={this.handleDragEnd}
        />
      </div>
    );
  }
}

export default App;
