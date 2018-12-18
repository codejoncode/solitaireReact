import React, {Component, Proptypes} from 'react'; 
import DraggableSection from './DraggableSection'
class BottomRow extends Component {
    state = {

    }

    render () {
        return (
            <div className="bottomRow">
              <DraggableSection />
              <DraggableSection />
              <DraggableSection />
              <DraggableSection />
              <DraggableSection />
              <DraggableSection />
              <DraggableSection />
            </div>
        )
    }
}

export default BottomRow; 
