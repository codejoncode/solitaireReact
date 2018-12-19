import React, {Component, Proptypes} from 'react'; 
import DraggableSection from './DraggableSection';
import BottomSection from './BottomSection';
class BottomRow extends Component {
    state = {

    }

    render () {
        return (
            <div className="bottomRow">
              <BottomSection cards = {this.props.colOne}/>
              <BottomSection cards = {this.props.colTwo}/>
              <BottomSection cards = {this.props.colThree}/>
              <BottomSection cards = {this.props.colFour}/>
              <BottomSection cards = {this.props.colFive}/>
              <BottomSection cards = {this.props.colSix}/>
              <BottomSection cards = {this.props.colSeven}/>
              
              {/* <div className="deck">
                <div className="outline scene card">1</div>
                <div className="outline scene card">2</div>
                <div className="outline scene card">3</div>
                <div className="outline scene card">4</div>
                <div className="outline scene card">5</div>
              </div> */}
            </div>
        )
    }
}

export default BottomRow; 
