import React, { Component } from 'react';
import User from './components/User';
import './App.css';

class App extends Component {

    state = {
        users: [
            { id: 1, name: "Caio", age: 25 },
            { id: 2, name: "Caue", age: 19 },
            { id: 3, name: "Elaine", age: 42 },
            { id: 4, name: "Stark", age: 6 }
        ]
    };

    deleteUser = (index, e) =>{
        const Users = this.state.users;
        Users.splice(index, 1);
        this.setState({
            users: Users
        })
	}

	changeUserName = (id, e) => {
		const index = this.state.users.findIndex((user) => {
			return user.id === id;
		});

		const User = Object.assign({}, this.state.users[index]);
		const Users = Object.assign([], this.state.users);

		User.name = e.target.value;
		Users[index] = User;

		this.setState({users: Users});


	}
	
    // PROPS =>
    // The render always send props and the component always receive it.
    
    render() {
        return (
            <div className="app">
                <ul>
                    {
                        this.state.users.map((user, index) => {
                            return(
                                <User 
                                    delEvent={this.deleteUser.bind(this, index)} 
                                    key={user.id} 
                                    age={user.age}
									changeEvent={this.changeUserName.bind(this, user.id)}>
                                        {user.name}
                                </User> 
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;
