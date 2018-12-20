import React, { Component, Proptypes } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
class Home extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <TopRow deck={this.props.deck} stack1 = {this.props.finalStack1} stack2 = {this.props.finalStack2} stack3 = {this.props.finalStack3} stack4 = {this.props.finalStack4}/>
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
