import React, { Component, Proptypes } from "react";
import DraggableSection from "./DraggableSection";

class BottomSection extends Component {
  state = {};

  render() {
    console.log("BottomSection");
    console.log(this.props);
    const cards = this.props.cards;
    console.log(cards);
    return (
      <div>
        {/* {cards.map((card, id) => {
          return (
            <DraggableSection className="card" key={id}>
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
            </DraggableSection>
          );
        })} */}
        {cards.map((card, id) => (
            <div  key = {id} className="outline scene column deck">
                <div draggable = "true" className = "">
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
