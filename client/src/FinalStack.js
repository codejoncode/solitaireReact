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
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
        />
        <FinalDropZone className = "stack2"
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
        />
        <FinalDropZone className = "stack3"
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
        />
        <FinalDropZone className = "stack4"
          handleDragEnter={this.props.handleDragEnter}
          handleDragOver={this.props.handleDragOver}
          handleDragLeave={this.props.handleDragLeave}
          handleOnDrop={this.props.handleOnDrop}
          handleDragStart={this.props.handleDragStart}
          handleDrag={this.props.handleDrag}
          handleDragEnd={this.props.handleDragEnd}
        />
      </div>
    );
  }
}

export default FinalStack;
