import React from 'react';

const UserInput = ({changed, username}) => {
    return(
        <div>
            <input type="text" onChange={changed} defaultValue={username}></input>
        </div>
    )
};

export default UserInput;