import React, { Component, Proptypes } from "react";
import FinalStack from './FinalStack'
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
    const index = (this.state.index + 1) % this.props.deck.length;
    this.setState({index});
  };

  render() {
    console.log(this.props.deck);
    console.log(this.state.index);
    if (this.state.index < 24) {
      return (
        <div className="topRow">
          <div className="drawPile">
            <div className="outline scene drawFrom" onClick={this.deckClick}>
              <p>React Solitaire</p>
            </div>
            <div className="outline scene column">
              <div className={"top " + this.props.deck[this.state.index].color}>
                <span>{this.props.deck[this.state.index].value}</span>{" "}
                {this.props.deck[this.state.index].suit === "hearts" ? (
                  <span>&hearts;</span>
                ) : this.props.deck[this.state.index].suit === "spades" ? (
                  <span>&spades;</span>
                ) : this.props.deck[this.state.index].suit === "clubs" ? (
                  <span>&clubs;</span>
                ) : (
                  <span>&#x2666;</span>
                )}
              </div>
              {this.props.deck[this.state.index].suit === "hearts" ? (
                <h1 className={this.props.deck[this.state.index].color}>
                  &hearts;
                </h1>
              ) : this.props.deck[this.state.index].suit === "spades" ? (
                <h1 className={this.props.deck[this.state.index].color}>
                  &spades;
                </h1>
              ) : this.props.deck[this.state.index].suit === "clubs" ? (
                <h1 className={this.props.deck[this.state.index].color}>
                  &clubs;
                </h1>
              ) : (
                <h1 className={this.props.deck[this.state.index].color}>
                  &#x2666;
                </h1>
              )}
              <div
                className={"bottom " + this.props.deck[this.state.index].color}
              >
                {this.props.deck[this.state.index].suit === "hearts" ? (
                  <span>&hearts;</span>
                ) : this.props.deck[this.state.index].suit === "spades" ? (
                  <span>&spades;</span>
                ) : this.props.deck[this.state.index].suit === "clubs" ? (
                  <span>&clubs;</span>
                ) : (
                  <span>&#x2666;</span>
                )}
                <span>{this.props.deck[this.state.index].value}</span>
              </div>
            </div>
          </div>
          <FinalStack />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default TopRow;
