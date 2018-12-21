import React, { Component, Proptypes } from "react";
import FinalDropZone from "./FinalDropZone";
class FinalStack extends Component {
  state = {};

  render() {
    // handleDragStart={this.props.handleDragStart}
    // handleDrag={this.props.handleDrag}
    // handleDragLeave={this.props.handleDragLeave}
    // handleDragEnter = {this.props.handleDragEnter}
    // handleOnDrop = {this.props.handleOnDrop}
    // handleDragOver = {this.props.handleDragOver}
    // handleDragend={this.props.handleDragEnd}
    return (
      <div draggable = "false" className="finalStack">
        <FinalDropZone className = "stack1"
          stack = "stack1"
          doubleClick = {this.props.doubleClick}
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
          stack = {this.props.stack1}
        />
        <FinalDropZone className = "stack2"
          stack = "stack2"
          doubleClick = {this.props.doubleClick}
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
          stack = {this.props.stack2}
        />
        <FinalDropZone className = "stack3"
          stack = "stack3"
          doubleClick = {this.props.doubleClick}
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
          stack = {this.props.stack3}
        />
        <FinalDropZone className = "stack4"
          stack = "stack4"
          doubleClick = {this.props.doubleClick}
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
          stack = {this.props.stack4}
        />
      </div>
    );
  }
}

export default FinalStack;
