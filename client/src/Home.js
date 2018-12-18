import React, {Component, Proptypes} from 'react'; 
import TopRow from './TopRow'
class Home extends Component {
    state = {

    }
    render () {
        return (
            <TopRow deck = {this.props.deck}/>
        )
    }
}

export default Home; 