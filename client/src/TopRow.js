import React, { Component, Proptypes } from "react";
import FinalStack from "./FinalStack";
import back from "./blackCardPicture.PNG";
class TopRow extends Component {
  state = {
    index: 0
  };

  componentWillMount() {}
  componentDidMount() {
    if (this.props.deck) {
      const index = (this.props.deck.length - 1) % 24;
      //on inital load should only have 24 cards remaining

      this.setState({ index });
    }
  }

  deckClick = () => {
    console.log("Current State index", this.state.index);
    console.log("Length of the State", this.props.deck.length);
    const index = (this.state.index + 1) % this.props.deck.length;

    // if(index === this.props.deck.length){
    //   index -= 1; // this conditional was added becasue i keep getting a property color cannot be read on undefined and for some reason the index is the same number as the length. 
    // }
    this.setState({ index });
    
  };

  render() {
    // handleDragStart={this.props.handleDragStart}
    // handleDrag={this.props.handleDrag}
    // handleDragLeave={this.props.handleDragLeave}
    // handleDragEnter = {this.props.handleDragEnter}
    // handleOnDrop = {this.props.handleOnDrop}
    // handleDragOver = {this.props.handleDragOver}
    // handleDragend={this.props.handleDragEnd}
    console.log("this is the deck", this.props.deck);
    console.log("this is the index", this.state.index);
    
    if (this.state.index < this.props.deck.length) {
      return (
        <div className="topRow">
          <div className="drawPile">
            <div className="outline scene drawFrom" onClick={this.deckClick}>
              <img className="backOfCard" src={back} alt="back of card" />
            </div>
            <div
              onDoubleClick={this.props.doubleClick}
              draggable="true"
              className="outline scene column"
              onDragStart = {this.props.handleDragStart}
              // onDrag = {this.props.handleDrag}
              onDragEnd = {this.props.handleDragEnd} 
              onDragEnter={this.handleDragEnter}
              // onDragOver={this.props.handleDragOver}
              // onDrop={this.props.handleOnDrop}
              onDragLeave={this.props.handleDragLeave}
              onDoubleClick = {() => {this.props.doubleClick(this.props.deck[this.state.index], "remaining deck", this.state.index)}}    
              // I added minus one above to test out if it keeps me from getting a certain error
            >
              <div className={"top " + this.props.deck[this.state.index].color}>
                <span draggable="false">
                  {this.props.deck[this.state.index].value}
                </span>{" "}
                {this.props.deck[this.state.index].suit === "hearts" ? (
                  <span>&hearts;</span>
                ) : this.props.deck[this.state.index].suit === "spades" ? (
                  <span draggable="false">&spades;</span>
                ) : this.props.deck[this.state.index].suit === "clubs" ? (
                  <span draggable="false">&clubs;</span>
                ) : (
                  <span draggable="false">&#x2666;</span>
                )}
              </div>
              {this.props.deck[this.state.index].suit === "hearts" ? (
                <h1
                  draggable="false"
                  className={this.props.deck[this.state.index].color}
                >
                  &hearts;
                </h1>
              ) : this.props.deck[this.state.index].suit === "spades" ? (
                <h1
                  draggable="false"
                  className={this.props.deck[this.state.index].color}
                >
                  &spades;
                </h1>
              ) : this.props.deck[this.state.index].suit === "clubs" ? (
                <h1
                  draggable="false"
                  className={this.props.deck[this.state.index].color}
                >
                  &clubs;
                </h1>
              ) : (
                <h1
                  draggable="false"
                  className={this.props.deck[this.state.index].color}
                >
                  &#x2666;
                </h1>
              )}
              <div
                className={"bottom " + this.props.deck[this.state.index].color}
              >
                {this.props.deck[this.state.index].suit === "hearts" ? (
                  <span draggable="false">&hearts;</span>
                ) : this.props.deck[this.state.index].suit === "spades" ? (
                  <span draggable="false">&spades;</span>
                ) : this.props.deck[this.state.index].suit === "clubs" ? (
                  <span>&clubs;</span>
                ) : (
                  <span draggable="false">&#x2666;</span>
                )}
                <span draggable="false">
                  {this.props.deck[this.state.index].value}
                </span>
              </div>
            </div>
          </div>
          {/* // handleDragStart={this.props.handleDragStart}
          // handleDrag={this.props.handleDrag}
          // handleDragLeave={this.props.handleDragLeave}
          // handleDragEnter = {this.props.handleDragEnter}
          // handleOnDrop = {this.props.handleOnDrop}
          // handleDragOver = {this.props.handleDragOver}
          // handleDragend={this.props.handleDragEnd} */}
          <FinalStack
            doubleClick={this.props.doubleClick}
            handleDragStart={this.props.handleDragStart}
            handleDrag={this.props.handleDrag}
            handleDragLeave={this.props.handleDragLeave}
            handleDragEnter={this.props.handleDragEnter}
            handleOnDrop={this.props.handleOnDrop}
            handleDragOver={this.props.handleDragOver}
            handleDragEnd={this.props.handleDragEnd}
            stack1 = {this.props.stack1}
            stack2 = {this.props.stack2}
            stack3 = {this.props.stack3}
            stack4 = {this.props.stack4}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default TopRow;
