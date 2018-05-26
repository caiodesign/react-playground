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


    deleteUser (index, e) {
        const Users = Object.assign([], this.state.users);
        const userIndex = Users.findIndex( (item) => item.id === index)

       Users.splice(userIndex, 1);

       this.setState({
           users: Users
       })

    }

    changeUser (id, e) {
        const userIndex = this.state.users.findIndex( (item) => item.id === id );
        const Users = Object.assign([], this.state.users);

        Users[userIndex].name = e.target.value;

        this.setState({
            users: Users
        })
    }

    addUser (e) {
        e.preventDefault();

        const Users = Object.assign([], this.state.users);
        const newUser = {
            id: () => Users[Users.length - 1].id + 1,
            name: e.target.username.value,
            age: e.target.age.value
        }
        
        this.setState({
            users: Users.concat(newUser)
        })

        this.clearInput(e.target.username, e.target.age);
    }

    clearInput (...inputs){
        return inputs.map( (item) => item.value = "");
    }

	
    // PROPS =>
    // The render always send props and the component always receive it.
    
    render() {
        return (
            <div className="app">
                <ul>
                    {
                        this.state.users.map( (item, index) => {
                            return <User key={item.id} changeEvent={this.changeUser.bind(this, item.id)} delEvent={this.deleteUser.bind(this, item.id)} >{item.name}</User>
                        })
                    }
                </ul>
                <form onSubmit={this.addUser.bind(this)}>
                    <label>Username:</label>
                    <input type="text" name="username" />
                    <label>Age:</label>
                    <input type="number" name="age" />
                    <br />
                    <input type="submit" value="Add User"/>
                </form>
            </div>
        );
    }
}

export default App;
