import React, { Component, Proptypes } from "react";

class FinalDropZone extends Component {
  state = {};

  render() {
    console.log(this.props);
    // handleDragEnter={this.props.handleDragEnter}
    // handleDragOver={this.props.handleDragOver}
    // handleDragLeave={this.props.handleDragLeave}
    // handleOnDrop={this.props.handleOnDrop}
    // handleDragStart={this.props.handleDragStart}
    // handleDrag={this.props.handleDrag}
    // handleDragend={this.props.handleDragEnd}
    return (
      <div
        draggable="false"
        className="outline scene column"
        id="droptarget"
        onDragStart={this.props.handleDragStart}
        // onDrag = {this.props.handleDrag}
        onDragEnd={this.props.handleDragEnd}
        onDragEnter={this.props.handleDragEnter}
        onDragOver={event => this.props.handleDragOver(event, this.props.stack)}
        onDrop={this.props.handleOnDrop}
        onDragLeave={this.props.handleDragLeave}
        stack={this.props.stack}
        onDoubleClick={this.props.doubleClick}
      >
        {this.props.stack.length ? (
          <div>
            <div className={"top " + this.props.stack[this.props.stack.length -1].color}>
              <span draggable="false">
                {this.props.stack[this.props.stack.length -1].value}
              </span>{" "}
              {this.props.stack[this.props.stack.length -1].suit === "hearts" ? (
                <span>&hearts;</span>
              ) : this.props.stack[this.props.stack.length -1].suit === "spades" ? (
                <span draggable="false">&spades;</span>
              ) : this.props.stack[this.props.stack.length -1].suit === "clubs" ? (
                <span draggable="false">&clubs;</span>
              ) : (
                <span draggable="false">&#x2666;</span>
              )}
            </div>
            {this.props.stack[this.props.stack.length -1].suit === "hearts" ? (
              <h1
                draggable="false"
                className={this.props.stack[this.props.stack.length -1].color}
              >
                &hearts;
              </h1>
            ) : this.props.stack[this.props.stack.length -1].suit === "spades" ? (
              <h1
                draggable="false"
                className={this.props.stack[this.props.stack.length -1].color}
              >
                &spades;
              </h1>
            ) : this.props.stack[this.props.stack.length -1].suit === "clubs" ? (
              <h1
                draggable="false"
                className={this.props.stack[this.props.stack.length -1].color}
              >
                &clubs;
              </h1>
            ) : (
              <h1
                draggable="false"
                className={this.props.stack[this.props.stack.length -1].color}
              >
                &#x2666;
              </h1>
            )}
            <div
              className={"bottom " + this.props.stack[this.props.stack.length -1].color}
            >
              {this.props.stack[this.props.stack.length -1].suit === "hearts" ? (
                <span draggable="false">&hearts;</span>
              ) : this.props.stack[this.props.stack.length -1].suit === "spades" ? (
                <span draggable="false">&spades;</span>
              ) : this.props.stack[this.props.stack.length -1].suit === "clubs" ? (
                <span>&clubs;</span>
              ) : (
                <span draggable="false">&#x2666;</span>
              )}
              <span draggable="false">
                {this.props.stack[this.props.stack.length -1].value}
              </span>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default FinalDropZone;
