import React from 'react';

const User = props => {
    return (
        <li>
            <span>Name: {props.children}</span>
            <span>Age: {props.age}</span>
            <input onChange={props.changeEvent} type="text" value={props.children} />
            <button onClick={props.delEvent}>Delete user</button>
        </li>
    )
}

export default User;