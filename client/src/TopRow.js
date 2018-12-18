import React, {Component, Proptypes} from 'react'; 

class TopRow extends Component {
    state = {
        deck : []
    }

    render() {
        return (
            <div className="topRow">
              <div className="drawPile">
                <div className="outline scene drawFrom">
                    <p>React Solitaire</p>
                </div>
                <div className="outline scene column">
                
                </div>
              </div>
            </div>
        )
    }
}

export default TopRow; 