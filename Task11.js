import React from 'react';
import { useState } from 'react';

function Task11(props) {
    const [name,setName] = useState("");

    return (
        <div>
            <form>
                <div className="vasya" style={{border: "1px solid gray"}}>
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.currentTarget.value)}></input>
                </div>
                <p>Some text here</p>
            </form>
        </div>
    );
}

export default Task11;