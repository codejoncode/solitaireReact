import React, {Component, Proptypes} from 'react'; 
import FinalDropZone from './FinalDropZone'
class FinalStack extends Component {
    state = {

    }

    render () {
        return (
            <div className = "finalStack">
                <FinalDropZone />
                <FinalDropZone />
                <FinalDropZone />
                <FinalDropZone />
            </div>
        )
    }
}

export default FinalStack; 