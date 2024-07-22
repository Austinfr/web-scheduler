import React from 'react';
import ADD_USER from '../utils/mutations';

function Signup () {
    return (
        <div>
            <h1>create an account</h1>
            <form onSubmit={ADD_USER}>
                <input id='username' type='text'></input>
                <label for='username'>Username:</label>
                <input id='password' type='text'></input>
                <label for='password'>Password</label>
            </form>
        </div>
    );
}

export default Signup