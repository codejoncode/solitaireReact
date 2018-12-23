import React, { Component } from "react";
import "./App.css";

import RemainingDeck from "./RemainingDeck";
import Home from "./Home";

let dragSrc = null;

class App extends Component {
  state = {
    deck: [],
    index: 0,
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
    remainingDeckIndex: 0,
    from : {}, 
    to : {}, 
  };
  componentWillMount() {
    this.setDeckUp();
  }

  returnActualValue = value => {
    /* This function will return the actual value. Curently value is being used to display the card
    However, the game will require the color to be opposite of the previous color and the value to be one less
    or the array for that section to be empty. Actual value will assign values 1 - 13 with Ace being first */
    let returning = null;
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
    let x = 0; 
    returning ? x = 1 : console.log("ISSUE WITH RETURNING", value);
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
              column: "none",
              bottomRow: false
            });
            break;
          case 1:
            deck.push({
              suit: "clubs",
              value: cards[j],
              color: "black",
              actual,
              connected: false,
              column: "none",
              bottomRow: false
            });
            break;
          case 2:
            deck.push({
              suit: "spades",
              value: cards[j],
              color: "black",
              actual,
              connected: false,
              column: "none",
              bottomRow: false
            });
            break;
          case 3:
            deck.push({
              suit: "diamonds",
              value: cards[j],
              color: "red",
              actual,
              connected: false,
              column: "none",
              bottomRow: false
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

          poppedFromList.showBack = false; // added to each column and will be used to show back / click and reveal card.
          //doesn't need a show back we will always reveal the card even after adding to this section. 
          poppedFromList.column = 1; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true; 
          colOne.push(poppedFromList);
        } else if (i < 3) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 2 ? false: true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 2; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
          colTwo.push(poppedFromList);
        } else if (i < 6) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 5 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 3; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
          colThree.push(poppedFromList);
        } else if (i < 10) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 9 ? false: true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 4; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
          colFour.push(poppedFromList);
        } else if (i < 15) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 14 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 5; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
          colFive.push(poppedFromList);
        } else if (i < 21) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === 20 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 6; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
          colSix.push(poppedFromList);
        } else if (i < breakPoint) {
          poppedFromList = deck.pop();
          poppedFromList.showBack = i === breakPoint - 1 ? false : true; // added to each column and will be used to show back / click and reveal card.
          poppedFromList.column = 7; // will be used to identify the column being pulled from and or added to.
          poppedFromList.bottomRow = true;
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
      remainingDeckIndex: deck.length - 1,
      index : deck.length -1,
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

  handleDragStart = (event, column = 1000) => {
    console.log("drag start");
    if(column !== 1000){
      console.log(column); 
    }

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
    let ix = this.state.index;
    switch(column){
      case "remaining deck":
        console.log(column, "triggered"); 
        
        console.log(deck.length, "length before removal");
        console.log(index, "this is the index to remove is splice handled right?")
        deck.splice(index, 1); 
        console.log(deck.length, "length after removal");
        ix = (this.state.index + 1) % deck.length; 
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
          if (colTwo.length){
            colTwo[colTwo.length -1].showBack = false; 
          }
        }
        break; 
      case "column 3":
        console.log(column, "triggered"); 
        if(index !== 5000){
          colThree.splice(index, 1);
        } else {
          colThree.pop();
          if (colThree.length){
            colThree[colThree.length - 1].showBack = false; 
          }
        }
        break; 
      case "column 4":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colFour.splice(index, 1);
        } else {
          colFour.pop();
          if(colFour.length) {
            colFour[colFour.length -1].showBack = false; 
          } 
        }
        break; 
      case "column 5":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colFive.splice(index, 1);
        } else {
          colFive.pop(); 
          if(colFive.length){
            colFive[colFive.length - 1].showBack = false; 
          }
        }
        break;
      case "column 6":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colSix.splice(index, 1);
        } else {
          colSix.pop();
          if(colSix.length){
            colSix[colSix.length - 1].showBack = false; 
          } 
        }
        break; 
      case "column 7":
        console.log(column, "triggered"); 
        if (index !== 5000){
          colSeven.splice(index, 1); 
        } else {
          colSeven.pop();
          if(colSeven.length){
            colSeven[colSeven.length - 1].showBack = false; 
          } 
        }

      default:
        console.log("no case for this yet", column);
    }
    
    console.log(ix, "why am i getting NaN")
    this.setState({index : ix, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4})
  }

  anyBlackCardsLeft = arr => {
    //returns true if the count is incremented. 
    let count = 0; 
    for(let i = 0; i< arr.length; i++){
      if (arr[i].showBack ){
        count ++; 
      }
      if(count){
        return false; 
      }
    }
    return true; 
  }

  connectedAdd = (card, column) => {
    console.log(card, "connected");
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

    /*if remaining deck is empty we can peform a way to get all the cards added at once */
    if (deck.length === 0){
      //I want to check if if all cards are revealed. 
      console.log("DECK IS EMPTY");
      let noBlackSideShowing = false; 
      const bottomRow = [colOne, colTwo, colThree, colFour, colFive, colSix, colSeven]; 
      let count = 0; 
      while (noBlackSideShowing === false && count !== bottomRow.length){
        noBlackSideShowing = this.anyBlackCardsLeft(bottomRow[count]);
        count += 1; 
      }

      if (noBlackSideShowing) {
        //now we will start to place the cards into the final stacks. 
        //should be able to pop of until we can't then switch to the next column.
        console.log("NO CARDS TURNED OVER AND NO CARDS LEFT IN DECK")
        while  (finalStack1.length + finalStack2.length + finalStack3.length + finalStack4.length !== 52) {
          console.log(finalStack1.length + finalStack2.length + finalStack3.length + finalStack4.length);
          const readyOne = colOne[colOne.length -1];
          const readyTwo = colTwo[colTwo.length - 1]; 
          const readyThree = colThree[colThree.length - 1];
          const readyFour = colFour[colFour.length - 1]; 
          const readyFive = colFive[colFive.length -1]; 
          const readySix = colSix[colSix.length -1];
          const readySeven = colSeven[colSeven.length - 1];
          const final_1 = finalStack1[finalStack1.length -1]
          const final_2 = finalStack2[finalStack2.length - 1]
          const final_3 = finalStack3[finalStack3.length -1]
          const final_4 = finalStack3[finalStack4.length - 1]

          const allReady = [readyOne, readyTwo, readyThree, readyFour, readyFive, readySix, readySeven]; 
          console.log(allReady)
          for (let ready of allReady){
            if(ready){
              if(ready.suit === finalStack1[finalStack1.length-1].suit && ready.actual === finalStack1.length){
                const popOff = colOne.pop();
                finalStack1.push(popOff)
              } else if (ready.suit === finalStack2[finalStack2.length-1].suit && ready.actual === finalStack2.length) {
                const popOff = colOne.pop();
                finalStack2.push(popOff); 
              } else if (ready.suit === finalStack3[finalStack3.length-1].suit && ready.actual === finalStack3.length){
                const popOff = colOne.pop();
                finalStack3.push(popOff); 
              } else if (ready.suit === finalStack4[finalStack4.length-1].suit && ready.actual === finalStack4.length){
                const popOff = colOne.pop(); 
                finalStack4.push(popOff); 
              }
            }

          }

        }
        
        //set state and break out of this function. here. 
        const ix = this.state.index % deck.length; 
        this.setState({index : ix, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4});
        return; 
      }
    }

    /*For now just a way to take connected cards to their place on the board. */
    const toBeAdded = []; 
    let foundAPlace = false; 
    switch(column){
      case "column 1":
        console.log(column, "triggered"); 
        console.log(colOne); 
        console.log(colOne[colOne.length -1], "first to pop")
        while(colOne.length && colOne[colOne.length - 1].connected){
          const toAdd = colOne.pop(); 
          toBeAdded.push(toAdd); 
          console.log(toBeAdded)
        }
        break;
      case "column 2":
        console.log(column, "triggered"); 
        console.log(colTwo);
        console.log(colTwo[colTwo.length - 1], "first to pop");
        while(colTwo.length && colTwo[colTwo.length - 1].connected){
          const toAdd = colTwo.pop();
          toBeAdded.push(toAdd);
          console.log(toBeAdded)
        } 
        break; 
      case "column 3":
        console.log(column, "triggered"); 
        console.log(colThree);
        console.log(colThree[colThree.length - 1], "first to pop");
        while(colThree.length && colThree[colThree.length - 1].connected){
          const toAdd = colThree.pop();
          toBeAdded.push(toAdd); 
          console.log(toBeAdded)
        }
        break; 
      case "column 4":
        console.log(column, "triggered"); 
        console.log(colFour);
        console.log(colFour[colFour.length - 1], "first to pop");
        while(colFour.length && colFour[colFour.length - 1].connected){
          const toAdd = colFour.pop();
          toBeAdded.push(toAdd);
          console.log(toBeAdded)
        }
        break; 
      case "column 5":
        console.log(column, "triggered"); 
        console.log(colFive);
        console.log(colFive[colFive.length, "first to pop"]);
        while(colFive.length && colFive[colFive.length - 1].connected){
          const toAdd = colFive.pop(); 
          toBeAdded.push(toAdd);
          console.log(toBeAdded)
        }
        break;
      case "column 6":
        console.log(column, "triggered"); 
        console.log(colSix);
        console.log(colSix[colSix.length -1], "first to pop");
        while(colSix.length && colSix[colSix.length - 1].connected){
          const toAdd = colSix.pop(); 
          toBeAdded.push(toAdd);
          console.log(toBeAdded)
        }
        break; 
      case "column 7":
        console.log(column, "triggered"); 
        console.log(colSeven);
        console.log(colSeven[colSeven.length - 1], "first to pop");
        while(colSeven.length && colSeven[colSeven.length - 1].connected){
          const toAdd = colSeven.pop();
          toBeAdded.push(toAdd);
          console.log(toBeAdded)
        }

      default:
        console.log("no case for this yet", column);
    }
    /* Now handle columns lastOne through lastSeven has the card avialble to the last of each column*/
    console.log("inside connected checking ");
    if(lastOne){
      if(lastOne.actual - 1 === card.actual && lastOne.color !== card.color){
        card.connected = true; 
        lastOne.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colOne.push(toBeAdded[i]);
        } 
        
      }
    }
    if(lastTwo){
      if (lastTwo.actual - 1 === card.actual && lastTwo.color !== card.color){
        card.connected = true;
        lastTwo.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colTwo.push(toBeAdded[i]);
        } 
        
      }
    }
    if(lastThree){
      if (lastThree.actual - 1 === card.actual && lastThree.color !== card.color){
        card.connected = true;
        lastThree.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colThree.push(toBeAdded[i]);
        } 
        
      }
    }
    if(lastFour){
      if (lastFour.actual - 1 === card.actual && lastFour.color !== card.color){
        card.connected = true;
        lastFour.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colFour.push(toBeAdded[i]);
        } 
      }
    }
    if(lastFive){
      if (lastFive.actual - 1 === card.actual && lastFive.color !== card.color){
        card.connected = true;
        lastFive.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colFive.push(toBeAdded[i]);
        }  
      }
    }
    if(lastSix){
      if (lastSix.actual - 1 === card.actual && lastSix.color !== card.color){
        card.connected = true;
        lastSix.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colSix.push(toBeAdded[i]);
        }  
      }
    }
    if(lastSeven){
      if (lastSeven.actual - 1 === card.actual && lastSeven.color !== card.color){
        card.connected = true;
        lastSeven.connected = true; 
        card.showBack = false;
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colSeven.push(toBeAdded[i]);
        }  
      }
    }

    /*Need to add card to empty section */
    if(foundAPlace === false){
      console.log("inside connected checking empty column")
      if(colOne.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colOne.push(toBeAdded[i]);
        } 
      }
      if(colTwo.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colTwo.push(toBeAdded[i]);
        } 
      }
      if(colThree.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colThree.push(toBeAdded[i]);
        } 
      }
      if (colFour.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colFour.push(toBeAdded[i]);
        }  
      }
      if (colFive.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colFive.push(toBeAdded[i]);
        } 
      }
      if (colSix.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colSix.push(toBeAdded[i]);
        } 
      }
      if (colSeven.length === 0){
        foundAPlace = true; 
        for (let i = toBeAdded.length -1; i >= 0; i--){
          colSeven.push(toBeAdded[i]);
        } 
      }
    }
    if(foundAPlace){
      const ix = this.state.index % deck.length; 
      this.setState({ index : ix, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4});
      return true; 
    } else {
      return false; 
    }

  } 

  doubleClick = (card, column, index = 5000) => {
    console.log(card, "coming in card");
    console.log(column);
    let foundAPlace = false; 
    const deck = this.state.deck.slice() 
    const colOne = this.state.colOne.slice()
    const colTwo = this.state.colTwo.slice()
    const colThree = this.state.colThree.slice()
    const colFour = this.state.colFour.slice()
    const colFive = this.state.colFive.slice()
    const colSix = this.state.colSix.slice()
    const colSeven = this.state.colSeven.slice()
    const columns = [colOne, colTwo, colThree, colFour, colFive, colSix, colSeven];
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
    const allLast = [lastOne, lastTwo, lastThree, lastFour, lastFive, lastSix, lastSeven]
    const allStacks = [finalStack1, finalStack2, finalStack3, finalStack4]
    let notOneOfLast = true; 

    for(let i = 0; i< allLast.length; i++){
      if(allLast[i]){
        if(allLast[i].suit === card.suit && allLast[i].color === card.color && allLast[i].value === card.value){
          notOneOfLast = false; 
          break; 
        }
      }
    }

    if (card.connected && notOneOfLast){
      //if its true we have to take the cards underneath it as well. 
      foundAPlace = this.connectedAdd(card, column); 
    }
    if (foundAPlace){
      return; 
    }
    console.log("check stacks and if this is an ace")
    for (let stack of allStacks){
      if(stack.length === 0 && card.value === 'A'){
        stack.push(card); 
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
        return; 
      }
    }

    //if card is at the bottom  
    if(card.bottomRow){
      console.log("bottom row check stacks")
      for (let stack of allStacks){
        if(stack.length > 0){
          if (stack.length + 1 === card.actual && stack[stack.length-1].suit === card.suit){
            stack.push(card);
            this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
            return;

          }
        }
      }
    }

    /* Now handle columns lastOne through lastSeven has the card avialble to the last of each column*/
    // const allLast = [lastOne, lastTwo, lastThree, lastFour, lastFive, lastSix, lastSeven]
    const allColumns = [ colOne, colTwo, colThree, colFour, colFive, colSix, colSeven]
    const columnObj = {1: allColumns[0], 2: allColumns[1], 3: allColumns[2], 4: allColumns[3], 5: allColumns[4], 6: allColumns[5],  7: allColumns[6]}
    let count = 1; //start off at one to use object above 
    console.log("check columns")
    for (let last of allLast){
      if(last){
        console.log(last, card, "870 new factoring"); 
        if (last.actual - 1 === card.actual && last.color !== card.color){
          card.connected = true;
          last.connected = true; 
          card.showBack = false; 
          card.bottomRow = true;
          columnObj[count].push(card);
          this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
          return; 
        } 
      }
      count += 1; 
    }
    
    //first check the final stacks 
    //I only want to check the final stacks if the card is at the bottom but not sure exactly yet. 
    console.log("stack checks")
    for (let stack of allStacks){
      if(stack.length > 0){
        if (stack.length + 1 === card.actual && stack[stack.length-1].suit === card.suit){
          stack.push(card);
          this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4); 
          return;
        }
      }
    }

    /*Need to add card to empty section  last resort*/
    console.log("empty columns check")
    for (let col of allColumns){
      if(col.length === 0){
        col.push(card);
        this.removeFromColumn(column, index, deck, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, finalStack1, finalStack2, finalStack3, finalStack4);
        return; 
      }
    }
  };

  deckClick = () => {
    // console.log("Current State index", this.state.index);
    // console.log("Length of the State", this.state.deck.length);
    const ix = (this.state.index + 1) % this.state.deck.length;
    // console.log(ix, "changed after double click")
    this.setState({ index : ix });
  };
  /*
  Building the layout  one card is face up and six cards is face down next to it. 
  
  */

  render() {
    // console.log("state index")
    // console.log(this.state.index);
    console.log(this.state.colOne);
    console.log(this.state.colTwo);
    console.log(this.state.colThree);
    console.log(this.state.colFour);
    console.log(this.state.colFive);
    console.log(this.state.colSix);
    console.log(this.state.colSeven);
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
          handleDeckClick = {this.deckClick}
          deckIndex = {this.state.index}
        />
      </div>
    );
  }
}

export default App;
