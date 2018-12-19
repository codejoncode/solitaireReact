import React, { Component, Proptypes } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
class Home extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <TopRow deck={this.props.deck} />
        <BottomRow
          colOne={this.props.colOne}
          colTwo={this.props.colTwo}
          colThree={this.props.colThree}
          colFour={this.props.colFour}
          colFive={this.props.colFive}
          colSix={this.props.colSix}
          colSeven={this.props.colSeven}
        />
      </div>
    );
  }
}

export default Home;
