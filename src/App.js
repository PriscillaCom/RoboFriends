import React,{Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import { friends } from './friends'; //exporting info not by default requires you to destructor

import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users => { this.setState({friends: users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredRobots = this.state.friends.filter(friend => {
            return friend.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
       return(
       <div className='tc'>
           <h2>RoboFriends</h2>
           <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
                <CardList friends={filteredRobots}/>
           </Scroll>
       </div>
       );
   }
}

export default App;