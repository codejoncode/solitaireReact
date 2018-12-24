import React, { Component } from "react";

import BottomSection from "./BottomSection";

class BottomRow extends Component {
  state = {};

  render() {
    return (
      <div className="bottomRow">
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colOne}
          name="column 1"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colTwo}
          name="column 2"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colThree}
          name="column 3"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colFour}
          name="column 4"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colFive}
          name="column 5"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colSix}
          name="column 6"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
        <BottomSection
          doubleClick={this.props.doubleClick}
          cards={this.props.colSeven}
          name="column 7"
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragLeave={this.props.handleDragLeave}
          handleDragEnter = {this.props.handleDragEnter}
          handleOnDrop = {this.props.handleOnDrop}
          handleDragOver = {this.props.handleDragOver}
          handleDragend={this.props.handleDragEnd}
        />
      </div>
    );
  }
}

export default BottomRow;
