import React, { Component, Proptypes } from "react";
import TopRow from "./TopRow";
import BottomRow from './BottomRow'
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopRow deck={this.props.deck} />
        <BottomRow />
        
      </div>
    );
  }
}

export default Home;
