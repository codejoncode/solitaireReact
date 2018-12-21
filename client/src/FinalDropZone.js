import React, { Component, Proptypes } from "react";

class FinalDropZone extends Component {
  state = {};

  render() {
    // handleDragEnter={this.props.handleDragEnter}
    // handleDragOver={this.props.handleDragOver}
    // handleDragLeave={this.props.handleDragLeave}
    // handleOnDrop={this.props.handleOnDrop}
    // handleDragStart={this.props.handleDragStart}
    // handleDrag={this.props.handleDrag}
    // handleDragend={this.props.handleDragEnd}
    return (
      <div
        draggable = "false"
        className="outline scene column"
        id = "droptarget"
        onDragStart = {this.props.handleDragStart}
        // onDrag = {this.props.handleDrag}
        onDragEnd = {this.props.handleDragEnd} 
        onDragEnter={this.props.handleDragEnter}
        onDragOver={this.props.handleDragOver}
        onDrop={this.props.handleOnDrop}
        onDragLeave={this.props.handleDragLeave}
        stack = {this.props.stack}
        doubleClick = {this.props.doubleClick}

      />
    );
  }
}

export default FinalDropZone;
