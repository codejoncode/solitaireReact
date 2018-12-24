import React, {Component} from 'react'; 
import Card from "./Card"

class RemainingDeck extends Component {
    state = {

    }

    render () {
        return (
            <div className = "topRow">
              <div className="drawPile">
                <div className="outline scene drawFrom">
                    <Card />
                    <Card />
                </div>
              
              </div>
            </div>
        )
    }
}

export default RemainingDeck; 