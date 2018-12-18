import React, { Component, Proptypes } from "react";
import TopRow from "./TopRow";
import FinalStack from "./FinalStack";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopRow deck={this.props.deck} />
        
      </div>
    );
  }
}

export default Home;
