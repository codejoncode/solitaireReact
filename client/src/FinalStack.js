import React, { Component } from "react";
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
          name = "stack1"
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
          name = "stack2"
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
          name = "stack3"
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
          name = "stack4"
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
