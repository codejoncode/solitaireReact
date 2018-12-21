import React, { Component, Proptypes } from "react";
import DraggableSection from "./DraggableSection";
import back from "./blackCardPicture.PNG";

{
  /* <div className="">
  <img className = "backOfCard" src= {back} alt="back of card"/>              
</div> */
}
let lastCard = false;
class BottomSection extends Component {
  state = {};

  clickingCard = event => {
    // console.log(event.target);
    // console.log(event.target.classList);
  };

  render() {
    console.log("BottomSection");
    console.log(this.props);
    const cards = this.props.cards;
    console.log(cards);
    return (
      <div>
        {cards.map((card, id) => (
          <div key={id} className="deck">
            <div
              onClick={this.clickingCard}
              onDoubleClick={() =>
                this.props.doubleClick(card, this.props.name)
              }
              onDragStart = {this.props.handleDragStart}
              // onDrag = {this.props.handleDrag}
              onDragEnd = {this.props.handleDragEnd} 
              onDragEnter={this.handleDragEnter}
              onDragOver={event => this.props.handleDragOver(event, this.props.name)}
              onDrop={this.props.handleOnDrop}
              onDragLeave={this.props.handleDragLeave}
              draggable="true"
              className={
                id === this.props.cards.length - 1
                  ? "card lastInStack outline scene column"
                  : "card stackedCards outline scene column"
              }
            >
              {/* {(card.showBack === true && id !== this.props.cards.length - 1)  ? ( */}
              {(card.showBack === true ) ? (
                <img className="backOfCard" src={back} alt="back of card" />
              ) : (
                (lastCard = true)
              )}
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
