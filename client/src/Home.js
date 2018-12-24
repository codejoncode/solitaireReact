import React, { Component, Proptypes } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
class Home extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <button onClick = {this.props.startNewGame}>Start New Game</button>
          <button onClick = {this.props.handleUndo}>Undo Last Move ({this.props.numberOfUndos})</button>
        </div>
        <TopRow
          deck={this.props.deck}
          stack1={this.props.finalStack1}
          stack2={this.props.finalStack2}
          stack3={this.props.finalStack3}
          stack4={this.props.finalStack4}
          doubleClick={this.props.doubleClick}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragEnd={this.props.handleDragEnd}
          handleDeckClick = {this.props.handleDeckClick}
          deckIndex = {this.props.deckIndex}
          
          
        />
        {/* handleDragStart = {this.handleDragStart} 
            handleDragOver = {this.handleDragOver} 
            handleDragEnter = {this.handleDragEnter} 
            handleDragLeave = {this.handleDragLeave} 
            handleOnDrop = {this.handleDrop} 
            handleDrag = {this.handleDrag}
            handleDragEnd ={this.handleDragEnd} */}
        <BottomRow
          colOne={this.props.colOne}
          colTwo={this.props.colTwo}
          colThree={this.props.colThree}
          colFour={this.props.colFour}
          colFive={this.props.colFive}
          colSix={this.props.colSix}
          colSeven={this.props.colSeven}
          doubleClick={this.props.doubleClick}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragEnd={this.props.handleDragEnd}

        />
      </div>
    );
  }
}

export default Home;
