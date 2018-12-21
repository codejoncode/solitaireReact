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

          // poppedFromList.showBack = true; // added to each column and will be used to show back / click and reveal card.
          //doesn't need a show back we will always reveal the card even after adding to this section. 
          poppedFromList.column = 1; // will be used to identify the column being pulled from and or added to.
          colOne.push(poppedFromList);
        } else if (i < 3) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 2 ? false: true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 2; // will be used to identify the column being pulled from and or added to.
          colTwo.push(poppedFromList);
        } else if (i < 6) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 5 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 3; // will be used to identify the column being pulled from and or added to.
          colThree.push(poppedFromList);
        } else if (i < 10) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 9 ? false: true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 4; // will be used to identify the column being pulled from and or added to.
          colFour.push(poppedFromList);
        } else if (i < 15) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 14 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 5; // will be used to identify the column being pulled from and or added to.
          colFive.push(poppedFromList);
        } else if (i < 21) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 20 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 6; // will be used to identify the column being pulled from and or added to.
          colSix.push(poppedFromList);
        } else if (i < breakPoint) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === breakPoint - 1 ? false : true; // added to each column and will be used to show back / click and reveal card.
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

  handleDragStart = (event) => {
    console.log("drag start");
    event.target.style.opacity = ".35";
    dragSrc = event.target;

    event.dataTransfer.setData("text/html", event.target.innerHTML);
  };

  handleDragOver = (event, column = 10000) => {
    if(column !== 10000){
      console.log(column); 
    }
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

  handleDrop = (event) => {
    // event.preventDefault()
    // if(event.target.id === "droptarget"){
    //   const data = event.dataTransfer.getData("Text");
    //   event.target.appendChild(document.getElementById(data));
    // }
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (dragSrc !== event.target) {
      console.log(dragSrc.classList)
      dragSrc.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData("text/html");
    }
    console.log(event.target.classList)
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

  removeFromColumn = (column, index,  deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4) => {
    
    console.log("Column to remove from", column)
    switch(column){
      case "remaining deck":
        console.log(column, "triggered"); 
        if (index !== 5000){
          console.log(deck.length);
          deck.splice(index, 1); 
          console.log(deck.length);
        } else {
          deck.pop(); 
        }
        break;
      case "column 1":
        console.log(column, "triggered");  
        if (index !== 5000){
          colOne.splice(index, 1); 
        } else {
          colOne.pop(); 
        }
        break;
      case "column 2":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colTwo.splice(index, 1);
        } else {
          colTwo.pop(); 
        }
        break; 
      case "column 3":
        console.log(column, "triggered"); 
        if(index !== 5000){
          colThree.splice(index, 1);
        } else {
          colThree.pop();
        }
        break; 
      case "column 4":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colFour.splice(index, 1);
        } else {
          colFour.pop(); 
        }
        break; 
      case "column 5":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colFive.splice(index, 1);
        } else {
          colFive.pop(); 
        }
        break;
      case "column 6":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colSix.splice(index, 1);
        } else {
          colSix.pop(); 
        }
        break; 
      case "column 7":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colSeven.splice(index, 1); 
        } else {
          colSeven.pop(); 
        }

      default:
        console.log("no case for this yet", column);
    }
    this.setState({deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4})
  }

  doubleClick = (card, column, index = 5000) => {
    console.log(card);
    console.log(column);
    const deck = this.state.deck.slice() 
    const colOne = this.state.colOne.slice()
    const colTwo = this.state.colTwo.slice()
    const colThree = this.state.colThree.slice()
    const colFour = this.state.colFour.slice()
    const colFive = this.state.colFive.slice()
    const colSix = this.state.colSix.slice()
    const colSeven = this.state.colSeven.slice()
    const finalStack1 = this.state.finalStack1.slice()
    const finalStack2 = this.state.finalStack2.slice()
    const finalStack3 = this.state.finalStack3.slice()
    const finalStack4 = this.state.finalStack4.slice()

    const lastOne = colOne[colOne.length -1];
    const lastTwo = colTwo[colTwo.length - 1]; 
    const lastThree = colThree[colThree.length - 1];
    const lastFour = colFour[colFour.length - 1]; 
    const lastFive = colFive[colFive.length -1]; 
    const lastSix = colSix[colSix.length -1];
    const lastSeven = colSeven[colSeven.length - 1]; 
    // suit: "hearts",
    // value: cards[j],
    // color: "red",
    // actual,
    // connected: false,
    // column: "none"

    //first check the final stacks 
    if (finalStack1.length === 0 && card.value === 'A'){
      console.log(finalStack1, "before ")
      finalStack1.push(card);
      console.log(finalStack1, "after")
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
      return; 
    }
    else if(finalStack2.length === 0 && card.value === 'A'){
      finalStack2.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
      return; 
    }
    else if(finalStack3.length === 0 && card.value === 'A'){
      finalStack3.push(card); 
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
      return;  
    }
    else if(finalStack4.length === 0 && card.value === 'A'){
      finalStack4.push(card); 
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
      return; 
    }

    if(finalStack1.length > 0){
      if(finalStack1.length + 1 === card.actual && finalStack1[finalStack1.length-1].color === card.color){
        finalStack1.push(card);
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
        return;  
      }
    }

    if(finalStack2.length > 0){
      if(finalStack2.length + 1 === card.actual && finalStack2[finalStack2.length-1].color === card.color){
        finalStack2.push(card);
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
        return; 
      }
    }

    if(finalStack3.length > 0){
      if(finalStack3.length + 1 === card.actual && finalStack3[finalStack3.length-1].color === card.color){
        finalStack3.push(card);
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
        return; 
      }
    }

    if(finalStack4.length > 0){
      if(finalStack4.length + 1 === card.actual && finalStack4[finalStack4.length-1].color === card.color){
        finalStack4.push(card);
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
        return; 
      }
    }

    /* Now handle columns lastOne through lastSeven has the card avialble to the last of each column*/
    console.log(lastOne, lastTwo, lastThree, lastFour, lastFive, lastSix, lastSeven);
    if(lastOne.actual - 1 === card.actual && lastOne.color !== card.color){
      card.connected = true; 
      colOne.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastTwo.actual - 1 === card.actual && lastTwo.color !== card.color){
      card.connected = true;
      colTwo.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastThree.actual - 1 === card.actual && lastThree.color !== card.color){
      card.connected = true;
      colThree.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastFour.actual - 1 === card.actual && lastFour.color !== card.color){
      card.connected = true;
      colFour.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastFive.actual - 1 === card.actual && lastFive.color !== card.color){
      card.connected = true;
      colFive.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastSix.actual - 1 === card.actual && lastSix.color !== card.color){
      card.connected = true;
      colSix.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }
    if (lastSeven.actual - 1 === card.actual && lastSeven.color !== card.color){
      card.connected = true;
      colSeven.push(card);
      this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
      return; 
    }

    /*Need to add card to empty section */
    


    


    // this.setState({deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4})
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
