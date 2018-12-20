import React, {Component, Proptypes} from 'react'; 
import DraggableSection from './DraggableSection';
import BottomSection from './BottomSection';
import back from './blackCardPicture.PNG';

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
              

            </div>
            
        )
    }
}

export default BottomRow; 
