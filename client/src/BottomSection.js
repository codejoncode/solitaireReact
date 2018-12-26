import React, { Component } from "react";
import back from "./blackCardPicture.PNG";

class BottomSection extends Component {
  state = {
    
  };

  clickingCard = event => {
    // console.log(event.target);
    // console.log(event.target.classList);
  };

  render() {
    
    const cards = this.props.cards; 
    return (
      <div>
        {cards.map((card, id) => (
          <div key={id} className="deck">
            <div
              onClick={this.clickingCard}
              onDoubleClick={() =>
                this.props.doubleClick(card, this.props.name)
              }
              onDragStart = {(event) => this.props.handleDragStart(event, card, this.props.name)}
              // onDrag = {this.props.handleDrag}
              onDragEnd = {(event) => this.props.handleDragend(event, card, this.props.name)} 
              onDragEnter={(event) => this.props.handleDragEnter(event, card, this.props.name)}
              onDragOver={event => this.props.handleDragOver(event, card,  this.props.name)}
              onDrop={(event) => this.props.handleOnDrop(event, card,  this.props.name)}
              onDragLeave={(event) => this.props.handleDragLeave(event, card,  this.props.name)}
              draggable="false"
              className={
                id === this.props.cards.length - 1
                  ? "card lastInStack outline scene column"
                  : "card stackedCards outline scene column"
              }
              // className = "card stackedCards outline scene column" needed to keep last card at full width need to have a class witout stackedCards
            >
              {/* {(card.showBack === true && id !== this.props.cards.length - 1)  ? ( */}
              {(card.connected === false && id !== this.props.cards.length - 1) ? (
                <img className="backOfCard" src={back} alt="back of card" />
              ) : <div></div>}
              <div className={"top " + card.color}>
                <span>{card.value}</span>{" "}
                {card.suit === "hearts" ? (
                  <span>&hearts;</span>
                ) : card.suit === "spades" ? (
                  <span>&spades;</span>
                ) : card.suit === "clubs" ? (
                  <span>&clubs;</span>
                ) : (
                  <span>&#x2666;</span>
                )}
              </div>
              {card.suit === "hearts" ? (
                <h1 className={card.color}>&hearts;</h1>
              ) : card.suit === "spades" ? (
                <h1 className={card.color}>&spades;</h1>
              ) : card.suit === "clubs" ? (
                <h1 className={card.color}>&clubs;</h1>
              ) : (
                <h1 className={card.color}>&#x2666;</h1>
              )}
              <div className={"bottom " + card.color}>
                {card.suit === "hearts" ? (
                  <span>&hearts;</span>
                ) : card.suit === "spades" ? (
                  <span>&spades;</span>
                ) : card.suit === "clubs" ? (
                  <span>&clubs;</span>
                ) : (
                  <span>&#x2666;</span>
                )}
                <span>{card.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BottomSection;
